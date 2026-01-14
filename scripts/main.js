
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
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
    if (!cartIcon) return;

    let totalQty = 0;

    cart.forEach(item => {
        totalQty += item.qty;
    });

    cartIcon.textContent = `🛒 ${totalQty}`;
}


function renderCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.qty;

        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}">
                <div class="cart-item-info">
                    <p>${item.name}</p>
                    <small>S/ ${item.price.toFixed(2)}</small>
                </div>
                <div class="cart-item-actions">
                    <button onclick="changeQty(${index}, -1)">−</button>
                    <span>${item.qty}</span>
                    <button onclick="changeQty(${index}, 1)">+</button>
                    <button onclick="removeItem(${index})">✕</button>
                </div>
            </div>
        `;
    });

    cartTotal.textContent = `S/ ${total.toFixed(2)}`;
    updateCartCount();
    saveCart();
}


function changeQty(index, amount) {
    cart[index].qty += amount;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    renderCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
}

/* ABRIR / CERRAR */
cartIcon.addEventListener("click", e => {
    e.preventDefault();
    cartModal.classList.add("show");
    renderCart();
});

closeCart.addEventListener("click", () => {
    cartModal.classList.remove("show");
});

/* AGREGAR PRODUCTO */

document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
        const product = {
            name: btn.dataset.name,
            price: parseFloat(btn.dataset.price),
            img: btn.dataset.img,
            qty: 1
        };

        const existing = cart.find(p => p.name === product.name);

        if (existing) {
            existing.qty++;
        } else {
            cart.push(product);
        }

        saveCart();
        updateCartCount();
    });
});


/* WHATSAPP */
checkoutBtn.addEventListener("click", () => {
    let message = "Hola Samma.hub, quiero realizar este pedido:%0A%0A";
    let total = 0;

    cart.forEach((item, i) => {
        message += `${i + 1}. ${item.name} x${item.qty} - S/ ${item.price}%0A`;
        total += item.price * item.qty;
    });

    message += `%0ATotal: S/ ${total.toFixed(2)}`;
    window.open(`https://wa.me/51952773283?text=${message}`, "_blank");
});

updateCartCount();


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

updateCartCount();

/*********************************************/


/* ================= LOGIN ================= */

const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeLogin = document.getElementById("closeLogin");
const loginSubmit = document.getElementById("loginSubmit");

const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

// ABRIR / CERRAR
loginBtn.addEventListener("click", e => {
    e.preventDefault();
    loginModal.classList.add("show");
});

closeLogin.addEventListener("click", () => {
    loginModal.classList.remove("show");
});

// LOGIN
loginSubmit.addEventListener("click", () => {
    if (!loginEmail.value || !loginPassword.value) {
        alert("Completa todos los campos");
        return;
    }

    const user = {
        email: loginEmail.value
    };

    localStorage.setItem("user", JSON.stringify(user));
    loginModal.classList.remove("show");
    updateUserUI();
});

// MOSTRAR USUARIO LOGUEADO
function updateUserUI() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && loginBtn) {
        loginBtn.textContent = "Hola";
    }
}

updateUserUI();
