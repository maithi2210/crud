# User Management Web Application
This is a full-stack User Management system built with Node.js, Express, MongoDB, EJS, and Bootstrap 5. It supports user registration, login/logout with sessions, and CRUD operations for user profiles. The UI is fully responsive and styled with Bootstrap.

---

## Features

User Registration with input validation
Secure Login/Logout using sessions
CRUD operations for user profiles (username, email, age)
Protected routes using middleware
Responsive UI using Bootstrap 5
Project Structure (MVC)
The project follows the Model-View-Controller (MVC) pattern for clean separation of concerns:

Model – Defines the structure of the user data using Mongoose (empModel.js, userModel.js).
View – EJS templates render dynamic HTML pages (index.ejs, add.ejs, edit.ejs, login.ejs etc.).
Controller – Handles logic and interactions between model and view (empController.js, userController.js).
---

## Project Structure

```
Express project-Maithili/crud/
│
├── app.js                    # Main application entry point
├── controller/
│   ├── empController.js      # Employee CRUD logic
│   └── userController.js     # User authentication logic
├── middleware/
│   └── userMiddleware.js     # Authentication middleware
├── model/
│   ├── empModel.js           # Mongoose schema for Employee
│   └── userModel.js          # Mongoose schema for User
├── router/
│   ├── empRoute.js           # Employee routes
│   └── userRoute.js          # User routes (auth)
├── views/
│   └── ...                   # EJS templates (index, login, register, etc.)
├── package.json
└── package-lock.json
```
## Modules Used

1. Express : 
Used to create the backend server and define application routes. It handles HTTP requests and connects controllers to views.

2. Mongoose : 
Acts as an Object Data Modeling (ODM) library for MongoDB. It defines schemas and performs database operations.

3. EJS (Embedded JavaScript) :
Templating engine to dynamically render HTML pages using server-side data like usernames, errors, and profile info.

4. express-session :
Manages user sessions securely. It stores session data on the server and authenticates access to protected pages.

5. bcrypt :
Used to hash user passwords during registration and validate them during login to ensure secure authentication.

6. Bootstrap 5 :
Provides a responsive, mobile-friendly, and visually appealing front-end interface with styled forms, tables, and alerts.
---

## Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB (local or remote)

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/maithi2210/crud.git
   cd crud/Express\ project-Maithili/crud
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up MongoDB:**
   - Make sure MongoDB is running on your machine.
   - The default connection string is `mongodb://localhost:27017/db12` (see `app.js`). You can change this as needed.

4. **Start the application:**
   ```bash
   npm start
   ```
   or
   ```bash
   node app.js
   ```

5. **Visit the app:**
   Open your browser and go to: [http://localhost:3000](http://localhost:3000)

---

## Usage

- **Register** a new account via `/register`
- **Login** via `/login`
- Add, edit, or delete employees (after logging in)
- Logout anytime with `/logout`

---

## Environment Variables

- To change the port, set the `PORT` environment variable before starting the app.
- To change the session secret, modify the `secret` in `app.js`.

---

## Dependencies

- express
- express-session
- mongoose
- bcrypt
- ejs

---

## License

This project is licensed under the ISC License.

---

## Author

- [maithi2210](https://github.com/maithi2210)

---

## Screenshots

Register User
![image](https://github.com/user-attachments/assets/88119c7e-d74a-43ae-87c7-67ba3867e58f)

Login User
![image](https://github.com/user-attachments/assets/6e50ff6f-3953-4e1c-bcab-87f6c4beb1af)

Home Page
![image](https://github.com/user-attachments/assets/28da0774-6ca7-42fe-a12d-316a40c5f589)

Add Employee
![image](https://github.com/user-attachments/assets/f46e686a-407b-44b4-9801-8160cfd1c285)

Update Employee
![image](https://github.com/user-attachments/assets/690d3e73-afeb-4f68-a536-4b937621ea87)

Delete Employee
![image](https://github.com/user-attachments/assets/2272e050-14d2-4fd0-b267-d4e0edaf05fd)

---



