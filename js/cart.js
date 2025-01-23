const TAX_RATE = 0.18;

function renderCartItems() {
    const cartItemsContainer = document.querySelector('#cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        document.querySelector('#place-order-btn').style.display = 'none';
        document.querySelector('#clear-cart-btn').style.display = 'none';
    } else {
        document.querySelector('#place-order-btn').style.display = 'block';
        document.querySelector('#clear-cart-btn').style.display = 'block';
    }

    cart.forEach((item, index) => {
        const cartItem = document.createElement('tr');
        cartItem.innerHTML = `
            <td><a href="#" onclick="deleteItem(${index}); return false;"><i class="fa fa-times-circle"></i></a></td>
            <td><img src="${item.prdimage}" alt="Product Image"></td>
            <td>${item.prdname}</td>
            <td>${item.prdrate} </td>
            <td>
                <div class="quantity-controls">
                    <i class="fa fa-minus-circle" onclick="updateQuantity(${index}, -1)"></i>
                    <input type="number" class="quantity-input" id="quantity-${index}" value="${item.quantity || 1}" min="1">
                    <i class="fa fa-plus-circle" onclick="updateQuantity(${index}, 1)"></i>
                </div>
            </td>
            <td id="total-${index}">${(item.prdrate * (item.quantity || 1)).toFixed(2)} </td>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    updateTotal();
    updateCartCount();
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    document.querySelector('#cart-count').textContent = cartCount;
}

// Call this function when the page loads
window.onload = function () {
    updateCartCount();
}


function updateTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.prdrate * (item.quantity || 1);
    });

    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;

    document.querySelector('#cart-subtotal').textContent = `₹${subtotal.toFixed(2)}`;
    document.querySelector('#cart-tax').textContent = `₹${tax.toFixed(2)}`;
    document.querySelector('#cart-total').textContent = `₹${total.toFixed(2)}`;
}

function updateQuantity(index, delta) {
    const quantityInput = document.querySelector(`#quantity-${index}`);
    let quantity = parseInt(quantityInput.value);
    quantity = Math.max(1, quantity + delta);
    quantityInput.value = quantity;

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));

    updateItemTotal(index);
    updateCartCount();
}

function updateItemTotal(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart[index];
    const total = item.prdrate * item.quantity;
    document.querySelector(`#total-${index}`).textContent = total.toFixed(2);
    updateTotal();
}

function deleteItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
    showToast('Item removed successfully!');
    updateCartCount();
}

function clearCart() {
    localStorage.removeItem('cart');
    renderCartItems();
    showToast('Cart cleared successfully!');
    updateCartCount();
}

function placeOrder() {
    window.location.href = '../order/placeorder.html';
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Initial render
renderCartItems();