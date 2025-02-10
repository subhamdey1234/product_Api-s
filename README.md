Here’s a sample `README.md` file for your product's API server:

---

# Product API Server

This is a simple Node.js and Express-based server for managing a product catalog. The server allows you to perform CRUD operations on products, including creating, reading, updating, and deleting product details.

## Features
- **Create, Read, Update, and Delete (CRUD) products**
- Supports product details such as name, price, quantity, category, rating, and warranty
- RESTful API design
- Input validation using Mongoose schema

---

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose for data modeling)
- Body-parser (for parsing request bodies)

---

## Installation and Setup

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Steps
1. Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/product-api-server.git](https://github.com/subhamdey1234/product_Api-s)
   ```
   
2. Navigate to the project directory:
   ```bash
   cd product-api-server
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000` by default.

---

## API Endpoints

### Base URL: `http://localhost:3000/api/products`

### 1. Get All Products
**GET** `/api/products`

**Response:**
```json
[
  {
    "_id": "603d2e2e8e5c1e0015755d50",
    "productname": "Smartphone X1",
    "price": 699,
    "quantity": 150,
    "category": "Electronics",
    "rating": 4.5,
    "warranty": "1 Year"
  }
]
```

---

### 2. Get a Single Product
**GET** `/api/products/:id`

**Response:**
```json
{
  "_id": "603d2e2e8e5c1e0015755d50",
  "productname": "Smartphone X1",
  "price": 699,
  "quantity": 150,
  "category": "Electronics",
  "rating": 4.5,
  "warranty": "1 Year"
}
```

---

### 3. Create a New Product
**POST** `/api/products`

**Request Body:**
```json
{
  "productname": "Smartphone X1",
  "price": 699,
  "quantity": 150,
  "category": "Electronics",
  "rating": 4.5,
  "warranty": "1 Year"
}
```

**Response:**
```json
{
  "message": "Product created successfully",
  "product": {
    "_id": "603d2e2e8e5c1e0015755d50",
    "productname": "Smartphone X1",
    "price": 699,
    "quantity": 150,
    "category": "Electronics",
    "rating": 4.5,
    "warranty": "1 Year"
  }
}
```

---

### 4. Update a Product
**PUT** `/api/products/:id`

**Request Body:**
```json
{
  "price": 750
}
```

**Response:**
```json
{
  "message": "Product updated successfully",
  "product": {
    "_id": "603d2e2e8e5c1e0015755d50",
    "productname": "Smartphone X1",
    "price": 750,
    "quantity": 150,
    "category": "Electronics",
    "rating": 4.5,
    "warranty": "1 Year"
  }
}
```

---

### 5. Delete a Product
**DELETE** `/api/products/:id`

**Response:**
```json
{
  "message": "Product deleted successfully"
}
```

---

## Error Handling
- Returns appropriate status codes for success (`200`, `201`) and errors (`400`, `404`, `500`).
- Validation errors are returned with detailed messages.

---

## Author
**Your Name**  
GitHub: [Subham Dey](https://github.com/subhamdey1234)  
Email: sdey06384@gmail.com  

---

