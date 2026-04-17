# 🔐 Secure Contact Manager (Backend)

A secure and scalable backend API for managing user contacts with authentication, authorization, and full CRUD functionality. Built using Node.js, Express.js, and MongoDB, following RESTful API design principles.

---

## 🚀 Features

* 🔐 JWT-based User Authentication (Register & Login)
* 👥 Full CRUD Operations for Contacts
* 🧱 Protected Routes using Middleware
* ⚙️ RESTful API Architecture
* 💾 MongoDB Integration for scalable data storage
* 📡 Centralized Error Handling

---

## 🧰 Tech Stack

* **Language:** JavaScript (ES6)
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB
* **Authentication:** JWT (jsonwebtoken)
* **Environment Config:** dotenv
* **API Testing:** Postman

---

## 📂 Folder Structure

```
Secure-Contact-Manager/
│
├── config/
│   └── db.js                # MongoDB connection setup
│
├── controllers/
│   ├── userController.js   # Handles authentication logic
│   └── contactController.js# Handles contact CRUD operations
│
├── middleware/
│   └── authMiddleware.js   # JWT verification & route protection
│
├── models/
│   ├── userModel.js        # User schema
│   └── contactModel.js     # Contact schema
│
├── routes/
│   ├── userRoutes.js       # Auth routes
│   └── contactRoutes.js    # Contact routes
│
├── .env                    # Environment variables
├── server.js               # Entry point
├── package.json
└── README.md
```

---

## ⚡ API Endpoints

### 🔐 Authentication Routes

| Method | Endpoint            | Description         |
| ------ | ------------------- | ------------------- |
| POST   | /api/users/register | Register a new user |
| POST   | /api/users/login    | Login existing user |

---

### 👥 Contact Routes (Protected)

> ⚠️ Requires JWT token in `Authorization` header

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| GET    | /api/contacts     | Get all contacts   |
| GET    | /api/contacts/:id | Get single contact |
| POST   | /api/contacts     | Create new contact |
| PUT    | /api/contacts/:id | Update contact     |
| DELETE | /api/contacts/:id | Delete contact     |

---

### 🔑 Example Header

```
Authorization: Bearer <your_token>
```


---

## 🧪 Installation & Setup

1. Clone the repository
   git clone https://github.com/Aayush05082004/ContactManager-Backend.git

2. Navigate to the project directory
   cd ContactManager-Backend

3. Install dependencies
   npm install

4. Create a .env file and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

---

## ▶️ Run the Server

Production:
npm start

Development:
npm run dev

---

## 🔐 Authentication

Include JWT token in headers:

Authorization: Bearer <your_token>

---

## 📌 Future Improvements

* Refresh token implementation
* Pagination & filtering
* Search functionality
* Unit & integration testing
* Deployment (Docker / Cloud)

---

## 🧑‍💻 Author

Aayush Shrivastava
Delhi, India
[aayushshrivastava508@gmail.com](mailto:aayushshrivastava508@gmail.com)
