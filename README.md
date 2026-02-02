# MR. TILLS Restaurant Website

A modern, responsive restaurant website featuring an interactive menu, shopping cart, and customer information management system.

## Features

✨ **Modern & Responsive Design**
- Mobile-first responsive layout
- Works seamlessly on desktop, tablet, and mobile devices
- Smooth animations and transitions
- Professional color scheme and typography

🛒 **Shopping Cart System**
- Add items to cart with quantity control
- View cart summary with subtotal, tax, and total
- Adjust quantities or remove items
- Persistent cart (saves to browser)

👤 **Customer Information**
- Capture customer details (name, email, phone, address, city)
- Store information in browser's local storage
- Reuse saved information for future orders
- Edit information at checkout

📱 **Menu Management**
- 18 delicious items across 3 categories:
  - **Continental**: Grilled Steak, Pasta, Salmon, etc.
  - **Local Meals**: Jollof Rice, Fufu, Kelewele, etc.
  - **Drinks**: Fresh Juices, Smoothies, Soft Drinks, etc.
- Category filtering system
- Interactive menu item cards
- Price display in Ghanaian Cedis (GHS)

💾 **Order Management**
- Complete order information capture
- Automatic order confirmation with receipt
- Order history stored locally
- Detailed order receipts with all information

📊 **Additional Features**
- Navigation with smooth scrolling
- Contact information section
- Social media links
- Search functionality
- Keyboard shortcuts (Press 'C' to open cart)
- Toast notifications

## File Structure

```
MR.TILLS Restaurant/
├── index.html          # Main HTML file
├── styles.css          # Complete styling
├── script.js           # JavaScript functionality
└── Asset/              # Images and assets folder
    └── images/
        ├── continental meal images/
        ├── local meal images/
        ├── drinks/
        └── Logo of the restaurant/
```

## Getting Started

### Opening the Website

1. **Method 1 - Direct File**
   - Locate `index.html` in your project folder
   - Right-click and select "Open with Browser"
   - Or drag the file to your browser window

2. **Method 2 - Local Server (Recommended)**
   - Use Python: `python -m http.server 8000`
   - Or use VS Code Live Server extension
   - Navigate to `http://localhost:8000`

## How to Use

### 1. Browsing Menu
- **View All Items**: Click "All" to see all menu items
- **Filter by Category**: 
  - Click "Continental" for international dishes
  - Click "Local Meals" for traditional African cuisine
  - Click "Drinks" for beverages

### 2. Adding Items to Cart
- Select desired quantity using +/- buttons
- Click "Add to Cart"
- Green notification confirms addition
- Cart count updates automatically

### 3. Managing Cart
- Click the shopping cart icon in navigation
- View all items with prices and quantities
- **Adjust Quantity**: Change number in cart
- **Remove Item**: Click trash icon
- **Total Calculation**: Automatic with tax included

### 4. Checkout Process
- Click "Proceed to Checkout"
- If first time: Enter your information in the form
  - Full Name
  - Email
  - Phone Number
  - Delivery Address
  - City
- Click "Save & Continue"
- Confirm order
- Receive order confirmation with receipt

### 5. Data Storage
Your information is stored safely in your browser's local storage:
- **Cart Data**: Persists even after closing browser
- **User Information**: Saved for quick checkout next time
- **Order History**: All past orders are recorded

## Data Management

### View Saved Orders
Open browser Developer Tools (F12) and go to Console, then run:
```javascript
JSON.parse(localStorage.getItem('orders'))
```

### View Saved User Info
```javascript
JSON.parse(localStorage.getItem('userInfo'))
```

### Clear All Data
```javascript
localStorage.clear()
```

## Customization Guide

### Change Restaurant Information

**In `index.html`:**
```html
<!-- Change restaurant name -->
<span>MR. TILLS</span>

<!-- Update contact information -->
<p>123 Restaurant Street<br>Accra, Ghana</p>
<p>+233 XXX XXX XXX</p>
<p>info@mrtills.com</p>
```

### Update Menu Items

**In `script.js`, modify the `menuData` object:**
```javascript
const menuData = {
    continental: [
        {
            id: 1,
            name: "Dish Name",
            price: 50.00,
            description: "Dish description",
            category: "continental",
            emoji: "🍽️"
        },
        // Add more items...
    ]
}
```

### Change Color Scheme

**In `styles.css`, modify CSS variables:**
```css
:root {
    --primary-color: #d4a574;      /* Gold/Brown */
    --secondary-color: #2c1810;    /* Dark Brown */
    --accent-color: #e8b85c;       /* Light Gold */
    --text-dark: #333;
    --text-light: #666;
    --bg-light: #f9f7f4;
    --bg-white: #ffffff;
}
```

### Add Menu Images

1. Place image files in respective folders under `Asset/images/`
2. Update menu items to include image path:
```javascript
image: "Asset/images/continental meal images/your-image.jpg"
```

3. Modify the `menu-image` div in `createMenuItemElement()` to show image:
```javascript
<div class="menu-image">
    <img src="${item.image}" alt="${item.name}">
</div>
```

## Features Overview

### Modern UI/UX
- Clean, minimalist design
- Intuitive navigation
- Smooth transitions and animations
- Professional typography
- Consistent color palette

### Responsive Breakpoints
- **Desktop**: Full layout (1200px+)
- **Tablet**: Optimized grid (768px - 1200px)
- **Mobile**: Single column, touch-friendly (480px - 768px)
- **Small Mobile**: Simplified layout (<480px)

### Browser Compatibility
- Chrome/Chromium
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, Custom Properties
- **JavaScript (ES6+)**: 
  - Local Storage API for data persistence
  - DOM manipulation
  - Event handling
  - Array methods (map, filter, reduce)

## Storage Details

### LocalStorage Limits
- Typically 5-10MB per domain
- More than enough for this application
- Data persists until manually cleared

### Stored Data Structure

**Cart:**
```javascript
[
    { id: 1, name: "Item", price: 25.00, quantity: 2 },
    { id: 2, name: "Item 2", price: 30.00, quantity: 1 }
]
```

**User Info:**
```javascript
{
    fullName: "John Doe",
    email: "john@example.com",
    phone: "+233XXX",
    address: "Street Name",
    city: "Accra"
}
```

**Orders:**
```javascript
[
    {
        id: "ORDER-1704xxxx",
        date: "1/6/2026, 10:30:45 AM",
        customer: "John Doe",
        items: [...],
        total: 150.00
    }
]
```

## Tips & Tricks

1. **Keyboard Shortcut**: Press 'C' to open cart instantly
2. **Persistent Cart**: Items stay in cart between sessions
3. **Quick Checkout**: Your info is saved for faster checkout
4. **Order History**: All orders are automatically saved
5. **Price Currency**: All prices displayed in GHS (Ghanaian Cedis)

## Future Enhancement Ideas

- Online payment integration (Stripe, PayPal)
- Order tracking system
- Email confirmation and receipt delivery
- Restaurant reservation system
- Discount codes and promotions
- User authentication system
- Admin dashboard for menu management
- Rating and review system
- Delivery time estimates
- Multiple location support

## Support & Troubleshooting

### Cart Not Saving?
- Check browser local storage is enabled
- Ensure cookies/storage are not blocked
- Try a different browser

### Data Not Appearing?
- Hard refresh the page (Ctrl+Shift+R)
- Check browser console for errors (F12)
- Clear cache and try again

### Styling Not Applied?
- Ensure `styles.css` is in the same directory
- Check file path in HTML
- Clear browser cache

## License

This website is designed for MR. TILLS Restaurant.

## Version

**Version 1.0.0** - January 2026

---

**Enjoy the modern dining experience at MR. TILLS Restaurant!** 🍽️
