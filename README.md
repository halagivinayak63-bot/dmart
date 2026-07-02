# DMART Management API

A **Node.js + Express.js** mini project that simulates a **DMART Store Management System** using **modular routing**.  
This project is built for learning how to create a structured Express application with multiple modules and test API endpoints in **Postman**.

The API contains separate modules for:

- **Products**
- **Customers**
- **Employees**
- **Payments**
- **Suppliers**

Each module contains **10 sample records** with unique IDs, and the application exposes routes to retrieve:
- all records in a module
- a single record by ID

The project does **not use any database**. All data is stored in arrays inside route files, which makes it suitable as a **mini project for practice, demos, lab work, or academic submission**.

---

# Project Overview

The **DMART Management API** is a mini backend project built using **Express.js**.  
It is designed to demonstrate how a store management system can be divided into different functional modules and connected to a single Express application.

Instead of writing all logic in one file, the application follows a **modular structure**, where each module is stored in a separate file and connected to the main application using `app.use()`.

This project is useful for understanding:

- how to create an Express server
- how to organize a project into modules
- how to create route files
- how to send JSON responses
- how to test APIs using Postman
- how to work with URL parameters such as `:id`

---

# Objectives of the Project

The main objectives of this project are:

- To build a simple **store management API** using Express.js
- To practice **modular routing** in Node.js
- To understand how multiple route files can be linked to a single application
- To create and test **GET endpoints**
- To simulate real-world store-related data such as products, customers, employees, suppliers, and payments
- To prepare a beginner-friendly mini project that can be demonstrated in **Postman**

---

# Features

This project includes the following features:

- **Express.js server setup**
- **Separate route modules** for each entity
- **10 sample records** in every module
- **Unique IDs** for each record
- Route to **fetch all records**
- Route to **fetch a single record by ID**
- JSON response format
- Simple project structure suitable for mini project/demo
- Easy to run locally using Node.js
- Easy to test using Postman

---

# Modules Included

The project contains the following five modules:

## 1. Products
Stores information related to products available in the DMART system.

Fields used:
- `prodId`
- `prodName`
- `prodCost`
- `prodQty`
- `category`

---

## 2. Customers
Stores information related to customers.

Fields used:
- `custId`
- `custName`
- `custAddress`
- `custPhone`

---

## 3. Employees
Stores information related to employees working in the DMART system.

Fields used:
- `empId`
- `empName`
- `empAddress`
- `empPhone`
- `designation`

---

## 4. Payments
Stores information related to billing and payment transactions.

Fields used:
- `billNo`
- `custId`
- `amount`
- `billDate`
- `paymentMode`

---

## 5. Suppliers
Stores information related to suppliers who provide products to the store.

Fields used:
- `supId`
- `supName`
- `supPhone`
- `supAddress`
- `productSupplied`

---

# System Requirements

To run this project on your system, make sure the following are available:

## Hardware Requirements
- A laptop or desktop computer
- Minimum **4 GB RAM** recommended
- At least **200 MB free disk space**

## Operating System
The project can run on any OS that supports Node.js, such as:
- Windows 10 / Windows 11
- Linux
- macOS

---

# Software Requirements

The following software/tools are required:

- **Node.js**
- **npm**
- **Visual Studio Code** (or any code editor)
- **Postman** (for testing the API)

---

# Project Structure

The project follows the below folder structure:

```bash
dmart/
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
│
└── modules/
    ├── product.js
    ├── customer.js
    ├── employee.js
    ├── payment.js
    └── supplier.js
