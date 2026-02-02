// ===== Menu Data =====
const menuData = {
    continental: [
        { id: 1, name: "Continental Dish 1", price: 85.00, description: "Premium international cuisine", category: "continental", image: "Asset/images/continental meal images/Screenshot 2025-12-03 134923.png" },
        { id: 2, name: "Continental Dish 2", price: 75.00, description: "Chef's special preparation", category: "continental", image: "Asset/images/continental meal images/Screenshot 2025-12-03 134957.png" },
        { id: 3, name: "Continental Dish 3", price: 80.00, description: "Exquisite flavors", category: "continental", image: "Asset/images/continental meal images/Screenshot 2025-12-03 135028.png" },
        { id: 4, name: "Continental Dish 4", price: 95.00, description: "Fine dining experience", category: "continental", image: "Asset/images/continental meal images/Screenshot 2025-12-03 135105.png" },
        { id: 5, name: "Continental Dish 5", price: 70.00, description: "Artfully presented", category: "continental", image: "Asset/images/continental meal images/Screenshot 2025-12-03 135127.png" },
        { id: 6, name: "Continental Dish 6", price: 105.00, description: "Premium selection", category: "continental", image: "Asset/images/continental meal images/Screenshot 2025-12-03 135146.png" },
        { id: 7, name: "Continental Dish 7", price: 88.00, description: "Delightful taste", category: "continental", image: "Asset/images/continental meal images/Screenshot 2025-12-03 135217.png" },
        { id: 8, name: "Continental Dish 8", price: 92.00, description: "Mouth-watering", category: "continental", image: "Asset/images/continental meal images/Screenshot 2025-12-03 135250.png" },
        { id: 9, name: "Continental Dish 9", price: 82.00, description: "Signature dish", category: "continental", image: "Asset/images/continental meal images/Screenshot 2025-12-03 135316.png" },
        { id: 10, name: "Continental Dish 10", price: 78.00, description: "Perfectly seasoned", category: "continental", image: "Asset/images/continental meal images/Screenshot 2025-12-03 135344.png" },
        { id: 11, name: "Continental Dish 11", price: 90.00, description: "Gourmet preparation", category: "continental", image: "Asset/images/continental meal images/Screenshot 2025-12-03 135454.png" },
        { id: 12, name: "Continental Dish 12", price: 86.00, description: "Restaurant favorite", category: "continental", image: "Asset/images/continental meal images/Screenshot 2025-12-07 233242.png" },
        { id: 13, name: "Continental Dish 13", price: 94.00, description: "Must try dish", category: "continental", image: "Asset/images/continental meal images/Screenshot 2025-12-09 143208.png" },
        { id: 14, name: "Continental Dish 14", price: 72.00, description: "Light & delicious", category: "continental", image: "Asset/images/continental meal images/Screenshot 2025-12-09 143237.png" },
        { id: 15, name: "Continental Dish 15", price: 87.00, description: "Chef recommended", category: "continental", image: "Asset/images/continental meal images/Screenshot 2025-12-09 143309.png" },
        { id: 16, name: "Continental Dish 16", price: 81.00, description: "Authentic flavor", category: "continental", image: "Asset/images/continental meal images/Screenshot 2025-12-09 143333.png" },
        { id: 17, name: "Continental Dish 17", price: 99.00, description: "Premium quality", category: "continental", image: "Asset/images/continental meal images/Screenshot 2025-12-09 143423.png" },
        { id: 18, name: "Continental Dish 18", price: 89.00, description: "Exquisite blend", category: "continental", image: "Asset/images/continental meal images/Screenshot 2025-12-09 143504.png" },
        { id: 19, name: "Continental Dish 19", price: 76.00, description: "Culinary masterpiece", category: "continental", image: "Asset/images/continental meal images/Screenshot 2025-12-09 143613.png" }
    ],
    local: [
        { id: 20, name: "Local Delicacy 1", price: 25.00, description: "Traditional African cuisine", category: "local", image: "Asset/images/local meal images/Screenshot 2025-12-03 135548.png" },
        { id: 21, name: "Local Delicacy 2", price: 28.00, description: "Authentic local taste", category: "local", image: "Asset/images/local meal images/Screenshot 2025-12-03 135606.png" },
        { id: 22, name: "Kelewele", price: 15.00, description: "Spiced fried plantains", category: "local", image: "Asset/images/local meal images/Kelewele is Ghana's answer to the perfect….jpg" },
        { id: 23, name: "Local Delicacy 4", price: 20.00, description: "Rice and beans special", category: "local", image: "Asset/images/local meal images/Screenshot 2025-12-03 135655.png" },
        { id: 24, name: "Local Delicacy 5", price: 35.00, description: "Fresh grilled fish", category: "local", image: "Asset/images/local meal images/Screenshot 2025-12-03 135716.png" },
        { id: 25, name: "Local Delicacy 6", price: 22.00, description: "Cornmeal with soup", category: "local", image: "Asset/images/local meal images/Screenshot 2025-12-03 135739.png" },
        { id: 26, name: "Local Delicacy 7", price: 26.00, description: "Savory local favorite", category: "local", image: "Asset/images/local meal images/Screenshot 2025-12-03 135831.png" },
        { id: 27, name: "Local Delicacy 8", price: 24.00, description: "Traditional preparation", category: "local", image: "Asset/images/local meal images/Screenshot 2025-12-03 135918.png" },
        { id: 28, name: "Local Delicacy 9", price: 29.00, description: "Ghana's finest", category: "local", image: "Asset/images/local meal images/Screenshot 2025-12-07 232654.png" },
        { id: 29, name: "Local Delicacy 10", price: 32.00, description: "Authentic recipe", category: "local", image: "Asset/images/local meal images/Screenshot 2025-12-10 093141.png" },
        { id: 30, name: "Local Delicacy 11", price: 27.00, description: "Local specialty", category: "local", image: "Asset/images/local meal images/Screenshot 2025-12-10 093226.png" },
        { id: 31, name: "Local Delicacy 12", price: 30.00, description: "Traditional favorite", category: "local", image: "Asset/images/local meal images/Screenshot 2025-12-10 093304.png" },
        { id: 32, name: "Pepper Sauce Special", price: 18.00, description: "Nigerian classic", category: "local", image: "Asset/images/local meal images/Nigerian Pepper Sauce - Ata dindin - Chef Lola's….jpg" },
        { id: 33, name: "Ghanaian Mood", price: 23.00, description: "A taste of Ghana", category: "local", image: "Asset/images/local meal images/🇬🇭 A TASTE OF GHANA 🇬🇭 _ Mood right now….jpg" },
        { id: 34, name: "Local Delicacy 15", price: 21.00, description: "Street food special", category: "local", image: "Asset/images/local meal images/%23pinterest %23fyp %23ghana %23ghanaianfood.jpg" }
    ],
    drinks: [
        { id: 35, name: "Fresh Orange Juice", price: 12.00, description: "Freshly squeezed", category: "drinks", image: "Asset/images/drinks/Screenshot 2025-12-07 235948.png" },
        { id: 36, name: "Iced Tea", price: 10.00, description: "Chilled refreshment", category: "drinks", image: "Asset/images/drinks/Screenshot 2025-12-08 004210.png" },
        { id: 37, name: "Smoothie Bowl", price: 22.00, description: "Mixed fruit blend", category: "drinks", image: "Asset/images/drinks/Screenshot 2025-12-08 005819.png" }
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
