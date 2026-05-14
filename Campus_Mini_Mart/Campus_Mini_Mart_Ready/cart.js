let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast.timeoutId);
    showToast.timeoutId = setTimeout(() => {
        toast.classList.remove('show');
    }, 2200);
}

function displayCart() {
    const cartContainer = document.getElementById('cart-container');
    const emptyMessage = document.getElementById('empty-cart-message');
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartTotalFinal = document.getElementById('cart-total-final');
    const summaryItems = document.getElementById('summary-items');
    let total = 0;
    let itemsCount = 0;

    cartItemsDiv.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.classList.add('hidden');
        emptyMessage.classList.remove('hidden');
        cartTotal.textContent = '0.00';
        cartTotalFinal.textContent = '0.00';
        summaryItems.textContent = '0';
        return;
    }

    cartContainer.classList.remove('hidden');
    emptyMessage.classList.add('hidden');

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        itemsCount += item.quantity;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div class="cart-item-main">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <strong>${item.name}</strong><br>
                    <small>$${item.price.toFixed(2)} each</small>
                </div>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${index}, -1)" aria-label="Decrease quantity">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)" aria-label="Increase quantity">+</button>
                </div>
                <span class="item-total">$${itemTotal.toFixed(2)}</span>
                <button class="btn btn-danger" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });

    cartTotal.textContent = total.toFixed(2);
    cartTotalFinal.textContent = total.toFixed(2);
    summaryItems.textContent = itemsCount;
}

function updateQuantity(index, change) {
    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        removeItem(index);
        return;
    }

    saveCart();
    displayCart();
}

function removeItem(index) {
    const removedName = cart[index].name;
    cart.splice(index, 1);
    saveCart();
    displayCart();
    showToast(`${removedName} removed from cart.`);
}

function clearCart() {
    cart = [];
    saveCart();
    displayCart();
    showToast('Cart cleared successfully.');
}

function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty.');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showToast(`Order placed successfully. Total: $${total.toFixed(2)}`);
    clearCart();
}

displayCart();
