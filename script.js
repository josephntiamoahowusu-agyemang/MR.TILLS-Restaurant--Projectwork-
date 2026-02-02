// ===== Menu Data =====
const menuData = {
    continental: [
        { id: 1, name: "Grilled Beef", price: 85.00, description: "Premium grilled beef cuts", category: "continental", image: "Asset/images/continental%20meal%20images/Grilled%20Beef.png" },
        { id: 2, name: "Beef Steak", price: 75.00, description: "Perfectly cooked beef steak", category: "continental", image: "Asset/images/continental%20meal%20images/Beef%20Stake.png" },
        { id: 3, name: "Fried Rice with Turkey", price: 80.00, description: "Delicious fried rice with turkey", category: "continental", image: "Asset/images/continental%20meal%20images/Fried%20Rice%20with%20Turkey.png" },
        { id: 4, name: "Noodles with Beef", price: 95.00, description: "Stir-fried noodles with beef", category: "continental", image: "Asset/images/continental%20meal%20images/Noodles%20with%20Beef.png" },
        { id: 5, name: "Roasted Chicken with Fried Yam", price: 70.00, description: "Tender roasted chicken with crispy yam", category: "continental", image: "Asset/images/continental%20meal%20images/Roasted%20Chicken%20with%20Fried%20Yam.png" },
        { id: 6, name: "Full Fried Chicken", price: 105.00, description: "Whole fried chicken with potatoes", category: "continental", image: "Asset/images/continental%20meal%20images/Full%20Fried%20Chicken%20with%20Potatoe.png" },
        { id: 7, name: "Fried Chicken Wings", price: 88.00, description: "Crispy wings with fried yam", category: "continental", image: "Asset/images/continental%20meal%20images/Fried%20Chicken%20wings%20with%20Fried%20Yam.png" },
        { id: 8, name: "Crispy Chicken Wings", price: 92.00, description: "Crispy wings with fried potatoes", category: "continental", image: "Asset/images/continental%20meal%20images/Crispy%20Chicken%20Wings%20with%20Fried%20Potatoes.png" },
        { id: 9, name: "Fried Chicken with Salad", price: 82.00, description: "Golden fried chicken with fresh salad", category: "continental", image: "Asset/images/continental%20meal%20images/Fried%20Chicken%20wings%20with%20Salad.png" },
        { id: 10, name: "Fried Chicken with Vegetables", price: 78.00, description: "Fried chicken with leafy greens", category: "continental", image: "Asset/images/continental%20meal%20images/Fried%20Chicken%20with%20leaves.png" },
        { id: 11, name: "Crispy Yam with Pork", price: 90.00, description: "Crispy fried yam with pork", category: "continental", image: "Asset/images/continental%20meal%20images/Crispy%20Yam%20with%20Pork.png" },
        { id: 12, name: "Noodles with Fried Plantain", price: 86.00, description: "Soft noodles with golden fried plantain", category: "continental", image: "Asset/images/continental%20meal%20images/Noodles%20with%20Fried%20Plantain.png" },
        { id: 13, name: "Jollof with Turkey", price: 94.00, description: "Aromatic jollof rice with sliced turkey", category: "continental", image: "Asset/images/continental%20meal%20images/Jollof%20with%20Turkey%20and%20Plantian.png" },
        { id: 14, name: "Oil Rice with Tomato Stew", price: 72.00, description: "Oil rice with tomato stew and plantain", category: "continental", image: "Asset/images/continental%20meal%20images/Oil%20rice%20with%20Tomatoe%20Stew%20and%20Fried%20Plantain.png" },
        { id: 15, name: "Eggs and Sausages", price: 87.00, description: "Eggs, sausages and steak", category: "continental", image: "Asset/images/continental%20meal%20images/Eggs%2C%20sausages%20and%20stake.png" },
        { id: 16, name: "Spread Eggs with Steak", price: 81.00, description: "Perfectly spread eggs with grilled steak", category: "continental", image: "Asset/images/continental%20meal%20images/Spread%20Eggs%20with%20slided%20stake.png" },
        { id: 17, name: "Big Family Platter", price: 99.00, description: "Generous family-sized platter", category: "continental", image: "Asset/images/continental%20meal%20images/Big%20Family%20Platter.png" },
        { id: 18, name: "Family Platter", price: 89.00, description: "Delicious family platter for sharing", category: "continental", image: "Asset/images/continental%20meal%20images/Family%20Platter.png" },
        { id: 19, name: "Turkey Wings with Fried Yam", price: 76.00, description: "Savory turkey wings with crispy yam", category: "continental", image: "Asset/images/continental%20meal%20images/Turkey%20wigs%20with%20Fried%20Yam.png" }
    ],
    local: [
        { id: 20, name: "Ampesi with Egg Stew", price: 25.00, description: "Boiled plantain and yam with egg stew", category: "local", image: "Asset/images/local%20meal%20images/Ampesi%20with%20Egg%20Stew.png" },
        { id: 21, name: "Fufu with Goat Soup", price: 28.00, description: "Authentic fufu with rich goat soup", category: "local", image: "Asset/images/local%20meal%20images/Fufu%20with%20Goat%20soup.jpg" },
        { id: 22, name: "Kelewele and Groundnut", price: 15.00, description: "Spiced fried plantains with groundnut", category: "local", image: "Asset/images/local%20meal%20images/Kelewele%20and%20groundnut.jpg" },
        { id: 23, name: "Nkontombire with Pork", price: 20.00, description: "Traditional nkontombire with pork", category: "local", image: "Asset/images/local%20meal%20images/Nkontombire%20with%20Pork.png" },
        { id: 24, name: "Palmnut Soup with Seafood", price: 35.00, description: "Rich palmnut soup with seafood platter", category: "local", image: "Asset/images/local%20meal%20images/Palmnut%20soup%20with%20seafood%20plater.png" },
        { id: 25, name: "Plain Rice with Tomato Stew", price: 22.00, description: "Plain rice with flavorful tomato stew", category: "local", image: "Asset/images/local%20meal%20images/Plain%20rice%20with%20Tomatoes%20Stew.jpg" },
        { id: 26, name: "Rice Balls with Groundnut Soup", price: 26.00, description: "Rice balls served with creamy groundnut soup", category: "local", image: "Asset/images/local%20meal%20images/Rice%20balls%20with%20Groundnut%20Soup.png" },
        { id: 27, name: "Snail with Pepper Stew", price: 24.00, description: "Tender snail in spicy pepper stew", category: "local", image: "Asset/images/local%20meal%20images/Snail%20with%20peper%20Stew.png" },
        { id: 28, name: "Soup with Goat Meat", price: 29.00, description: "Traditional soup with tender goat meat", category: "local", image: "Asset/images/local%20meal%20images/Soup%20with%20Goat%20meat.png" },
        { id: 29, name: "Crispy Fried Plantain", price: 32.00, description: "Golden and crispy fried plantain", category: "local", image: "Asset/images/local%20meal%20images/Crispy%20Fried%20Plantain.png" },
        { id: 30, name: "Beef Stew with Potatoes", price: 27.00, description: "Hearty beef stew with potatoes", category: "local", image: "Asset/images/local%20meal%20images/Beef%20stew%20with%20Potatoes.png" },
        { id: 31, name: "Beans with Fried Plantain", price: 30.00, description: "Beans served with golden fried plantain", category: "local", image: "Asset/images/local%20meal%20images/Beans%20with%20Fried%20Plantain.png" },
        { id: 32, name: "Chicken Soup", price: 18.00, description: "Delicious traditional chicken soup", category: "local", image: "Asset/images/local%20meal%20images/Chicken%20Soup.png" },
        { id: 33, name: "Egg with Pepper", price: 23.00, description: "Savory eggs cooked with peppers", category: "local", image: "Asset/images/local%20meal%20images/Egg%20with%20pepper.jpg" },
        { id: 34, name: "Tuiozafi with Beef", price: 21.00, description: "Traditional tuiozafi dish with beef meat", category: "local", image: "Asset/images/local%20meal%20images/Tuiozafi%20with%20Beef%20meat.png" }
    ],
    drinks: [
        { id: 35, name: "Fresh Orange Juice", price: 12.00, description: "Freshly squeezed orange juice", category: "drinks", image: "Asset/images/drinks/Fresh%20Orange%20Juice.png" },
        { id: 36, name: "Sparkling Water with Lemon", price: 10.00, description: "Refreshing sparkling water with lemon", category: "drinks", image: "Asset/images/drinks/Sparkling%20water%20with%20Lemon.png" },
        { id: 37, name: "Chilled Coca-Cola", price: 8.00, description: "Ice-cold Coca-Cola", category: "drinks", image: "Asset/images/drinks/Chilled%20CoCaCola.png" },
        { id: 38, name: "Fresh Orange Juice", price: 12.00, description: "Freshly squeezed orange juice", category: "drinks", image: "Asset/images/drinks/Fresh%20Orange%20Juice.png" },
        { id: 39, name: "Sparkling Water with Lemon", price: 10.00, description: "Refreshing sparkling water with lemon", category: "drinks", image: "Asset/images/drinks/Sparkling%20water%20with%20Lemon.png" },
        { id: 40, name: "Chilled Coca-Cola", price: 8.00, description: "Ice-cold Coca-Cola", category: "drinks", image: "Asset/images/drinks/Chilled%20CoCaCola.png" }
    ]
};

// ===== State Management =====
let cart = [];
let userInfo = {};
let currentFilter = 'all';

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    loadUserInfo();
    renderMenu('all');
    setupEventListeners();
});

// ===== Event Listeners =====
function setupEventListeners() {
    // Category filter buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.category;
            renderMenu(currentFilter);
        });
    });

    // Cart modal
    const cartLink = document.querySelector('.cart-link');
    const cartModal = document.getElementById('cartModal');
    cartLink.addEventListener('click', (e) => {
        e.preventDefault();
        openCartModal();
    });

    // Modal close buttons
    document.querySelectorAll('.close').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').classList.remove('show');
        });
    });

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('show');
        }
    });

    // Hamburger menu
    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('.nav-menu').classList.toggle('active');
    });

    // Nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('.nav-menu').classList.remove('active');
        });
    });
}

// ===== Menu Rendering =====
function renderMenu(category) {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';

    let items = [];
    if (category === 'all') {
        items = [...menuData.continental, ...menuData.local, ...menuData.drinks];
    } else {
        items = menuData[category];
    }

    items.forEach(item => {
        const menuItem = createMenuItemElement(item);
        menuGrid.appendChild(menuItem);
    });
}

function createMenuItemElement(item) {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.dataset.id = item.id;

    div.innerHTML = `
        <div class="menu-image">
            <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div class="menu-info">
            <h3 class="menu-name">${item.name}</h3>
            <p class="menu-description">${item.description}</p>
            <div class="menu-price">GHS ${item.price.toFixed(2)}</div>
            <div class="quantity-control">
                <button type="button" onclick="decreaseQuantity(this)">-</button>
                <input type="number" min="1" value="1" class="qty-input" readonly>
                <button type="button" onclick="increaseQuantity(this)">+</button>
            </div>
            <div class="menu-actions">
                <button class="btn btn-primary btn-sm" onclick="addToCart(${item.id}, '${item.name}', ${item.price})">Add to Cart</button>
            </div>
        </div>
    `;

    return div;
}

// ===== Quantity Control =====
function increaseQuantity(button) {
    const input = button.parentElement.querySelector('.qty-input');
    input.value = parseInt(input.value) + 1;
}

function decreaseQuantity(button) {
    const input = button.parentElement.querySelector('.qty-input');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

// ===== Cart Functions =====
function addToCart(id, name, price) {
    const menuItem = document.querySelector(`[data-id="${id}"]`);
    const quantity = parseInt(menuItem.querySelector('.qty-input').value);

    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ id, name, price, quantity });
    }

    // Reset quantity input
    menuItem.querySelector('.qty-input').value = 1;

    saveCart();
    updateCartCount();
    showNotification(`${name} added to cart!`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart();
    updateCartCount();
}

function updateCartItemQuantity(id, newQuantity) {
    const item = cart.find(item => item.id === id);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(id);
        } else {
            item.quantity = newQuantity;
            saveCart();
            renderCart();
        }
    }
}

function openCartModal() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.add('show');
    renderCart();
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        updateCartSummary();
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-qty">
                    Quantity: 
                    <input type="number" min="1" value="${item.quantity}" 
                        onchange="updateCartItemQuantity(${item.id}, this.value)" 
                        style="width: 50px; padding: 3px;">
                </div>
            </div>
            <div class="cart-item-price">GHS ${(item.price * item.quantity).toFixed(2)}</div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = `GHS ${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `GHS ${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `GHS ${total.toFixed(2)}`;
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = count;
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Close cart modal
    document.getElementById('cartModal').classList.remove('show');

    // Check if user info exists, if not show user form
    if (!userInfo.fullName) {
        openUserModal();
    } else {
        completeOrder();
    }
}

// ===== User Information =====
function openUserModal() {
    document.getElementById('userModal').classList.add('show');
    populateUserForm();
}

function closeUserModal() {
    document.getElementById('userModal').classList.remove('show');
}

function populateUserForm() {
    if (userInfo.fullName) {
        document.getElementById('fullName').value = userInfo.fullName;
        document.getElementById('email').value = userInfo.email;
        document.getElementById('phone').value = userInfo.phone;
        document.getElementById('address').value = userInfo.address;
        document.getElementById('city').value = userInfo.city;
    }
}

function saveUserInfo() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;

    if (!fullName || !email || !phone || !address || !city) {
        alert('Please fill in all fields');
        return;
    }

    userInfo = { fullName, email, phone, address, city };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    closeUserModal();
    completeOrder();
}

// ===== Order Completion =====
function completeOrder() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    const order = {
        id: 'ORDER-' + Date.now(),
        date: new Date().toLocaleString(),
        customer: userInfo.fullName,
        email: userInfo.email,
        phone: userInfo.phone,
        address: userInfo.address,
        city: userInfo.city,
        items: cart,
        subtotal: subtotal,
        tax: tax,
        total: total
    };

    // Save order to localStorage
    saveOrder(order);

    // Show confirmation
    showConfirmation(order);

    // Clear cart
    cart = [];
    saveCart();
    updateCartCount();
}

function saveOrder(order) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
}

function showConfirmation(order) {
    const confirmationModal = document.getElementById('confirmationModal');
    const confirmationDetails = document.getElementById('confirmationDetails');

    confirmationDetails.innerHTML = `
        <p><strong>Order ID:</strong> ${order.id}</p>
        <p><strong>Date & Time:</strong> ${order.date}</p>
        <p><strong>Name:</strong> ${order.customer}</p>
        <p><strong>Email:</strong> ${order.email}</p>
        <p><strong>Phone:</strong> ${order.phone}</p>
        <p><strong>Delivery Address:</strong> ${order.address}, ${order.city}</p>
        <hr>
        <p><strong>Order Items:</strong></p>
        ${order.items.map(item => `
            <p>${item.name} x${item.quantity} = GHS ${(item.price * item.quantity).toFixed(2)}</p>
        `).join('')}
        <hr>
        <p><strong>Subtotal:</strong> GHS ${order.subtotal.toFixed(2)}</p>
        <p><strong>Tax (10%):</strong> GHS ${order.tax.toFixed(2)}</p>
        <p><strong>Total:</strong> GHS ${order.total.toFixed(2)}</p>
    `;

    confirmationModal.classList.add('show');
}

function closeConfirmation() {
    document.getElementById('confirmationModal').classList.remove('show');
}

function continueShoppingFromConfirmation() {
    closeConfirmation();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== Local Storage =====
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

function loadUserInfo() {
    const savedUserInfo = localStorage.getItem('userInfo');
    if (savedUserInfo) {
        userInfo = JSON.parse(savedUserInfo);
    }
}

// ===== Utility Functions =====
function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

function showNotification(message) {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        animation: slideDown 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== Search Function =====
function searchMenu(query) {
    const allItems = [...menuData.continental, ...menuData.local, ...menuData.drinks];
    const results = allItems.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
    
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = results.length > 0 
        ? results.map(item => createMenuItemElement(item)).map(el => el.outerHTML).join('')
        : '<p style="text-align: center; color: #666;">No items found</p>';
}

// ===== Keyboard Shortcuts =====
document.addEventListener('keydown', (e) => {
    // Press 'c' to open cart
    if (e.key === 'c' || e.key === 'C') {
        if (document.activeElement.tagName !== 'INPUT') {
            openCartModal();
        }
    }
});

// Log initialization
console.log('MR. TILLS Restaurant Website Loaded');
console.log('Features: Shopping Cart, Local Storage Support, Responsive Design');
