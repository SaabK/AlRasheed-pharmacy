/* ============================================================
   AL-RASHEED PHARMACY — MAIN.JS
   Shared behaviour for every page: navbar, mobile menu, reveal
   animations, toasts, cart engine (localStorage), back-to-top,
   floating actions, offline detection.
   ============================================================ */

(function(){
  "use strict";

  /* ---------------- Navbar solid-on-scroll ---------------- */
  const navbar = document.querySelector(".navbar");
  function syncNavbar(){
    if(!navbar) return;
    if(window.scrollY > 30 || !document.body.classList.contains("has-transparent-nav")){
      navbar.classList.add("is-solid");
    }
    if(window.scrollY <= 30 && document.body.classList.contains("has-transparent-nav")){
      navbar.classList.remove("is-solid");
    }
  }
  syncNavbar();
  window.addEventListener("scroll", syncNavbar, {passive:true});

  /* ---------------- Mobile menu ---------------- */
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  if(hamburger && mobileMenu){
    hamburger.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("is-open");
      hamburger.classList.toggle("is-active", open);
      hamburger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      hamburger.classList.remove("is-active");
      document.body.style.overflow = "";
    }));
  }

  /* ---------------- Scroll reveal ---------------- */
  const revealEls = document.querySelectorAll(".reveal");
  if("IntersectionObserver" in window && revealEls.length){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting){
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, {threshold:.12});
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("is-visible"));
  }

  /* ---------------- Animated counters ---------------- */
  document.querySelectorAll("[data-count]").forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting){
          let cur = 0;
          const step = Math.max(1, Math.round(target / 60));
          const tick = () => {
            cur += step;
            if(cur >= target){ el.textContent = target.toLocaleString(); return; }
            el.textContent = cur.toLocaleString();
            requestAnimationFrame(tick);
          };
          tick();
          io.unobserve(el);
        }
      });
    }, {threshold:.4});
    io.observe(el);
  });

  /* ---------------- Back to top ---------------- */
  const backToTop = document.querySelector(".back-to-top");
  if(backToTop){
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("is-visible", window.scrollY > 500);
    }, {passive:true});
    backToTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
  }

  /* ---------------- FAQ accordion ---------------- */
  document.querySelectorAll(".faq-item").forEach(item => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    if(!q || !a) return;
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item.is-open").forEach(other => {
        if(other !== item){
          other.classList.remove("is-open");
          other.querySelector(".faq-a").style.maxHeight = null;
          other.querySelector(".faq-q").setAttribute("aria-expanded","false");
        }
      });
      item.classList.toggle("is-open", !isOpen);
      q.setAttribute("aria-expanded", (!isOpen).toString());
      a.style.maxHeight = !isOpen ? a.scrollHeight + "px" : null;
    });
  });

  /* ---------------- Offline detection ---------------- */
  const offlineBanner = document.querySelector(".offline-banner");
  function syncOnline(){
    if(!offlineBanner) return;
    offlineBanner.classList.toggle("is-visible", !navigator.onLine);
  }
  window.addEventListener("online", syncOnline);
  window.addEventListener("offline", syncOnline);
  syncOnline();

  /* ============================================================
     TOAST NOTIFICATIONS
     ============================================================ */
  function ensureToastStack(){
    let stack = document.querySelector(".toast-stack");
    if(!stack){
      stack = document.createElement("div");
      stack.className = "toast-stack";
      stack.setAttribute("role","status");
      stack.setAttribute("aria-live","polite");
      document.body.appendChild(stack);
    }
    return stack;
  }
  window.showToast = function(message){
    const stack = ensureToastStack();
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    stack.appendChild(toast);
    setTimeout(() => {
      toast.style.transition = "opacity .3s ease, transform .3s ease";
      toast.style.opacity = "0";
      toast.style.transform = "translateX(30px)";
      setTimeout(() => toast.remove(), 320);
    }, 2600);
  };

  /* ============================================================
     CART ENGINE — shared across all pages via localStorage
     ============================================================ */
  const CART_KEY = "arp_cart_v1";

  function readCart(){
    try{
      const raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : [];
    }catch(e){ return []; }
  }
  function writeCart(items){
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    syncCartCount();
    window.dispatchEvent(new CustomEvent("cart:changed", {detail:items}));
  }
  function findProduct(id){
    return (window.PRODUCTS || []).find(p => p.id === id);
  }

  window.Cart = {
    get(){ return readCart(); },
    add(id, qty){
      qty = qty || 1;
      const items = readCart();
      const existing = items.find(i => i.id === id);
      if(existing){ existing.qty += qty; } else { items.push({id, qty}); }
      writeCart(items);
      const p = findProduct(id);
      window.showToast((p ? p.name : "Item") + " added to cart");
    },
    setQty(id, qty){
      let items = readCart();
      if(qty <= 0){ items = items.filter(i => i.id !== id); }
      else { const it = items.find(i => i.id === id); if(it) it.qty = qty; }
      writeCart(items);
    },
    remove(id){
      const items = readCart().filter(i => i.id !== id);
      writeCart(items);
      window.showToast("Item removed from cart");
    },
    clear(){ writeCart([]); },
    count(){ return readCart().reduce((sum, i) => sum + i.qty, 0); },
    subtotal(){
      return readCart().reduce((sum, i) => {
        const p = findProduct(i.id);
        return sum + (p ? p.price * i.qty : 0);
      }, 0);
    },
    detailedItems(){
      return readCart().map(i => {
        const p = findProduct(i.id);
        return p ? {...p, qty: i.qty, lineTotal: p.price * i.qty} : null;
      }).filter(Boolean);
    }
  };

  function syncCartCount(){
    const n = window.Cart.count();
    document.querySelectorAll(".cart-count").forEach(el => {
      el.textContent = n;
      el.style.display = n > 0 ? "flex" : "none";
    });
  }
  document.addEventListener("DOMContentLoaded", syncCartCount);
  syncCartCount();

})();
