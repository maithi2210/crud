User Management Web Application
This is a full-stack User Management system built with Node.js, Express, MongoDB, EJS, and Bootstrap 5. It supports user registration, login/logout with sessions, and CRUD operations for user profiles. The UI is fully responsive and styled with Bootstrap.

Features
User Registration with input validation
Secure Login/Logout using sessions
CRUD operations for user profiles (username, email, age)
Protected routes using middleware
Responsive UI using Bootstrap 5
Project Structure (MVC)
The project follows the Model-View-Controller (MVC) pattern for clean separation of concerns:

Model – Defines the structure of the user data using Mongoose (empModel.js, userModel.js).
View – EJS templates render dynamic HTML pages (index.ejs, add.ejs, etc.).
Controller – Handles logic and interactions between model and view (empController.js, userController.js).
crud/
│
├── app.js # Main server file
├── package.json # Project metadata and dependencies
│
├── controller/
│ ├── empController.js # Handles employee logic
│ └── userController.js # Handles user authentication logic
│
├── middleware/
│ └── userMiddleware.js # Middleware for session validation
│
├── model/
│ ├── empModel.js # Employee schema
│ └── userModel.js # User schema
│
├── router/
│ ├── empRoute.js # Employee-related routes
│ └── userRoute.js # User-related routes
│
├── views/
│ ├── index.ejs # Employee listing
│ ├── add.ejs # Add new employee form
│ └── edit.ejs # Edit employee form

Modules Used
1. Express
Used to create the backend server and define application routes. It handles HTTP requests and connects controllers to views.

2. Mongoose
Acts as an Object Data Modeling (ODM) library for MongoDB. It defines schemas and performs database operations.

3. EJS (Embedded JavaScript)
Templating engine to dynamically render HTML pages using server-side data like usernames, errors, and profile info.

4. express-session
Manages user sessions securely. It stores session data on the server and authenticates access to protected pages.

5. bcrypt
Used to hash user passwords during registration and validate them during login to ensure secure authentication.

6. Bootstrap 5
Provides a responsive, mobile-friendly, and visually appealing front-end interface with styled forms, tables, and alerts.

How to Run
Clone the repository:
git clone https://github.com/your-username/user-management-app.git
cd user-management-app
Install dependencies:
npm install
Set up MongoDB (local or Atlas), and configure your MongoDB URI in config/db.js.

Run the server:

node app.js
Open in browser:
http://localhost:3000

Screenshots

Register User
![image](https://github.com/user-attachments/assets/88119c7e-d74a-43ae-87c7-67ba3867e58f)

Login User
![image](https://github.com/user-attachments/assets/a03134b5-61bc-4fc2-8b20-6813d4fb7d73)

Home Page
![image](https://github.com/user-attachments/assets/28da0774-6ca7-42fe-a12d-316a40c5f589)

Add Employee
![image](https://github.com/user-attachments/assets/f46e686a-407b-44b4-9801-8160cfd1c285)

Update Employee
![image](https://github.com/user-attachments/assets/690d3e73-afeb-4f68-a536-4b937621ea87)

Delete Employee
![image](https://github.com/user-attachments/assets/2272e050-14d2-4fd0-b267-d4e0edaf05fd)





