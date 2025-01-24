


# To-Do List Application

## Overview
This is a **To-Do List application** built with **React**, **Redux**, and **styled-components**. It supports user authentication, dark mode, task filtering, and dynamic search functionality. It was created as part of an internship assignment project.

---

## Features
- **User Authentication**: Mock login and logout functionality.
- **Theme Toggle**: Light and dark theme toggle.
- **Task Management**: Add, edit, and delete tasks.
- **Task Filtering**: Filter tasks by categories such as:
  - All Tasks
  - Today
  - Important
- **Search Functionality**: Search for tasks dynamically and navigate to specific task details.
- **Responsive Design**: Fully responsive design for various screen sizes.

---

## Tech Stack
- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library.
- **React-Redux**: Official React bindings for Redux.
- **Redux-Persist**: Persist and rehydrate a Redux store.
- **Styled-Components**: CSS-in-JS library for styling React components.
- **React-Router-Dom**: Library for routing in React applications.

---

# Installation

# 1. Clone the repository:
git clone https://github.com/ib-inu/todo
cd todo

# 2. Install dependencies:
npm install

# 3. Run the application:
npm start









-----------------





# Key Components

### **Authentication.jsx**
Handles user login and logout using mock authentication logic. Renders the login form and handles user input.

---

### **Navbar.jsx**
Includes the theme toggle button and search functionality. Allows users to search for tasks dynamically and navigate to specific task details.

---

### **Sidebar.jsx**
Contains task categories and a toggle button for filtering tasks by categories.

---

### **ToDo.jsx**
Renders the list of tasks based on the selected filter and handles task completion.

---

### **Chart.jsx**
Displays a doughnut chart representing the task completion status.

---

### **ThemeApp.jsx**
Wraps the application with the `ThemeProvider` and applies the selected theme.

---

### **ProtectedRoute.jsx**
A higher-order component that checks if the user is authenticated before allowing access to the protected routes.






