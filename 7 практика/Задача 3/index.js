const cartList = document.getElementById('cart-list');
const addProductButton = document.getElementById('add-product');

let cart = ["Яблоко", "Груша", "Банан", "Апельсин"];

function renderCart() {
    cartList.innerHTML = '';
    cart.sort().forEach(product => {
        const li = document.createElement('li');
        li.textContent = product;
        cartList.appendChild(li);
    });
}

addProductButton.addEventListener('click', () => {
    const newProduct = prompt("Введите название товара:");
    if (newProduct) {
        cart.push(newProduct);
        renderCart();
    } else {
        alert("Название товара не введено!");
    }
});

renderCart();
