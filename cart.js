// Load Cart Items from Local Storage
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemsDiv = document.getElementById("cart-items");
    let totalPrice = 0;

    cartItemsDiv.innerHTML = "";
    cart.forEach((item, index) => {
        totalPrice += item.price;
        cartItemsDiv.innerHTML += `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById("total-price").innerText = totalPrice;
}

// Add Items to Cart
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
}

// Remove Item from Cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart(); // Reload cart page
}

// Clear Cart
function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
}

// Auto-load Cart on Cart Page
if (document.getElementById("cart-items")) {
    loadCart();
}
