# 🧪 Testing & Demo Guide - MR. TILLS Restaurant

This guide helps you test all features and understand how data is stored.

---

## 🚀 Quick Demo (5 minutes)

### Step 1: Add Items to Cart
1. Open the website
2. You should see the menu with 18 items
3. Click on **"Continental"** tab to filter
4. Find "Grilled Steak" (GHS 85.00)
5. Click the **+** button twice (quantity: 3)
6. Click **"Add to Cart"** - you'll see a green notification

### Step 2: View Cart
1. Click the **shopping cart icon** in top-right
2. You'll see "Grilled Steak" × 3 = GHS 255.00
3. Notice tax calculated: GHS 25.50
4. Notice total: GHS 280.50

### Step 3: Add More Items
1. Close the cart modal
2. Click **"Local Meals"** tab
3. Find "Jollof Rice" (GHS 25.00)
4. Add 2 quantities
5. Add to cart
6. Check cart again - now shows 2 items

### Step 4: Complete Purchase
1. In cart, click **"Proceed to Checkout"**
2. Fill in your information:
   - Name: Test User
   - Email: test@example.com
   - Phone: +233123456789
   - Address: Test Address
   - City: Accra
3. Click **"Save & Continue"**
4. See **Order Confirmation** with receipt

### Step 5: Verify Data Storage
1. Press **F12** to open Developer Tools
2. Go to **Console** tab
3. Paste and run: `JSON.parse(localStorage.getItem('orders'))`
4. You'll see all your order details!

---

## 💾 Data Storage Locations

### View Cart Data
```javascript
// Open browser console (F12)
JSON.parse(localStorage.getItem('cart'))
```

**Output Example:**
```javascript
[
    {
        "id": 1,
        "name": "Grilled Steak",
        "price": 85,
        "quantity": 3
    },
    {
        "id": 7,
        "name": "Jollof Rice",
        "price": 25,
        "quantity": 2
    }
]
```

### View User Information
```javascript
JSON.parse(localStorage.getItem('userInfo'))
```

**Output Example:**
```javascript
{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "+233123456789",
    "address": "Test Address",
    "city": "Accra"
}
```

### View Order History
```javascript
JSON.parse(localStorage.getItem('orders'))
```

**Output Example:**
```javascript
[
    {
        "id": "ORDER-1704608945123",
        "date": "1/7/2026, 10:15:45 AM",
        "customer": "Test User",
        "email": "test@example.com",
        "phone": "+233123456789",
        "address": "Test Address",
        "city": "Accra",
        "items": [
            {"id": 1, "name": "Grilled Steak", "price": 85, "quantity": 3},
            {"id": 7, "name": "Jollof Rice", "price": 25, "quantity": 2}
        ],
        "subtotal": 305,
        "tax": 30.5,
        "total": 335.5
    }
]
```

---

## 🧪 Test Cases

### Test 1: Add Single Item
- [ ] Click "Continental" tab
- [ ] Add "Caesar Salad" (quantity 1)
- [ ] Click "Add to Cart"
- [ ] Verify cart count shows "1"
- [ ] Open cart, verify item shows

### Test 2: Add Multiple Quantities
- [ ] Click quantity + button several times
- [ ] Set quantity to 5
- [ ] Add to cart
- [ ] Check cart shows qty 5
- [ ] Verify price calculated: item_price × 5

### Test 3: Remove Item
- [ ] Add any item to cart
- [ ] Open cart
- [ ] Click trash icon to remove
- [ ] Verify item removed
- [ ] Verify cart count updated

### Test 4: Adjust Quantity
- [ ] Add item to cart
- [ ] Open cart
- [ ] Change quantity from 2 to 5
- [ ] Verify price updated
- [ ] Change quantity to 1
- [ ] Verify price updated again

### Test 5: Tax Calculation
- [ ] Add items totaling GHS 100
- [ ] Open cart
- [ ] Verify tax shows: GHS 10.00 (10% of 100)
- [ ] Verify total shows: GHS 110.00

### Test 6: User Information
- [ ] Click "Proceed to Checkout"
- [ ] Fill in all fields
- [ ] Click "Save & Continue"
- [ ] Complete order
- [ ] Close confirmation
- [ ] Proceed to checkout again
- [ ] Verify fields are pre-filled from previous entry

### Test 7: Data Persistence
- [ ] Add items to cart (qty: 3)
- [ ] Close browser completely
- [ ] Reopen website
- [ ] Open cart
- [ ] Verify items still there with same qty!

### Test 8: Category Filtering
- [ ] Click "All" - should show 18 items
- [ ] Click "Continental" - should show 6 items
- [ ] Click "Local Meals" - should show 6 items
- [ ] Click "Drinks" - should show 6 items
- [ ] Click "All" again - should show 18 items

### Test 9: Mobile Responsiveness
- [ ] Press F12 (Developer Tools)
- [ ] Click responsive design mode
- [ ] Test on iPhone 12 (390x844)
- [ ] Verify layout adjusts
- [ ] Test on iPad (768x1024)
- [ ] Verify layout adjusts
- [ ] Test on desktop (1920x1080)
- [ ] Verify proper layout

### Test 10: Browser Compatibility
- [ ] Test in Chrome ✓
- [ ] Test in Firefox ✓
- [ ] Test in Safari ✓
- [ ] Test in Edge ✓
- [ ] Test in Mobile Chrome ✓

---

## 🔄 Complete User Journey Test

Follow this complete user flow:

```
1. User opens website
   ↓
2. Scrolls through menu
   ↓
3. Filters by category
   ↓
4. Selects items with quantities
   ↓
5. Adds to cart (GHS 150 worth)
   ↓
6. Opens cart, reviews items
   ↓
7. Adjusts quantities
   ↓
8. Proceeds to checkout
   ↓
9. Fills customer information
   ↓
10. Confirms order
    ↓
11. Sees order confirmation
    ↓
12. Closes confirmation
    ↓
13. Starts new order (data saved!)
    ↓
14. Verifies old user info pre-filled
    ↓
15. Completes new order
    ↓
16. Checks localStorage (2 orders saved)
```

---

## 🐛 Debug Checklist

If something doesn't work, check these:

### Cart Not Showing Items
- [ ] Open Console (F12)
- [ ] Run: `console.log(cart)` - see what's in cart
- [ ] Refresh page (Ctrl+R)
- [ ] Try a different browser

### Data Not Saving
- [ ] Check localStorage is enabled
- [ ] Not in private/incognito mode?
- [ ] Browser storage permissions OK?
- [ ] Try: `localStorage.setItem('test', 'value')`

### Styling Looks Wrong
- [ ] Check `styles.css` is in correct folder
- [ ] Hard refresh: Ctrl+Shift+R
- [ ] Clear browser cache
- [ ] Try different browser

### JavaScript Errors
- [ ] Press F12 → Console tab
- [ ] Look for red error messages
- [ ] Check `script.js` is in correct folder
- [ ] Verify file names match exactly

---

## 🔍 Console Commands Reference

### Check if JavaScript is running
```javascript
console.log("Hello from MR. TILLS!")
```
Should print: "Hello from MR. TILLS!"

### Check cart contents
```javascript
console.log(cart)
```

### Check user info
```javascript
console.log(userInfo)
```

### Check all localStorage data
```javascript
console.log(localStorage)
```

### See all menu items
```javascript
console.log(menuData)
```

### Count total items in cart
```javascript
cart.reduce((sum, item) => sum + item.quantity, 0)
```

### Calculate subtotal
```javascript
cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
```

### Export all orders as JSON
```javascript
JSON.stringify(JSON.parse(localStorage.getItem('orders')), null, 2)
```
Copy and paste output to notepad to save

### Clear all data
```javascript
localStorage.clear()
```
**Warning:** This deletes everything!

### Clear only cart
```javascript
localStorage.removeItem('cart')
```

### Clear only user info
```javascript
localStorage.removeItem('userInfo')
```

### Clear only orders
```javascript
localStorage.removeItem('orders')
```

---

## 📊 Sample Test Data

To test without adding items manually:

```javascript
// Add this in browser console to load test data
const testCart = [
    {"id":1,"name":"Grilled Steak","price":85,"quantity":2},
    {"id":7,"name":"Jollof Rice","price":25,"quantity":1},
    {"id":13,"name":"Fresh Orange Juice","price":12,"quantity":3}
];
localStorage.setItem('cart', JSON.stringify(testCart));
location.reload(); // Refresh page
```

---

## ✅ Performance Metrics

After complete setup:
- Page load time: < 1 second
- Add to cart response: < 100ms
- Checkout process: < 500ms
- Storage write: < 50ms

---

## 🎬 Screen Recording Guide

To capture demo video:
1. Use OBS Studio (free)
2. Record yourself adding items
3. Complete checkout
4. Show confirmation
5. Show saved data in console

**Great for sharing with customers!**

---

## 🚀 Demo Account Credentials

Use for testing (dummy data):

**User 1:**
- Name: Demo User
- Email: demo@mrtills.com
- Phone: +233501234567
- Address: Demo Avenue
- City: Accra

**User 2:**
- Name: Test Customer
- Email: test@mrtills.com
- Phone: +233551234567
- Address: Test Street
- City: Tema

---

## 📋 Sign-Off Checklist

Before going live:

- [ ] All menu items display correctly
- [ ] Cart functionality works
- [ ] Data saves to localStorage
- [ ] Checkout process complete
- [ ] Mobile layout responsive
- [ ] All colors match brand
- [ ] Contact info updated
- [ ] No console errors
- [ ] All links work
- [ ] Tested in multiple browsers
- [ ] Tested on mobile devices
- [ ] User info pre-fills correctly
- [ ] Order history saves
- [ ] Page loads quickly
- [ ] All buttons clickable

---

**Happy Testing!** 🧪

For more detailed information, see README.md
