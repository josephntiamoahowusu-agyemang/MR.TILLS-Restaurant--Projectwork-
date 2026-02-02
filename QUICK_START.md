# QUICK START GUIDE - MR. TILLS Restaurant Website

## 🚀 Launch Your Website in 30 Seconds

### Step 1: Open the Website
1. Navigate to your project folder: `MR.TILLS Restaurant (Projectwork)`
2. Find `index.html`
3. Right-click → "Open with" → Choose your browser

**That's it! Your website is live!**

---

## 📋 Main Features at a Glance

### 🏠 Navigation Bar (Top)
- **MR. TILLS Logo**: Click to scroll to top
- **Home**: Welcome section
- **Menu**: Browse all dishes
- **About**: Restaurant information
- **Contact**: How to reach us
- **Shopping Cart Icon**: Opens your cart (also shows item count)

### 🍽️ Menu Section
1. **Filter Buttons**:
   - All: 18 items
   - Continental: 6 dishes
   - Local Meals: 6 dishes
   - Drinks: 6 beverages

2. **Each Menu Item Card**:
   - Dish name and emoji icon
   - Description
   - Price in GHS
   - Quantity selector (+/-)
   - Add to Cart button

### 🛒 Shopping Cart
- Click cart icon to view
- Adjust quantities
- Remove items
- See total with tax automatically calculated
- Proceed to checkout

### 👤 Customer Information
- First time checkout: Fill in your details
  - Name
  - Email
  - Phone
  - Address
  - City
- Information is saved automatically
- Next time, it pre-fills!

### ✅ Order Confirmation
- After checkout, see order details
- Order ID generated
- All information displayed
- Receipt saved to your browser

---

## 💾 Your Data is Stored Locally

All your information is kept safe on YOUR device:
- ✅ Cart items
- ✅ Customer information
- ✅ Order history
- ✅ No data sent to any server

---

## 🎨 Customization Quick Tips

### Change Colors
Open `styles.css`, find the `:root` section at the top, modify:
```css
--primary-color: #d4a574;      /* Change this to your color */
--secondary-color: #2c1810;    /* Change this to your color */
```

### Add New Menu Items
Open `script.js`, find `menuData`, add item like:
```javascript
{
    id: 19,
    name: "Your Dish Name",
    price: 35.00,
    description: "Your description",
    category: "continental",  // or "local" or "drinks"
    emoji: "🍽️"
}
```

### Update Restaurant Info
Open `index.html`, search for:
- "MR. TILLS" - Restaurant name
- "123 Restaurant Street" - Address
- "+233 XXX XXX XXX" - Phone
- "info@mrtills.com" - Email

---

## ⌨️ Pro Tips

| Action | How | Result |
|--------|-----|--------|
| Open Cart | Click cart icon OR press 'C' | Shows shopping cart |
| Scroll to Menu | Click "Explore Menu" button | Jumps to menu section |
| Filter Items | Click category buttons | Shows only that category |
| Quick Add | Adjust quantity, click "Add to Cart" | Item added with amount |
| Save Info | Fill form at checkout | Used next time automatically |
| View Receipt | Complete order | Shows all details |

---

## 📱 Works on All Devices

✅ Desktop Computer
✅ Laptop
✅ Tablet
✅ Mobile Phone
✅ All screen sizes

The website automatically adjusts to fit your device!

---

## 🐛 Common Questions

**Q: Where is my data stored?**
A: In your browser's local storage. It stays even after closing the browser.

**Q: Can I add more items?**
A: Yes! Edit the `menuData` in `script.js` to add/remove/modify items.

**Q: How do I change prices?**
A: Open `script.js`, find the menu item, change the `price` value.

**Q: Can I integrate payment?**
A: Currently it saves orders locally. You can add payment later with a backend.

**Q: How do I see past orders?**
A: They're automatically saved. Press F12 → Console, then type:
```
JSON.parse(localStorage.getItem('orders'))
```

**Q: How do I use the images from my Asset folder?**
A: You can reference them in the paths like:
```
Asset/images/continental meal images/filename.png
```

---

## 🎯 Next Steps

1. ✅ Open `index.html` in your browser
2. ✅ Test adding items to cart
3. ✅ Try the checkout process
4. ✅ Customize colors and info
5. ✅ Add your own menu items
6. ✅ Share with others!

---

## 📞 File Locations

Your website consists of 4 main files:

```
MR.TILLS Restaurant (Projectwork)/
├── index.html          ← Main page (OPEN THIS)
├── styles.css          ← Design & styling
├── script.js           ← Functionality & features
├── README.md           ← Full documentation
└── QUICK_START.md      ← This file!
```

---

**🎉 You're all set! Start exploring your new restaurant website!**

For detailed information, see `README.md`
