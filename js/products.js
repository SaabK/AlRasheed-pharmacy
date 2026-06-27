/* ============================================================
   AL-RASHEED PHARMACY — PRODUCTS.JS
   Renders product cards, wires search / filter / sort / wishlist
   on any page that includes a [data-product-grid] element.
   ============================================================ */

(function(){
  "use strict";
  window.PRODUCTS = PRODUCTS; // expose data.js list globally for cart.js lookups

  const WISHLIST_KEY = "arp_wishlist_v1";
  function readWishlist(){
    try{ return JSON.parse(localStorage.getItem(WISHLIST_KEY) || "[]"); }catch(e){ return []; }
  }
  function writeWishlist(list){ localStorage.setItem(WISHLIST_KEY, JSON.stringify(list)); }
  function toggleWishlist(id){
    let list = readWishlist();
    if(list.includes(id)){ list = list.filter(x => x !== id); }
    else { list.push(id); window.showToast("Saved to your wishlist"); }
    writeWishlist(list);
    return list.includes(id);
  }

  function starString(rating){
    const full = Math.round(rating);
    return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(0, 5 - full);
  }

  function discountPct(p){
    if(!p.oldPrice || p.oldPrice <= p.price) return null;
    return Math.round(100 - (p.price / p.oldPrice) * 100);
  }

  function productCardHTML(p){
    const disc = discountPct(p);
    const wished = readWishlist().includes(p.id);
    const stockLabel = p.stock === "in" ? "In Stock" : p.stock === "low" ? "Only Few Left" : "Out of Stock";
    return `
    <article class="product-card reveal is-visible" data-id="${p.id}" data-category="${p.category}" data-price="${p.price}" data-name="${p.name.toLowerCase()}">
      <div class="product-media">
        <a href="product.html?id=${p.id}" aria-label="View ${escapeHTML(p.name)}">
          <img src="${p.img}" alt="${escapeHTML(p.name)}" loading="lazy" width="600" height="600">
        </a>
        <div class="badge-stack">
          ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
          ${disc ? `<span class="badge discount">-${disc}%</span>` : ""}
        </div>
        <button class="wishlist-btn ${wished ? "is-active" : ""}" data-wishlist="${p.id}" aria-label="Save to wishlist" aria-pressed="${wished}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${wished ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2"><path d="M12 21s-8-4.6-10.2-9.4C.4 8 2 4.5 5.6 4c2-.3 3.8.7 4.9 2.4C11.6 4.7 13.4 3.7 15.4 4c3.6.5 5.2 4 4.2 7.6C17.4 16.4 12 21 12 21z"/></svg>
        </button>
        <button class="quickview-btn" data-quickview="${p.id}">Quick View</button>
        ${p.placeholder ? `<span class="placeholder-flag">Placeholder Photo</span>` : ""}
      </div>
      <div class="product-body">
        <span class="product-cat">${labelForCategory(p.category)}</span>
        <h3 class="product-name"><a href="product.html?id=${p.id}">${escapeHTML(p.name)}</a></h3>
        <div class="product-rating"><span class="stars">${starString(p.rating)}</span><span>${p.rating.toFixed(1)} (${p.reviews})</span></div>
        <div class="product-price-row">
          <span class="price-now">Rs ${p.price.toLocaleString()}</span>
          ${p.oldPrice ? `<span class="price-old">Rs ${p.oldPrice.toLocaleString()}</span>` : ""}
          <span class="stock-tag ${p.stock}">${stockLabel}</span>
        </div>
        <div class="product-actions">
          <div class="qty-stepper" data-stepper="${p.id}">
            <button type="button" data-step="-1" aria-label="Decrease quantity">−</button>
            <input type="text" inputmode="numeric" value="1" aria-label="Quantity" readonly>
            <button type="button" data-step="1" aria-label="Increase quantity">+</button>
          </div>
          <button class="add-cart-btn" data-add="${p.id}" ${p.stock === "out" ? "disabled" : ""}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
            Add to Cart
          </button>
        </div>
      </div>
    </article>`;
  }

  function escapeHTML(str){
    return String(str).replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
  }
  function labelForCategory(id){
    const c = CATEGORIES.find(c => c.id === id);
    return c ? c.name : id;
  }
  window.labelForCategory = labelForCategory;

  function wireGrid(grid){
    grid.addEventListener("click", (e) => {
      const stepBtn = e.target.closest("[data-step]");
      if(stepBtn){
        const wrap = stepBtn.closest("[data-stepper]");
        const input = wrap.querySelector("input");
        let val = parseInt(input.value, 10) || 1;
        val += parseInt(stepBtn.dataset.step, 10);
        if(val < 1) val = 1;
        if(val > 20) val = 20;
        input.value = val;
        return;
      }
      const addBtn = e.target.closest("[data-add]");
      if(addBtn){
        const id = addBtn.dataset.add;
        const card = addBtn.closest(".product-card");
        const qty = parseInt(card.querySelector("[data-stepper] input").value, 10) || 1;
        window.Cart.add(id, qty);
        addBtn.classList.add("is-added");
        const original = addBtn.innerHTML;
        addBtn.innerHTML = "Added ✓";
        setTimeout(() => { addBtn.innerHTML = original; addBtn.classList.remove("is-added"); }, 1400);
        return;
      }
      const wishBtn = e.target.closest("[data-wishlist]");
      if(wishBtn){
        const active = toggleWishlist(wishBtn.dataset.wishlist);
        wishBtn.classList.toggle("is-active", active);
        wishBtn.setAttribute("aria-pressed", active);
        wishBtn.querySelector("svg").setAttribute("fill", active ? "currentColor" : "none");
        return;
      }
      const qvBtn = e.target.closest("[data-quickview]");
      if(qvBtn){
        openQuickView(qvBtn.dataset.quickview);
      }
    });
  }

  /* ---------------- Quick View modal ---------------- */
  let modalEl;
  function buildModal(){
    modalEl = document.createElement("div");
    modalEl.className = "qv-modal";
    modalEl.innerHTML = `
      <style>
        .qv-modal{position:fixed;inset:0;z-index:250;display:none;align-items:center;justify-content:center;padding:20px;}
        .qv-modal.is-open{display:flex;}
        .qv-overlay{position:absolute;inset:0;background:rgba(11,30,24,.6);backdrop-filter:blur(3px);}
        .qv-box{position:relative;background:#fff;border-radius:24px;max-width:760px;width:100%;max-height:88vh;overflow-y:auto;display:grid;grid-template-columns:1fr 1fr;gap:0;z-index:1;box-shadow:0 30px 80px rgba(0,0,0,.3);}
        .qv-box img{width:100%;height:100%;object-fit:cover;min-height:280px;}
        .qv-info{padding:30px;}
        .qv-close{position:absolute;top:14px;right:14px;width:36px;height:36px;border-radius:50%;background:#fff;border:1px solid var(--line);font-size:1.1rem;z-index:2;}
        @media (max-width:640px){.qv-box{grid-template-columns:1fr;}}
      </style>
      <div class="qv-overlay" data-close></div>
      <div class="qv-box" role="dialog" aria-modal="true" aria-label="Product quick view">
        <button class="qv-close" data-close aria-label="Close">✕</button>
        <div class="qv-media"></div>
        <div class="qv-info"></div>
      </div>`;
    document.body.appendChild(modalEl);
    modalEl.addEventListener("click", (e) => { if(e.target.closest("[data-close]")) closeModal(); });
    document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeModal(); });
  }
  function closeModal(){ if(modalEl) modalEl.classList.remove("is-open"); document.body.style.overflow=""; }
  function openQuickView(id){
    if(!modalEl) buildModal();
    const p = PRODUCTS.find(p => p.id === id);
    if(!p) return;
    modalEl.querySelector(".qv-media").innerHTML = `<img src="${p.img}" alt="${escapeHTML(p.name)}" loading="lazy">`;
    modalEl.querySelector(".qv-info").innerHTML = `
      <span class="product-cat">${labelForCategory(p.category)}</span>
      <h3 style="margin:8px 0 10px;font-size:1.2rem;">${escapeHTML(p.name)}</h3>
      <div class="product-rating" style="margin-bottom:10px;"><span class="stars">${starString(p.rating)}</span><span>${p.rating.toFixed(1)} (${p.reviews} reviews)</span></div>
      <p style="color:var(--charcoal-60);font-size:.9rem;margin-bottom:16px;">${escapeHTML(p.desc)}</p>
      <div class="product-price-row" style="margin-bottom:18px;">
        <span class="price-now">Rs ${p.price.toLocaleString()}</span>
        ${p.oldPrice ? `<span class="price-old">Rs ${p.oldPrice.toLocaleString()}</span>` : ""}
      </div>
      <div style="display:flex;gap:10px;">
        <button class="btn btn-primary" data-add="${p.id}" id="qvAddBtn">Add to Cart</button>
        <a class="btn btn-outline" href="product.html?id=${p.id}">View Full Details</a>
      </div>`;
    modalEl.querySelector("#qvAddBtn").addEventListener("click", () => { window.Cart.add(p.id, 1); closeModal(); });
    modalEl.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  window.openQuickView = openQuickView;

  /* ---------------- Public render API ---------------- */
  window.renderProductGrid = function(grid, list){
    if(!list.length){
      grid.innerHTML = `<div class="empty-state"><h3>No products found</h3><p>Try a different search term or clear your filters.</p></div>`;
      return;
    }
    grid.innerHTML = list.map(productCardHTML).join("");
  };

  document.querySelectorAll("[data-product-grid]").forEach(wireGrid);

})();
