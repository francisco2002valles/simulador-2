// Lista de productos
const products = [
    { id: 1, name: "Laptop", price: 1500 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Teclado", price: 45 },
    { id: 4, name: "Monitor", price: 300 },
    { id: 5, name: "Auriculares", price: 75 },
];

// Carrito de compras
let cart = [];

// Total del carrito
let total = 0;
// Mostrar productos en la lista
function displayProducts(productList) {
    const productContainer = document.getElementById("products");
    productContainer.innerHTML = "";
    productList.forEach((product) => {
        const li = document.createElement("li");
        li.textContent = `${product.name} - $${product.price}`;
        const addButton = document.createElement("button");
        addButton.textContent = "Agregar al carrito";
        addButton.onclick = () => addToCart(product.id);
        li.appendChild(addButton);
        productContainer.appendChild(li);
    });
}

// Buscar productos
function searchProducts(query) {
    return products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );
}

// Agregar producto al carrito
function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Actualizar carrito y calcular total
function updateCart() {
    const cartContainer = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");
    cartContainer.innerHTML = "";
    total = 0;
    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartContainer.appendChild(li);
        total += item.price;
    });
    totalPrice.textContent = total.toFixed(2);
}
// Ejemplo de búsqueda
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
    const query = searchInput.value;
    const filteredProducts = searchProducts(query);
    displayProducts(filteredProducts);
});

// Mostrar todos los productos inicialmente
displayProducts(products);
