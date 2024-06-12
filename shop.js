// Sample products data
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 15 }
];

let cart = [];

function isLoggedIn() {
    return true; 
}

function displayProducts() {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = "<h2>Available Products:</h2>";

    products.forEach(product => {
        productsDiv.innerHTML += `
            <div>
                <p>${product.name} - $${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}


function addToCart(productId) {
    if (isLoggedIn()) {
        const product = products.find(item => item.id === productId);
        if (product) {
            cart.push(product);
            updateCart();
        } else {
            console.error("Product not found!");
        }
    } else {
        console.log("Please log in to add items to cart.");
    }
}


function updateCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = "<h2>Shopping Cart:</h2>";

    let total = 0;
    cart.forEach(item => {
        cartDiv.innerHTML += `
            <div>
                <p>${item.name} - $${item.price}</p>
            </div>
        `;
        total += item.price;
    });

    cartDiv.innerHTML += `<p>Total: $${total}</p>`;
}

    window.onload = function () {
    displayProducts();
};
