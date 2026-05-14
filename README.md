# Campus Mini Mart

Campus Mini Mart is a simple front-end e-commerce prototype designed for campus users. It allows customers to browse available mini-market products, search by product name, filter items by category, add products to a shopping cart, update item quantities, remove items, and complete a simulated checkout process.

This project was developed as part of a Software Engineering course project to demonstrate requirements analysis, system modeling, implementation, and testing for a small web-based system.

---

## Project Idea

Many university students have short breaks between lectures and need a quick way to view available snacks, drinks, meals, and desserts. Campus Mini Mart provides a simple online catalog that helps users find products faster and manage their shopping cart before checkout.

The current version is a working front-end MVP. It focuses on the main customer shopping flow and does not include real payment, delivery tracking, database integration, or a fully implemented administrator dashboard.

---

## Main Features

- View available products with image, name, category, description, and price.
- Search products by name.
- Filter products by category:
  - Drinks
  - Snacks
  - Meals
  - Desserts
- Add products to the shopping cart.
- Save cart data using browser localStorage.
- View selected products on the cart page.
- Increase or decrease item quantities.
- Remove individual items from the cart.
- Clear the entire cart.
- Automatically calculate subtotal and total values.
- Complete a simulated checkout process.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser localStorage

No server, database, or external framework is required to run the current prototype.

---

## Project Folder Structure

```text
Campus Mini Mart/
│
├── index.html
├── cart.html
├── style.css
├── shop.js
├── cart.js
├── README.md
│
└── images/
    └── products/
        ├── water-bottle.png
        ├── energy-drink.png
        ├── soda-can.png
        ├── chips.png
        ├── cookies.png
        ├── instant-noodles.png
        ├── ice-cream.png
        └── frozen-pizza.png
```

> Note: If the main store page in the submitted folder is named `online_shop.html`, it should either be renamed to `index.html` or the report should be updated to match the actual file name.

---

## How to Run the Project

1. Download or extract the project folder.
2. Make sure all files and folders remain in the same structure.
3. Open `index.html` in a modern web browser.
4. Use the website normally from the browser.

No installation is required.

---

## How to Use the Website

1. Open the main store page.
2. Browse the available products.
3. Use the search box to find a product by name.
4. Use category buttons to filter products.
5. Click **Add to Cart** for the products you want.
6. Open the cart page.
7. Increase, decrease, or remove selected items.
8. Review the order summary and total price.
9. Click **Checkout** to complete the simulated checkout.
10. After checkout, the cart is cleared.

---

## Testing Summary

The prototype was tested using black-box functional testing and basic code review. The main tested features include:

- Product display
- Search by product name
- Category filtering
- Add to cart
- Cart persistence using localStorage
- Quantity update
- Remove item
- Clear cart
- Total calculation
- Checkout simulation
- Basic responsive layout behavior

The project test cases include normal cases, edge cases, and negative cases.

---

## Prototype Limitations

The current version is a front-end MVP only. It does not include:

- Real online payment
- Real delivery tracking
- User login or authentication
- Back-end database
- Server-side order processing
- Fully implemented administrator dashboard

These features are planned as future improvements for a complete version of the system.

---

## Future Enhancements

Possible future improvements include:

- Adding user accounts and login authentication.
- Adding an administrator dashboard for managing products.
- Storing products and orders in a real database.
- Adding online payment integration.
- Adding order history.
- Adding delivery or pickup status tracking.
- Improving mobile responsiveness.
- Adding product stock management.

---

## Team Members

| Name | Student ID | Contribution |
|---|---:|---|
| Yazan Hijazi | 12401471 | Participated in project planning, requirements discussion, UI review, implementation decisions, testing, documentation review, and final package preparation. |
| Yazan Zaghlol | 12217530 | Participated in project planning, requirements discussion, UI review, implementation decisions, testing, documentation review, and final package preparation. |

The project was completed through continuous teamwork. Both team members worked together through university meetings and Zoom sessions to discuss the project idea, analyze requirements, review the prototype, test the main features, improve the documentation, and prepare the final submission package.

Although some tasks were organized during the work process, the main decisions and final project parts were reviewed and improved collaboratively by both members.
---

## Course Information

**Course:** Software Engineering  
**Project Type:** Web-based mini market system  
**Project Name:** Campus Mini Mart  
**Submission:** Final project package

---

## Final Notes

Campus Mini Mart demonstrates a complete small software engineering project cycle, including requirements analysis, user stories, use cases, UML modeling, prototype implementation, testing, risk management, and final delivery preparation.

The prototype is simple, organized, and focused on the core customer shopping experience.
