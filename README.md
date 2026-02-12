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
    git clone https://github.com/hrishihrishi/Backend-of-ShoppyGlobe/tree/main
    cd shoppyglobe-backend
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root directory and add:
    ```
    PORT=5000
    MONGO_URI=mongodb+srv://hrishi_internshala:oBJHKLY9XAh3Yk3r@cluster0.zkji9lb.mongodb.net/?appName=Cluster0
    JWT_SECRET=shoppyglobe_super_secret_key_123
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


## 🧪 Detailed Thunder Client Testing Instructions

Follow these steps in order to verify the API functionality:

### Step 1: User Registration & Login
1. Open Thunder Client and create a **POST** request to: `http://localhost:5000/api/auth/register`.
2. Use the "User Registration" JSON payload from the section above.
3. Create a **POST** request to: `http://localhost:5000/api/auth/login`.
4. Once you receive the response, **copy the `token` string** (do not include the quotes).

### Step 2: Product Discovery
1. Create a **GET** request to: `http://localhost:5000/products`.
2. From the list of products returned, **copy one `_id` value** (e.g., `65b...`). This is your `productId`.

### Step 3: Accessing Protected Cart Routes
1. Create a **POST** request to: `http://localhost:5000/cart`.
2. Click on the **Auth** tab in Thunder Client.
3. Select **Bearer Token** from the dropdown menu.
4. Paste the token you copied in Step 1 into the "Token" field.
5. In the **Body** tab, use the "Add Product to Cart" JSON payload, pasting your copied `productId`.
6. Click **Send**. You should see the item successfully added to your cart in the database.



### Step 4: Updating & Deleting
1. **To Update:** Change the method to **PUT** and use the URL: `http://localhost:5000/cart/<PASTE_PRODUCT_ID_HERE>`. Provide a new quantity in the JSON body.
2. **To Delete:** Change the method to **DELETE** and use the URL: `http://localhost:5000/cart/<PASTE_PRODUCT_ID_HERE>`. No body is required.

---

## ✅ Final Submission Checklist
- [ ] MongoDB Atlas "Network Access" set to `0.0.0.0/0`.
- [ ] `.env` file verified (but excluded from GitHub via `.gitignore`).
- [ ] `seed.js` executed to populate the Cloud Database.
- [ ] Screenshots of all successful Thunder Client tests added to `/screenshots` folder.

---

**Server running on : http://localhost:5000**


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

**Github link: https://github.com/hrishihrishi/Backend-of-ShoppyGlobe/tree/main**

---

**Developed by:** [Your Name]  
**Project:** Internshala MERN Stack Final Assignment



---
