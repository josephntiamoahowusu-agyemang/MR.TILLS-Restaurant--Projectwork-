# MR. TILLS Restaurant - Configuration Guide

This guide shows you exactly how to customize every aspect of your website without touching code you don't understand.

---

## 🎨 COLOR CUSTOMIZATION

**File to Edit:** `styles.css`

**Location:** Find the very first section after `/*` (around line 1-20)

**Current Colors:**
```css
:root {
    --primary-color: #d4a574;        /* Golden/Brown - Main accent */
    --secondary-color: #2c1810;      /* Dark Brown - Headers & Nav */
    --accent-color: #e8b85c;         /* Light Gold - Hover effects */
    --text-dark: #333;               /* Dark text */
    --text-light: #666;              /* Light gray text */
    --bg-light: #f9f7f4;             /* Light background */
    --bg-white: #ffffff;             /* White background */
}
```

**How to Change:**
1. Find a color scheme you like (use colorpicker.com)
2. Get the hex code (like #FF5733)
3. Replace the hex values in the variables above

**Popular Color Schemes:**

**Option 1 - Warm Red Theme:**
```css
--primary-color: #DC143C;        /* Crimson */
--secondary-color: #8B0000;      /* Dark Red */
--accent-color: #FF6347;         /* Tomato */
```

**Option 2 - Modern Blue:**
```css
--primary-color: #007AFF;        /* Bright Blue */
--secondary-color: #003D82;      /* Dark Blue */
--accent-color: #00B4FF;         /* Light Blue */
```

**Option 3 - Green Natural:**
```css
--primary-color: #4CAF50;        /* Green */
--secondary-color: #1B5E20;      /* Dark Green */
--accent-color: #81C784;         /* Light Green */
```

---

## 🏪 RESTAURANT INFORMATION

**File to Edit:** `index.html`

### Restaurant Name
**Find line:** Search for `<span>MR. TILLS</span>`
**Replace with:** `<span>YOUR RESTAURANT NAME</span>`

### Logo/Icon
**Find line:** `<i class="fas fa-utensils"></i>`
**Change to any icon from:** https://fontawesome.com
Example: `<i class="fas fa-crown"></i>` for a crown

### Hero Section Text
**Find lines:**
```html
<h1>Welcome to MR. TILLS</h1>
<p>Experience the finest continental and local cuisine</p>
```
**Replace with your text:**
```html
<h1>Welcome to YOUR NAME</h1>
<p>Your custom tagline here</p>
```

### Contact Information

**Find the Contact section (search for "Location"):**

```html
<p>123 Restaurant Street<br>Accra, Ghana</p>
```
Replace with your address

```html
<p>+233 XXX XXX XXX</p>
```
Replace with your phone number

```html
<p>info@mrtills.com</p>
```
Replace with your email

```html
<p>Mon-Sun: 10AM - 11PM</p>
```
Replace with your hours

### About Section
**Find:**
```html
<h3>Welcome to MR. TILLS Restaurant</h3>
<p>At MR. TILLS, we believe in serving...</p>
```
**Replace with your restaurant's story**

---

## 🍽️ MENU MANAGEMENT

**File to Edit:** `script.js`

**Find the `menuData` section (around line 1)**

### Adding a New Item

```javascript
{
    id: 19,                              // Unique number (increment)
    name: "Dish Name",                   // What customers see
    price: 45.00,                        // Price in GHS
    description: "Short description",     // Brief description
    category: "continental",             // Category: continental, local, or drinks
    emoji: "🍽️"                          // Display emoji
}
```

**Add to the appropriate array:**
- `menuData.continental` - International dishes
- `menuData.local` - Local/African dishes
- `menuData.drinks` - Beverages

**Example - Adding a new continental dish:**
```javascript
{
    id: 20,
    name: "Lobster Tail",
    price: 120.00,
    description: "Fresh lobster with garlic butter sauce",
    category: "continental",
    emoji: "🦞"
}
```

### Removing an Item

Find the item and delete the entire block (from `{` to `}`).

### Editing an Item

1. Find the item by name
2. Change any of these values:
   - `name` - Dish name
   - `price` - Price (use decimal, like 25.50)
   - `description` - Description
   - `emoji` - Display icon

### Popular Food Emojis

```
🍕 Pizza              🍔 Burger            🌮 Taco
🍗 Chicken           🐟 Fish              🦐 Shrimp
🥩 Meat              🥗 Salad             🍝 Pasta
🍜 Noodles           🍚 Rice              🥘 Pot
🍌 Banana            🥑 Avocado           🧃 Juice
🍷 Wine              🍺 Beer              🥤 Drink
🍰 Cake              🍪 Cookie            ☕ Coffee
```

---

## 💰 CURRENCY & PRICING

**Current Currency:** GHS (Ghanaian Cedis)

### Change Currency

**Find in `script.js`:**
- Search for `GHS`
- Replace all with your currency (USD, EUR, etc.)

**Locations to update:**
1. In `styles.css` - Not specifically mentioned
2. In `script.js` - Multiple places showing `GHS`
3. In HTML - Cart summary sections

### Pricing Examples

```javascript
price: 25.00      // 25 Ghana Cedis
price: 125.50     // 125.50 Ghana Cedis
price: 9.99       // 9.99 Ghana Cedis
```

---

## 📱 SITE METADATA

**File to Edit:** `index.html` (Top section)

### Page Title
**Find:** `<title>MR. TILLS Restaurant - Modern Dining Experience</title>`
**Change to:** `<title>YOUR RESTAURANT NAME - Your Tagline</title>`

This appears in browser tab and search results.

### Meta Description
Add this in the `<head>` section:
```html
<meta name="description" content="Visit YOUR RESTAURANT NAME for authentic African and continental cuisine. Fresh ingredients, expert preparation, friendly service.">
```

---

## 🎭 STYLING TWEAKS

**File to Edit:** `styles.css`

### Change Font Size

**Hero heading (welcome text):**
Find: `.hero h1 { font-size: 3.5rem; }`
Change `3.5rem` to larger (4rem) or smaller (3rem)

**Section titles:**
Find: `.section-title { font-size: 2.5rem; }`
Adjust the value

### Change Button Styles

**Find:** `.btn-primary { ... }`
Change:
- `background-color` for button color
- `color` for text color
- `padding` for button size

### Shadows and Effects

**Light shadow (used everywhere):**
`box-shadow: var(--shadow);`
Current: `0 2px 10px rgba(0, 0, 0, 0.1);`

**Heavy shadow:**
`box-shadow: var(--shadow-heavy);`
Current: `0 5px 20px rgba(0, 0, 0, 0.15);`

Modify the numbers to adjust shadow intensity.

---

## 🖼️ ADDING IMAGES

### Use Custom Images Instead of Emojis

**Step 1:** Place images in Asset folder

**Step 2:** Edit in `script.js`, modify `createMenuItemElement()` function

**Find this section:**
```javascript
<div class="menu-image">${item.emoji}</div>
```

**Replace with:**
```javascript
<div class="menu-image">
    <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

**Step 3:** Add image path to menu items:
```javascript
{
    id: 1,
    name: "Grilled Steak",
    price: 85.00,
    description: "Premium beef steak with herbs",
    category: "continental",
    image: "Asset/images/continental meal images/steak.png"  // Add this
}
```

---

## 📧 EMAIL & PAYMENT SETUP

### Add Email Contact

In `index.html`, find the email section and update:
```html
<p>youremail@yourrestaurant.com</p>
```

### Social Media Links

Find in footer:
```html
<a href="#"><i class="fab fa-facebook"></i></a>
<a href="#"><i class="fab fa-twitter"></i></a>
<a href="#"><i class="fab fa-instagram"></i></a>
```

Replace `#` with your actual links:
```html
<a href="https://facebook.com/yourpage"><i class="fab fa-facebook"></i></a>
<a href="https://twitter.com/yourpage"><i class="fab fa-twitter"></i></a>
<a href="https://instagram.com/yourpage"><i class="fab fa-instagram"></i></a>
```

---

## 🔧 ADVANCED CUSTOMIZATION

### Tax Rate

**Find in `script.js`:**
```javascript
const tax = subtotal * 0.1;  // 0.1 = 10%
```

**Change to different rate:**
```javascript
const tax = subtotal * 0.05;  // 5%
const tax = subtotal * 0.15;  // 15%
```

### Minimum Order Amount

Add validation in `proceedToCheckout()` function:
```javascript
const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
if (subtotal < 50) {
    alert('Minimum order is GHS 50');
    return;
}
```

### Delivery Fee

Modify `updateCartSummary()`:
```javascript
const deliveryFee = 5.00;
const total = subtotal + tax + deliveryFee;
```

---

## 🌐 DEPLOYING YOUR SITE

When ready to go live, you can:

1. **Free Hosting:**
   - GitHub Pages
   - Netlify
   - Vercel
   - Firebase Hosting

2. **Simple Process:**
   - Create GitHub account
   - Upload your files
   - Enable GitHub Pages
   - Your site is live!

---

## 📝 NOTES

- Always keep backups of your original files
- Test changes in browser before saving
- Use browser's developer tools (F12) for testing
- All changes are immediate - just refresh the page

---

## 🎓 COMMON MISTAKES

❌ **Wrong:** Changing `"continental"` to `"Continental"`
✅ **Right:** Category must be lowercase

❌ **Wrong:** Removing the comma after a property
✅ **Right:** Use commas between properties (except last one)

❌ **Wrong:** Changing `#d4a574` to `d4a574` (missing #)
✅ **Right:** Always include the # for hex colors

---

**Happy Customizing! 🎨**
