let cart = JSON.parse(localStorage.getItem('cart')) || [];
let activeFilter = 'all';

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (!cartCount) return;
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
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

function addToCart(name, price, image) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }

    saveCart();
    updateCartCount();
    showToast(`${name} added to cart.`);
}

function filterProducts() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const products = document.querySelectorAll('.product');
    let visibleCount = 0;

    products.forEach(product => {
        const name = product.dataset.name.toLowerCase();
        const category = product.dataset.category;
        const matchesSearch = name.includes(query);
        const matchesFilter = activeFilter === 'all' || category === activeFilter;
        const isVisible = matchesSearch && matchesFilter;

        product.classList.toggle('hidden', !isVisible);
        if (isVisible) visibleCount += 1;
    });

    const noResults = document.getElementById('no-results');
    if (noResults) {
        noResults.classList.toggle('hidden', visibleCount > 0);
    }
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search-input');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            activeFilter = button.dataset.filter;
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterProducts();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }
}

updateCartCount();
setupFilters();
filterProducts();
