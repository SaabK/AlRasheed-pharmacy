/* ============================================================
   AL-RASHEED PHARMACY — PRODUCT & SITE DATA
   Real product photos are used where available (images/ folder,
   taken from the pharmacy's own Facebook page). Items marked
   placeholder:true use a stock photo service (picsum.photos) as
   a stand-in — swap the `img` value for your own photo later,
   the layout will not change.
   ============================================================ */

const STORE = {
  name: "Al-Rasheed Pharmacy",
  tagline: "Your Health Companion",
  phone: "0300-6327576",
  phone2: "0340-7095803",
  whatsapp: "923126285603", // international format, no +
  address: "G.T Road, Near Phatak Bazar, Mian Channu, Punjab, Pakistan",
  hours: "Open Daily · 9:00 AM – 12:00 Midnight",
  facebook: "https://www.facebook.com/p/Al-Rasheed-Pharmacy-100067633133191/",
  freeDeliveryThreshold: 1500,
  deliveryFee: 150,
  mapsEmbed: "https://www.google.com/maps?q=Phatak+Bazar+Mian+Channu&output=embed"
};

/* Categories shown across the site */
const CATEGORIES = [
  { id: "skincare",     name: "Skin Care",          icon: "sparkle" },
  { id: "whitening",    name: "Whitening & Glow",    icon: "sun" },
  { id: "sunscreen",    name: "Sun Protection",       icon: "shield-sun" },
  { id: "haircare",     name: "Hair Care",            icon: "hair" },
  { id: "supplements",  name: "Vitamins & Supplements", icon: "capsule" },
  { id: "babycare",     name: "Baby Care",            icon: "baby" },
  { id: "equipment",    name: "Medical Equipment",     icon: "device" },
  { id: "mens",         name: "Men's Health",         icon: "men" },
  { id: "medicines",    name: "OTC Medicines",         icon: "pill" }
];

/* Product catalogue */
const PRODUCTS = [
  {
    id: "p01", name: "Solaris SC Transparent Sun Screen Gel SPF 40",
    brand: "PharmaHealth", category: "sunscreen",
    price: 950, oldPrice: 1100, stock: "in", rating: 4.7, reviews: 38,
    img: "images/sunscreen-solaris.jpg",
    desc: "Sebum-control transparent sunscreen gel for oily and combination skin. Non-whitening, non-tanning, non-greasy, non-comedogenic and water resistant.",
    manufacturer: "PharmaHealth Cosmetology", pack: "60ml", usage: "Apply liberally 15 minutes before sun exposure, reapply every 3–4 hours.",
    warnings: "For external use only. Avoid contact with eyes.", featured: true, badge: "Best Seller"
  },
  {
    id: "p02", name: "Rejox Face Wash",
    brand: "Rejox", category: "skincare",
    price: 750, oldPrice: 850, stock: "in", rating: 4.5, reviews: 21,
    img: "images/rejox-facewash-cream.jpg",
    desc: "Gentle daily face wash that cleanses without stripping the skin's natural moisture barrier, leaving skin soft and refreshed.",
    manufacturer: "Rejox", pack: "120ml", usage: "Use twice daily on damp skin, massage gently and rinse.",
    warnings: "Discontinue if irritation occurs.", featured: true
  },
  {
    id: "p03", name: "Rejox Skin Lightening Cream",
    brand: "Rejox", category: "whitening",
    price: 680, oldPrice: 760, stock: "in", rating: 4.3, reviews: 17,
    img: "images/rejox-facewash-cream.jpg",
    desc: "Brightening cream formulated without kojic acid or hydroquinone for a gentler approach to an even, radiant complexion.",
    manufacturer: "Rejox", pack: "30gm", usage: "Apply a thin layer at night to clean skin.",
    warnings: "Use sunscreen during the day while using this product."
  },
  {
    id: "p04", name: "Hair Max Plus Minoxidil 5% Topical Solution",
    brand: "Hair Max", category: "haircare",
    price: 1450, oldPrice: 1650, stock: "in", rating: 4.6, reviews: 64,
    img: "images/hairmax-minoxidil.jpg",
    desc: "Clinically recognised minoxidil 5% topical solution for baldness and thinning hair, helping support visible regrowth with regular use.",
    manufacturer: "Hair Max", pack: "60ml", usage: "Apply 1ml to the affected scalp area twice daily.",
    warnings: "For external use only. Not for use by women who are pregnant or breastfeeding.", featured: true, badge: "Popular"
  },
  {
    id: "p05", name: "Glutone-C Anti-Oxidant Fairness Cream",
    brand: "Glutone", category: "whitening",
    price: 590, oldPrice: 690, stock: "in", rating: 4.2, reviews: 12,
    img: "images/glutone-c-cream.jpg",
    desc: "Glutathione and Vitamin C enriched antioxidant cream for a healthy, glowing and spotless complexion.",
    manufacturer: "Glutone", pack: "30gms", usage: "Apply evenly to face and neck once daily.",
    warnings: "Patch test recommended before first use."
  },
  {
    id: "p06", name: "GlutaMAX Whitening Cream",
    brand: "GlutaMAX", category: "whitening",
    price: 1250, oldPrice: 1400, stock: "in", rating: 4.4, reviews: 29,
    img: "images/glutamax-whitening.jpg",
    desc: "Advanced glutathione complex whitening cream that brightens complexion, reduces uneven pigmentation and dark spots.",
    manufacturer: "Maxtech", pack: "30gm", usage: "Apply twice daily to clean skin.",
    warnings: "Avoid contact with eyes."
  },
  {
    id: "p07", name: "GlutaMAX Reduced Glutathione Whitening Soap",
    brand: "GlutaMAX", category: "whitening",
    price: 450, oldPrice: 500, stock: "in", rating: 4.1, reviews: 9,
    img: "images/glutamax-whitening.jpg",
    desc: "Advanced skin whitening soap enriched with reduced glutathione for daily gentle brightening cleanse.",
    manufacturer: "Maxtech", pack: "75gm x 3", usage: "Use during daily bath/shower.",
    warnings: "Keep away from eyes."
  },
  {
    id: "p08", name: "Xelite Whitening Face Wash",
    brand: "Xelite", category: "skincare",
    price: 620, oldPrice: 700, stock: "in", rating: 4.3, reviews: 14,
    img: "images/xelite-facewash.jpg",
    desc: "Scientifically proven whitening formula face wash for instantly fresh and glowing skin, suitable for all skin types.",
    manufacturer: "Xelite", pack: "120ml", usage: "Use morning and night on wet face.",
    warnings: "External use only."
  },
  {
    id: "p09", name: "Nutrifactor Bio Grow Syrup (4–16 Years)",
    brand: "Nutrifactor", category: "babycare",
    price: 880, oldPrice: 980, stock: "in", rating: 4.8, reviews: 47,
    img: "images/biogrow-syrup.jpg",
    desc: "13 essential vitamins & minerals to support healthy growth and development in children aged 4 to 16 years. Great tasting formula.",
    manufacturer: "Nutrifactor", pack: "120ml", dosage: "5–10ml daily or as directed by physician.",
    usage: "Shake well before use. Give after meals.",
    warnings: "Keep out of reach of children below 4 years.", featured: true, badge: "Kids Favourite"
  },
  {
    id: "p10", name: "Certeza Digital Blood Pressure Monitor BM-405",
    brand: "Certeza", category: "equipment",
    price: 4200, oldPrice: 4800, stock: "in", rating: 4.9, reviews: 56,
    img: "images/certeza-bp-glucose.jpg",
    desc: "Fully automatic upper-arm digital blood pressure monitor with universal cuff, irregular heartbeat detection and 2x60 memory.",
    manufacturer: "Certeza Medical", pack: "1 unit + universal cuff",
    usage: "Sit comfortably, wrap cuff above elbow, press start.",
    warnings: "Not a substitute for professional medical diagnosis.", featured: true, badge: "Top Equipment"
  },
  {
    id: "p11", name: "Certeza Blood Glucose Monitor GL-110 (Code Free)",
    brand: "Certeza", category: "equipment",
    price: 2600, oldPrice: 2950, stock: "in", rating: 4.7, reviews: 33,
    img: "images/certeza-bp-glucose.jpg",
    desc: "Code-free blood glucose monitoring system with GDH-FAD enzyme strips, 200 test memory and 7/14/28-day averaging.",
    manufacturer: "Certeza Medical", pack: "1 meter + 10 strips + lancets",
    usage: "Insert strip, apply small blood sample, read result in seconds.",
    warnings: "Dispose of lancets safely after single use."
  },
  {
    id: "p12", name: "Nutrifactor Duron Plus — For Men's Health",
    brand: "Nutrifactor", category: "mens",
    price: 1850, oldPrice: 2100, stock: "in", rating: 4.5, reviews: 41,
    img: "images/duronplus-mens.jpg",
    desc: "Food supplement formulated to support men's strength, stamina and overall performance.",
    manufacturer: "Nutrifactor", pack: "3x10 Tablets", dosage: "1 tablet daily or as directed.",
    usage: "Take with water after a meal.",
    warnings: "Consult your doctor if you have an existing medical condition."
  },
  {
    id: "p13", name: "Sun Defense Foundation SPF 50 PA+++",
    brand: "Dermsol", category: "sunscreen",
    price: 1100, oldPrice: 1250, stock: "in", rating: 4.4, reviews: 19,
    img: "images/sundefense-foundation.jpg",
    desc: "Velvety light-texture tinted sun-defense foundation that evens out tone while hiding dark spots, hypoallergenic and non-greasy.",
    manufacturer: "Dermsol", pack: "45ml", usage: "Apply evenly to face after moisturiser, before sun exposure.",
    warnings: "Recommended by dermatologists. Discontinue if irritation occurs."
  },
  {
    id: "p14", name: "Eventone-C Skin Lightening Body Milk SPF 45",
    brand: "PharmaHealth", category: "whitening",
    price: 1350, oldPrice: 1550, stock: "in", rating: 4.3, reviews: 22,
    img: "images/eventone-c-range.jpg",
    desc: "L-Glutathione + Vitamin C + Kojic Acid body milk that lightens, nourishes and rejuvenates underarm, neck and intimate areas. SPF 45.",
    manufacturer: "PharmaHealth", pack: "Body Milk", usage: "Apply daily to targeted areas after bathing.",
    warnings: "For external use only.", featured: true
  },
  {
    id: "p15", name: "Eventone 4 Pigmentation Spots Lightening Face Wash",
    brand: "PharmaHealth", category: "whitening",
    price: 690, oldPrice: 760, stock: "in", rating: 4.2, reviews: 15,
    img: "images/eventone-c-range.jpg",
    desc: "Exfoliating, fragrance-free and kojic-acid-free lightening face wash that cleanses while reducing visible pigmentation spots.",
    manufacturer: "PharmaHealth", pack: "Face Wash", usage: "Use twice daily, massage and rinse thoroughly.",
    warnings: "Avoid contact with eyes."
  },
  {
    id: "p16", name: "Acne-Lene Face Wash (Salicylic Acid + Glycolic Acid)",
    brand: "Carex", category: "skincare",
    price: 720, oldPrice: 800, stock: "in", rating: 4.4, reviews: 26,
    img: "images/acne-facewash-range.jpg",
    desc: "Adjunct acne-care cleanser with Salicylic Acid, Glycolic Acid and Sodium Lactate to help clear and prevent breakouts.",
    manufacturer: "Carex", pack: "150ml", usage: "Use once or twice daily as part of an acne regimen.",
    warnings: "May cause mild dryness initially; follow with a moisturiser."
  },
  {
    id: "p17", name: "Hazel-M Anti-Acne Face Wash",
    brand: "Hazel", category: "skincare",
    price: 580, oldPrice: 650, stock: "in", rating: 4.1, reviews: 11,
    img: "images/acne-facewash-range.jpg",
    desc: "Soap-free anti-acne face wash that clears oiliness and reduces inflammation and irritation, formulated for acne-prone skin.",
    manufacturer: "Hazel Labs", pack: "100ml", usage: "Use twice daily.",
    warnings: "External use only."
  },
  {
    id: "p18", name: "Gluvi Face Wash — Skin Lightening & Rejuvenating",
    brand: "Pixel Healthcare", category: "skincare",
    price: 540, oldPrice: 610, stock: "low", rating: 4.0, reviews: 8,
    img: "images/acne-facewash-range.jpg",
    desc: "Daily face wash that lightens and rejuvenates skin while gently cleansing impurities.",
    manufacturer: "Pixel Healthcare", pack: "120ml", usage: "Use twice daily on damp skin.",
    warnings: "Discontinue if irritation occurs."
  },
  {
    id: "p19", name: "DermiVe Oil Free Moisturizer with Ceramides & Hyaluronic Acid",
    brand: "Jenpharm", category: "skincare",
    price: 1050, oldPrice: 1200, stock: "in", rating: 4.6, reviews: 31,
    img: "images/Oil Free Lotion.jpg",
    desc: "Oil-free moisturising lotion with Ceramides and Hyaluronic Acid plus broad-spectrum SPF 20, restores and maintains the skin barrier for all dry skin disorders.",
    manufacturer: "Jenpharm Life Sciences", pack: "100ml", usage: "Apply daily to clean skin, morning and night.",
    warnings: "Non-comedogenic, lightweight and non-greasy formula.", featured: true
  },
  {
    id: "p20", name: "Herbiotics Collagen 750mg with Biotin & Vitamin C",
    brand: "Herbiotics", category: "supplements",
    price: 1650, oldPrice: 1850, stock: "in", rating: 4.7, reviews: 44,
    img: "images/herbiotics-supplements.jpg",
    desc: "Collagen supplement combined with Biotin and Vitamin C to support healthy skin, hair and nails from within.",
    manufacturer: "Herbiotics", pack: "60 Tablets", dosage: "1 tablet daily or as directed.",
    usage: "Take with water, preferably after a meal.",
    warnings: "Consult your physician if pregnant or breastfeeding."
  },
  {
    id: "p21", name: "Herbiotics Biotin Plus 2500mcg",
    brand: "Herbiotics", category: "supplements",
    price: 1450, oldPrice: 1600, stock: "in", rating: 4.6, reviews: 37,
    img: "images/herbiotics-supplements.jpg",
    desc: "High-strength biotin supplement that promotes energy and supports lustrous hair, healthy skin and strong nails.",
    manufacturer: "Herbiotics", pack: "60 Tablets", dosage: "1 tablet daily.",
    usage: "Take with water after meal.", warnings: "Store in a cool, dry place."
  },
  {
    id: "p22", name: "Herbiotics Vitamin B12",
    brand: "Herbiotics", category: "supplements",
    price: 980, oldPrice: 1100, stock: "in", rating: 4.5, reviews: 25,
    img: "images/herbiotics-supplements.jpg",
    desc: "Vitamin B12 supplement that promotes energy production and supports healthy red blood cell formation.",
    manufacturer: "Herbiotics", pack: "60 Tablets", dosage: "1 tablet daily.",
    usage: "Take with water.", warnings: "Consult a physician for prolonged use."
  },
  {
    id: "p23", name: "Herbiotics MyOcal Horny Goat Weed 500mg",
    brand: "Herbiotics", category: "mens",
    price: 1750, oldPrice: 1950, stock: "in", rating: 4.3, reviews: 18,
    img: "images/herbiotics-supplements.jpg",
    desc: "Performance, energy and stamina support supplement for men.",
    manufacturer: "Herbiotics", pack: "60 Capsules", dosage: "1 capsule daily or as directed.",
    usage: "Take with water after meal.", warnings: "Not recommended for individuals with cardiac conditions without medical advice."
  },
  {
    id: "p24", name: "Herbiotics Glucobe — Glucose Metabolism Support",
    brand: "Herbiotics", category: "supplements",
    price: 1550, oldPrice: 1700, stock: "in", rating: 4.4, reviews: 21,
    img: "images/herbiotics-supplements.jpg",
    desc: "Supports healthy glucose metabolism, formulated for people managing diabetes alongside their prescribed treatment.",
    manufacturer: "Herbiotics", pack: "60 Tablets", dosage: "As directed by physician.",
    usage: "Take with water.", warnings: "Not a replacement for prescribed diabetic medication."
  },
  {
    id: "p25", name: "Nutrifactor Multi Factor Advance 50+ Multivitamin",
    brand: "Nutrifactor", category: "supplements",
    price: 2100, oldPrice: 2350, stock: "in", rating: 4.8, reviews: 52,
    img: "images/nutrifactor-supplements.jpg",
    desc: "Complete multivitamin and mineral formula designed for the nutritional needs of adults aged 50 and above.",
    manufacturer: "Nutrifactor", pack: "30 Tablets", dosage: "1 tablet daily with a meal.",
    usage: "Swallow whole with water.", warnings: "Keep out of reach of children.", featured: true
  },
  {
    id: "p26", name: "Nutrifactor Vitamax Women Multivitamin",
    brand: "Nutrifactor", category: "supplements",
    price: 1950, oldPrice: 2150, stock: "in", rating: 4.7, reviews: 39,
    img: "images/nutrifactor-supplements.jpg",
    desc: "A daily multivitamin designed to support women's everyday energy, immunity and overall wellbeing.",
    manufacturer: "Nutrifactor", pack: "30 Tablets", dosage: "1 tablet daily.",
    usage: "Take with breakfast.", warnings: "Consult a physician if pregnant."
  },
  {
    id: "p27", name: "Nutrifactor Jointin-D (Glucosamine, Chondroitin, MSM & Vitamin D3)",
    brand: "Nutrifactor", category: "supplements",
    price: 2450, oldPrice: 2750, stock: "in", rating: 4.6, reviews: 28,
    img: "images/nutrifactor-supplements.jpg",
    desc: "Joint health formula combining Glucosamine, Chondroitin, MSM and Vitamin D3 to support bone and joint health.",
    manufacturer: "Nutrifactor", pack: "30 Tablets", dosage: "1 tablet daily.",
    usage: "Take with water after a meal.", warnings: "Consult your doctor if on blood-thinning medication."
  },
  {
    id: "p28", name: "Nutrifactor Garlic — Cardiovascular Health",
    brand: "Nutrifactor", category: "supplements",
    price: 850, oldPrice: 950, stock: "in", rating: 4.3, reviews: 14,
    img: "images/nutrifactor-supplements.jpg",
    desc: "Garlic supplement that supports healthy heart and circulatory function as part of a balanced diet.",
    manufacturer: "Nutrifactor", pack: "60 Capsules", dosage: "1 capsule daily.",
    usage: "Take with water.", warnings: "May interact with blood-thinning medication."
  },
  {
    id: "p29", name: "DermiVe / Skincare Whitening Range Bundle",
    brand: "Assorted", category: "whitening",
    price: 1990, oldPrice: 2250, stock: "in", rating: 4.2, reviews: 16,
    img: "images/skincare-whitening-range.jpg",
    desc: "A curated bundle of our most-loved brightening creams and serums, hand-picked by our in-store pharmacist for visible, even-toned results.",
    manufacturer: "Mixed Brands", pack: "Bundle of 3", usage: "Follow individual product instructions.",
    warnings: "Patch test each product before regular use."
  },
  {
    id: "p30", name: "Sunblock Combo — Broad Spectrum SPF 50/60 (Pick Any 2)",
    brand: "Assorted", category: "sunscreen",
    price: 1800, oldPrice: 2050, stock: "in", rating: 4.5, reviews: 23,
    img: "images/sunblock-range.jpg",
    desc: "Choose any 2 from our broad-spectrum SPF 50–60 sunblock range, including gel, cream and stick formats for every skin type.",
    manufacturer: "Mixed Brands", pack: "2 items", usage: "Apply generously 15–20 mins before sun exposure.",
    warnings: "Reapply every 3–4 hours when outdoors."
  },
  /* ---- Placeholder items: stock photos, replace later ---- */
  {
    id: "p31", name: "Panadol Extra Tablets (Paracetamol + Caffeine)",
    brand: "GSK", category: "medicines",
    price: 120, oldPrice: 140, stock: "in", rating: 4.6, reviews: 102,
    img: "https://picsum.photos/seed/panadol/600/600", placeholder: true,
    desc: "Fast-acting pain reliever for headache, fever and body aches, enhanced with caffeine for faster relief.",
    manufacturer: "GSK Pakistan", pack: "1 Strip (10 Tablets)", dosage: "1–2 tablets every 4–6 hours, max 8/day.",
    usage: "Swallow with water after food.", warnings: "Do not exceed recommended dose. Consult doctor if symptoms persist."
  },
  {
    id: "p32", name: "Augmentin 625mg Tablets (Amoxicillin + Clavulanic Acid)",
    brand: "GSK", category: "medicines",
    price: 480, oldPrice: 520, stock: "in", rating: 4.7, reviews: 58,
    img: "https://picsum.photos/seed/augmentin/600/600", placeholder: true,
    desc: "Broad-spectrum antibiotic for bacterial infections — prescription required.",
    manufacturer: "GSK Pakistan", pack: "1 Strip (6 Tablets)", dosage: "As prescribed by physician.",
    usage: "Complete the full prescribed course.", warnings: "Prescription Medicine — pharmacist verification required at checkout."
  },
  {
    id: "p33", name: "Pampers Baby Diapers (Medium, Pack of 30)",
    brand: "Pampers", category: "babycare",
    price: 1650, oldPrice: 1850, stock: "in", rating: 4.8, reviews: 87,
    img: "https://picsum.photos/seed/diapers/600/600", placeholder: true,
    desc: "Soft, absorbent diapers that keep your baby dry and comfortable for up to 12 hours.",
    manufacturer: "Procter & Gamble", pack: "30 Diapers", usage: "Change every 3–4 hours or as needed.",
    warnings: "Keep out of reach of children when unpacked."
  },
  {
    id: "p34", name: "Cerelac Infant Cereal — Wheat & Milk",
    brand: "Nestlé", category: "babycare",
    price: 720, oldPrice: 800, stock: "in", rating: 4.6, reviews: 41,
    img: "https://picsum.photos/seed/cerelac/600/600", placeholder: true,
    desc: "Nutritious infant cereal fortified with iron and essential vitamins to support healthy growth.",
    manufacturer: "Nestlé Pakistan", pack: "350g", dosage: "As per age guidelines on pack.",
    usage: "Mix with warm milk or water to desired consistency.", warnings: "Consult pediatrician before introducing solids."
  },
  {
    id: "p35", name: "First Aid Kit — Complete Home Essentials",
    brand: "MedSafe", category: "equipment",
    price: 1350, oldPrice: 1500, stock: "in", rating: 4.7, reviews: 19,
    img: "https://picsum.photos/seed/firstaid/600/600", placeholder: true,
    desc: "Comprehensive first aid kit including bandages, antiseptic, gauze, scissors and gloves for everyday emergencies.",
    manufacturer: "MedSafe", pack: "1 Kit (24 items)", usage: "Keep at home, in the car, or while travelling.",
    warnings: "Check and restock expired items periodically."
  },
  {
    id: "p36", name: "N95 Protective Face Masks (Box of 20)",
    brand: "MedSafe", category: "equipment",
    price: 1100, oldPrice: 1250, stock: "in", rating: 4.5, reviews: 33,
    img: "https://picsum.photos/seed/n95mask/600/600", placeholder: true,
    desc: "High-filtration protective face masks suitable for clinical and everyday use.",
    manufacturer: "MedSafe", pack: "20 Masks", usage: "Single use, dispose after each wear.",
    warnings: "Discard if damaged or moist."
  },
  {
    id: "p37", name: "ORS Sachets — Oral Rehydration Salts (Pack of 10)",
    brand: "WHO Formula", category: "medicines",
    price: 350, oldPrice: 400, stock: "in", rating: 4.6, reviews: 27,
    img: "https://picsum.photos/seed/orssachet/600/600", placeholder: true,
    desc: "WHO-formula rehydration salts to quickly replace lost fluids and electrolytes during dehydration.",
    manufacturer: "Generic", pack: "10 Sachets", dosage: "1 sachet in 1 litre clean water.",
    usage: "Drink slowly over several hours.", warnings: "Use within 24 hours of mixing."
  },
  {
    id: "p38", name: "Diabetic Care Combo — Test Strips + Lancets",
    brand: "Certeza", category: "equipment",
    price: 1450, oldPrice: 1650, stock: "low", rating: 4.4, reviews: 16,
    img: "https://picsum.photos/seed/diabeticcombo/600/600", placeholder: true,
    desc: "Refill combo of glucose test strips and lancets compatible with Certeza GL-110 monitor.",
    manufacturer: "Certeza Medical", pack: "25 Strips + 25 Lancets", usage: "Use with compatible glucose meter.",
    warnings: "Store strips in a cool, dry place, away from sunlight."
  }
];
