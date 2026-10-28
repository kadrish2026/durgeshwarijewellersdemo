/* =====================================================
   DURGESHWARI JEWELLERS - script.js
   Everything you will want to edit is in sections 1-4.
   ===================================================== */

/* ---------- 1. BUSINESS DETAILS (edit here) ---------- */
// WhatsApp number: country code + number, digits only, no + or spaces.
// Please confirm with the owner that this is their WhatsApp number.
var WHATSAPP_NUMBER = "918691906955";
var DISPLAY_PHONE = "+91 86919 06955";
var INSTAGRAM_URL = "https://www.instagram.com/dj_jewellery_showroom/";
var MAP_URL = "https://www.google.com/maps/search/?api=1&query=Durgeshwari+Jewellers+Kanjurmarg+East+Mumbai";

/* ---------- 2. COLLECTIONS (edit here) ----------
   filter must match a "category" in the products list.
   Use filter "All" to show every product.
   To change a photo, replace the image URL (or use "assets/images/yourfile.jpg"). */
var collections = [
  { title: "Poth Collection",         filter: "Poth",       image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=700&q=75" },
  { title: "Traditional Necklaces",   filter: "Necklaces",  image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700&q=75" },
  { title: "Men's Gold Rings",        filter: "Rings",      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700&q=75" },
  { title: "Gold Bangles",            filter: "Bangles",    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=700&q=75" },
  { title: "Earrings & Jhumkas",      filter: "Earrings",   image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700&q=75" },
  { title: "Chains & Pendants",       filter: "Chains",     image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=700&q=75" },
  { title: "Traditional Gold Jewellery", filter: "All",     image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=700&q=75" },
  { title: "Featured Designs",        filter: "All",        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&q=75" }
];

/* ---------- 3. PRODUCTS (edit here) ----------
   TO ADD a product: copy one block { ... }, paste it with a comma after the previous one.
   TO REMOVE a product: delete its block.
   name = product title, category = filter group, image = photo URL. */
var products = [
  { name: "Traditional Gold Floral Necklace", category: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=75" },
  { name: "Royal Temple Necklace Set",        category: "Necklaces", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=75" },
  { name: "Classic Gold Poth",                category: "Poth",      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=75" },
  { name: "Antique Finish Poth Mala",         category: "Poth",      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=75" },
  { name: "Antique Gold Kada",                category: "Bangles",   image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=75" },
  { name: "Traditional Gold Bangles Pair",    category: "Bangles",   image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=75" },
  { name: "Classic Men's Ring",               category: "Rings",     image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=75" },
  { name: "Men's Signet Gold Ring",           category: "Rings",     image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=75" },
  { name: "Traditional Jhumka Earrings",      category: "Earrings",  image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=75" },
  { name: "Gold Drop Earrings",               category: "Earrings",  image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&q=75" },
  { name: "Gold Link Chain",                  category: "Chains",    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=75" },
  { name: "Traditional Gold Pendant",         category: "Chains",    image: "https://images.unsplash.com/photo-1599459183200-59c7687a0275?w=800&q=75" }
];

/* ---------- 4. INSTAGRAM-STYLE GALLERY PHOTOS (edit here) ---------- */
var galleryImages = [
  "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=75",
  "https://images.unsplash.com/photo-1599459183200-59c7687a0275?w=600&q=75",
  "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&q=75",
  "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&q=75",
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=75",
  "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=75"
];

/* ---------- 5. FALLBACK IMAGE ----------
   If any photo fails to load, this gold picture is shown instead,
   so the page never looks broken. */
var fallbackImage = "data:image/svg+xml;utf8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800">' +
  '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e8d4a0"/><stop offset="1" stop-color="#a8793a"/></linearGradient></defs>' +
  '<rect width="800" height="800" fill="url(#g)"/>' +
  '<text x="400" y="420" font-size="60" text-anchor="middle" fill="#3b2415" font-family="serif">Durgeshwari</text></svg>');

// The "error" event does not bubble, so we listen in capture mode (true).
document.addEventListener("error", function (event) {
  if (event.target.tagName === "IMG" && event.target.src !== fallbackImage) {
    event.target.src = fallbackImage;
  }
}, true);

/* ---------- 6. WHATSAPP ---------- */
function getWhatsappLink(productName) {
  var message = "Hello Durgeshwari Jewellers, I would like to enquire about: " + productName;
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}

// Sets up every button/link that has the class "whatsapp-link".
function setupWhatsappLinks() {
  var links = document.querySelectorAll(".whatsapp-link");
  links.forEach(function (link) {
    link.href = getWhatsappLink(link.dataset.product);
    link.target = "_blank";
    link.rel = "noopener";
  });
}

/* ---------- 7. CONTACT DETAILS ---------- */
function setupContactDetails() {
  document.querySelectorAll(".instagram-link").forEach(function (link) { link.href = INSTAGRAM_URL; });
  document.getElementById("mapLink").href = MAP_URL;
  var phone = document.getElementById("phoneLink");
  phone.textContent = DISPLAY_PHONE;
  phone.href = "tel:+" + WHATSAPP_NUMBER;
}

/* ---------- 8. COLLECTION CARDS ---------- */
function showCollections() {
  var grid = document.getElementById("collectionGrid");
  collections.forEach(function (item) {
    var card = document.createElement("button");
    card.className = "collection-card reveal";
    card.innerHTML = '<img src="' + item.image + '" alt="' + item.title + '" loading="lazy"><span>' + item.title + "</span>";
    card.addEventListener("click", function () {
      filterProducts(item.filter);
      document.getElementById("products").scrollIntoView();
    });
    grid.appendChild(card);
  });
}

/* ---------- 9. PRODUCT CARDS AND FILTERS ---------- */
function showProducts(list) {
  var grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  list.forEach(function (product) {
    var card = document.createElement("div");
    card.className = "product-card reveal show";
    card.innerHTML =
      '<div class="photo"><img src="' + product.image + '" alt="' + product.name + '" loading="lazy"></div>' +
      '<div class="product-info"><h3>' + product.name + '</h3><p class="price">Price on Request</p>' +
      '<button class="button dark-button details-button">View Details</button>' +
      '<a class="button gold-button" target="_blank" rel="noopener" href="' + getWhatsappLink(product.name) + '">WhatsApp</a></div>';
    // Clicking the photo or the button opens the details window.
    card.querySelector(".photo").addEventListener("click", function () { openModal(product); });
    card.querySelector(".details-button").addEventListener("click", function () { openModal(product); });
    grid.appendChild(card);
  });
}

function filterProducts(category) {
  var list = products;
  if (category !== "All") {
    list = products.filter(function (product) { return product.category === category; });
  }
  showProducts(list);
  // Highlight the active filter button.
  document.querySelectorAll(".filter-button").forEach(function (button) {
    button.classList.toggle("active", button.textContent === category);
  });
}

function makeFilterButtons() {
  var bar = document.getElementById("filterBar");
  var names = ["All", "Necklaces", "Poth", "Bangles", "Rings", "Earrings", "Chains"];
  names.forEach(function (name) {
    var button = document.createElement("button");
    button.className = "filter-button";
    button.textContent = name;
    button.addEventListener("click", function () { filterProducts(name); });
    bar.appendChild(button);
  });
}

/* ---------- 10. DETAILS MODAL ---------- */
function openModal(product) {
  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalImage").alt = product.name;
  document.getElementById("modalName").textContent = product.name;
  document.getElementById("modalText").textContent = "Category: " + product.category + ". Contact us on WhatsApp for price, weight and availability.";
  document.getElementById("modalWhatsapp").href = getWhatsappLink(product.name);
  document.getElementById("modalWhatsapp").target = "_blank";
  document.getElementById("productModal").classList.add("open");
}
function closeModal() {
  document.getElementById("productModal").classList.remove("open");
}

/* ---------- 11. INSTAGRAM-STYLE GALLERY ---------- */
function showGallery() {
  var grid = document.getElementById("instaGrid");
  galleryImages.forEach(function (url) {
    var box = document.createElement("div");
    box.className = "reveal";
    box.innerHTML = '<img src="' + url + '" alt="Durgeshwari Jewellers jewellery" loading="lazy">';
    grid.appendChild(box);
  });
}

/* ---------- 12. MOBILE MENU ---------- */
function setupMenu() {
  var navLinks = document.getElementById("navLinks");
  document.getElementById("menuButton").addEventListener("click", function () { navLinks.classList.toggle("open"); });
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () { navLinks.classList.remove("open"); });
  });
}

/* ---------- 13. REVEAL ON SCROLL ---------- */
function setupReveal() {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add("show"); }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach(function (item) { observer.observe(item); });
}

/* ---------- 14. START EVERYTHING ---------- */
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("productModal").addEventListener("click", function (event) {
  if (event.target.id === "productModal") { closeModal(); }   // click on dark background
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") { closeModal(); }
});

makeFilterButtons();
showCollections();
filterProducts("All");
showGallery();
setupWhatsappLinks();
setupContactDetails();
setupMenu();
setupReveal();
