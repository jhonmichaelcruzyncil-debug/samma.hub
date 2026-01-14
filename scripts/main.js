/* ================= TIENDAS FÍSICAS ================= */
const tiendaLink = document.querySelector('a[href="#shop"]');
const storesSection = document.getElementById("stores");

if (tiendaLink) {
    tiendaLink.addEventListener("click", (e) => {
        e.preventDefault();
        storesSection.classList.toggle("active");
        storesSection.scrollIntoView({ behavior: "smooth" });
    });
}

/* ================= MODAL CONTACTO ================= */
const contactBtn = document.getElementById("contactBtn");
const modal = document.getElementById("contactModal");
const closeBtn = document.querySelector(".modal-close");

if (contactBtn && modal && closeBtn) {
    contactBtn.onclick = () => modal.classList.add("show");
    closeBtn.onclick = () => modal.classList.remove("show");

    modal.onclick = (e) => {
        if (e.target === modal) modal.classList.remove("show");
    };
}

/* ================= MENÚ RESPONSIVE ================= */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

/* ================= CARRITO ================= */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartIcon = document.querySelector(".cart-icon");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

function updateCartCount() {
    if (cartIcon) {
        cartIcon.textContent = `🛒 ${cart.length}`;
    }
}

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const product = {
            name: button.dataset.name,
            price: button.dataset.price
        };

        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        alert("Producto agregado al carrito 🛒");
    });
});

updateCartCount();

/* ================= WHATSAPP CARRITO ================= */
if (cartIcon) {
    cartIcon.addEventListener("click", (e) => {
        e.preventDefault();

        if (cart.length === 0) {
            alert("Tu carrito está vacío 🛒");
            return;
        }

        let message = "Hola Samma.hub, quiero realizar el siguiente pedido:%0A%0A";
        let total = 0;

        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name} - S/ ${item.price}%0A`;
            total += parseFloat(item.price);
        });

        message += `%0ATotal: S/ ${total.toFixed(2)}`;

        window.open(
            `https://wa.me/51952773283?text=${message}`,
            "_blank"
        );
    });
}

/* ================= ANIMACIÓN SCROLL ================= */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

/*********************************************/


/*********************************************/

// ================= BUSCADOR DE PRODUCTOS =================

const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    productCards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

/*********************************************/

// MODAL NOSOTRAS
const aboutBtn = document.querySelector('a[href="#about"]');
const aboutModal = document.getElementById("aboutModal");
const closeAbout = document.getElementById("closeAbout");

aboutBtn.addEventListener("click", e => {
    e.preventDefault();
    aboutModal.classList.add("show");
});

closeAbout.addEventListener("click", () => {
    aboutModal.classList.remove("show");
});

// MODAL TIENDAS
const storeBtn = document.querySelector('a[href="#shop"]');
const storesModal = document.getElementById("storesModal");
const closeStores = document.getElementById("closeStores");

storeBtn.addEventListener("click", e => {
    e.preventDefault();
    storesModal.classList.add("show");
});

closeStores.addEventListener("click", () => {
    storesModal.classList.remove("show");
});

/*********************************************/

// TÉRMINOS
const termsLink = document.querySelector('a[href="#terms"]');
const termsModal = document.getElementById("termsModal");
const closeTerms = document.getElementById("closeTerms");

termsLink.addEventListener("click", e => {
    e.preventDefault();
    termsModal.classList.add("show");
});

closeTerms.addEventListener("click", () => {
    termsModal.classList.remove("show");
});

// POLÍTICAS
const policyLink = document.querySelector('a[href="#policy"]');
const policyModal = document.getElementById("policyModal");
const closePolicy = document.getElementById("closePolicy");

policyLink.addEventListener("click", e => {
    e.preventDefault();
    policyModal.classList.add("show");
});

closePolicy.addEventListener("click", () => {
    policyModal.classList.remove("show");
});
