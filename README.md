Secure Contact Manager (Backend)

A secure and scalable backend system for managing user contacts with features like authentication, authorization, and full CRUD operations.
Built using Node.js, Express.js, and MongoDB, this API follows RESTful design principles and ensures efficient data handling with JSON Web Token (JWT)-based authentication.

🚀 Features

🔐 User Authentication using JWT (Register & Login)
👥 CRUD Operations for managing contacts (Create, Read, Update, Delete)
🧱 Secure Routing with middleware for protected endpoints
⚙️ RESTful API Design for seamless frontend integration
💾 MongoDB Integration for robust and scalable data storage
📡 Express Error Handling for smooth backend operation

🧰 Tech Stack
Layer	Technology
Language	JavaScript (ES6)
Runtime	Node.js
Framework	Express.js
Database	MongoDB
Authentication	JWT (jsonwebtoken)
Environment Config	dotenv
API Testing	Postman


📂 Folder Structure
Secure-Contact-Manager/
│
├── config/
│   └── db.js              # MongoDB connection setup
│
├── controllers/
│   └── contactController.js  # Contact CRUD logic
│   └── userController.js     # Auth logic (register, login)
│
├── middleware/
│   └── authMiddleware.js     # Protects private routes
│
├── models/
│   └── userModel.js          # User schema
│   └── contactModel.js       # Contact schema
│
├── routes/
│   └── contactRoutes.js
│   └── userRoutes.js
│
├── .env                      # Environment variables
├── server.js                  # Entry point
├── package.json
└── README.md

⚡ API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/api/users/register	Register a new user
POST	/api/users/login	Login existing user
Contact Routes
Method	Endpoint	Description
GET	/api/contacts	Get all user contacts
POST	/api/contacts	Add a new contact
PUT	/api/contacts/:id	Update a contact
DELETE	/api/contacts/:id	Delete a contact

⚠️ All contact routes are protected and require a valid JWT token.

🧪 Installation & Setup

Clone the repository
git clone https://github.com/Aayush05082004/ContactManager-Backend.git

Navigate to project directory
cd ContactManager-Backend

Install dependencies
npm install


Create a .env file in the root directory and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000


Run the server
npm start


or for development with nodemon:
nodemon server.js
npm run dev


Test API using Postman


🧑‍💻 Author
Aayush Shrivastava
📍 Delhi, India
aayushshrivastava508@gmail.com

