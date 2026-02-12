# ShoppyGlobe E-commerce Backend API

### 🚀 Project Overview
This is a robust RESTful API built for **ShoppyGlobe**, an e-commerce platform. It handles product management, user authentication, and shopping cart logic. This project was developed as part of the **Internshala Full Stack Development** curriculum.

---

## 🛠 Tech Stack & Integrations
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB Atlas (Cloud)
* **Authentication:** JSON Web Tokens (JWT)
* **Security:** Bcrypt.js (Password Hashing)
* **Testing:** Thunder Client
* **Data Source:** Integrated with FakeStore API for initial product seeding.

---

## 📌 Features & Requirements Met

### 1. Node.js & Express API (60 Marks)
- Full implementation of RESTful endpoints.
- Modular routing for Products, Auth, and Cart.
- **GET** `/products` & `/products/:id` to browse the catalog.

### 2. MongoDB Integration (50 Marks)
- **Cloud Hosted:** Connected to MongoDB Atlas for real-time evaluator access.
- **Product Schema:** Includes `name`, `price`, `description`, `category`, and `stock`.
- **Cart Schema:** Linked to Users via ObjectIDs, supporting multiple items per cart.
- **CRUD:** Full Create, Read, Update, and Delete operations implemented.

### 3. Authentication & Authorization (60 Marks)
- **JWT Implementation:** Secure token-based access.
- **Bcrypt:** Passwords are salted and hashed before being stored in the database.
- **Protected Routes:** Cart operations (POST/PUT/DELETE) are locked behind an authorization middleware.

### 4. Error Handling & Validation (20 Marks)
- Global error-handling middleware.
- Input validation (e.g., verifying if a product exists before adding to cart).
- Proper HTTP status codes (401 for Unauthorized, 404 for Not Found, etc.).

---

## ⚙️ Installation & Run Instructions

1.  **Clone the Repository:**
    ```bash
    git clone <your-github-link>
    cd shoppyglobe-backend
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root directory and add:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_atlas_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

4.  **Seed the Database:**
    Populate your cloud DB with products from FakeStore API:
    ```bash
    node seed.js
    ```

5.  **Run the Server:**
    ```bash
    npm start  # or node server.js
    ```

---

### Authentication
| Feature | Method | Endpoint |
| :--- | :--- | :--- |
| Register | POST | `/api/auth/register` |
| Login | POST | `/api/auth/login` |

### Products
| Feature | Method | Endpoint |
| :--- | :--- | :--- |
| Get All | GET | `/products` |
| Get One | GET | `/products/:id` |

### Shopping Cart (Requires Bearer Token)
| Feature | Method | Endpoint |
| :--- | :--- | :--- |
| Add Item | POST | `/cart` |
| Update Qty | PUT | `/cart/:id` |
| Remove Item | DELETE | `/cart/:id` |

---

## Github link: https://github.com/hrishihrishi/Backend-of-ShoppyGlobe/tree/main

---

**Developed by:** [Your Name]  
**Project:** Internshala MERN Stack Final Assignment



---
