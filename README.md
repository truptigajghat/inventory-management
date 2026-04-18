# inventory-management

# 🛒 Inventory Management System

A simple Inventory Management web application built using Node.js, Express, MongoDB, and EJS.

This application allows users to add, view, update, and delete products, along with image upload functionality.

---

##  Features

- Add new product with:
  - Product Name
  - Price
  - Quantity
  - Image upload (mandatory)

- View all products in a clean card layout

- Edit product details:
  - Update name, price, quantity

- Delete product:
  - Removes product from the database

- Success messages for:
  - Add
  - Update
  - Delete

- Clean and responsive UI using custom CSS

---

##  Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose)
- Frontend: EJS, HTML, CSS
- File Upload: Multer

---

##  Project Structure

project-folder/
│
├── models/
│ └── product.js
│
├── views/
│ ├── add.ejs
│ ├── edit.ejs
│ └── products.ejs
│
├── public/
│ ├── css/
│ │ └── style.css
│ └── uploads/
│
├── server.js
├── package.json
└── README.md


---

##  Setup Instructions

### 1. Clone the repository

git clone https://github.com/truptigajghat/inventory-management.git


---

### 2. Install dependencies

npm install


---

### 3. Setup MongoDB

Make sure MongoDB is running locally.

Default connection:
mongodb://127.0.0.1:27017/inventory


---

### 4. Run the application
node server.js


---

### 5. Open in browser

http://localhost:8080/products


---

##  Screenshots


- Add Product Page
<img width="636" height="548" alt="image" src="https://github.com/user-attachments/assets/3a6d3bfc-d770-4e5a-bbfe-35fb803acadd" />

- Product Dashboard
<img width="1919" height="943" alt="image" src="https://github.com/user-attachments/assets/b2d69423-6a5d-4d94-9535-2b8e12effd0d" />
  
- Edit Product Page
<img width="568" height="553" alt="image" src="https://github.com/user-attachments/assets/e139acec-29f4-4253-bc15-2128b6d82ed3" />

---

## 🙋‍♀️ Author

**Trupti Gajghat**

---



