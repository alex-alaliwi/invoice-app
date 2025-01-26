# Invoice Management Backend

## Overview

This is a backend API for an invoice management system built with NestJS. The API allows users to authenticate, retrieve invoices, and manage user data securely.

## Setup and Installation

1. Clone the repository: ``git clone <repository_url>``
2. Navigate to the backend directory: ``cd root/server``
3. Install dependencies: ``npm install``
4. Set up the `.env` file with your PostgreSQL database connection URL:
    ```
    DATABASE_URL="postgresql://username:password@localhost:5432/invoice_app"
    JWT_SECRET="your_random_secret_key_here"
    ```
5. Run database migrations: ``npx prisma migrate dev``
6. Seed the database with initial data: ``npx tsx prisma/seed.ts``
7. Start the backend server: ``npm run start``

## API Endpoints

### 1. **POST /auth/login**  
   - **Description**: Authenticates a user with their email and password, and returns a JWT token for further API requests.
   - **Request Body**:
     ```json
     {
       "email": "test@test.com",
       "password": "password123"
     }
     ```
   - **Response**:
     ```json
     {
       "access_token": "your_jwt_token_here"
     }
     ```

   **Postman Test Instructions**:
   - URL: `http://localhost:3000/auth/login`
   - Method: `POST`
   - Body (JSON):
     ```json
     {
       "email": "test@test.com",
       "password": "password123"
     }
     ```

### 2. **GET /invoices**  
   - **Description**: Fetches a list of invoices for the authenticated user.
   - **Authentication**: Requires a JWT token in the `Authorization` header.
   - **Request Header**:
     ```
     Authorization: Bearer <your_jwt_token>
     ```
   - **Response**:
     ```json
     [
       {
         "id": 1,
         "vendor_name": "Amazon",
         "amount": 150,
         "due_date": "2025-01-30",
         "description": "Invoice for Vendor 1",
         "user_id": 1,
         "paid": false
       },
       {
         "id": 2,
         "vendor_name": "Costco",
         "amount": 250,
         "due_date": "2025-02-15",
         "description": "Invoice for Vendor 2",
         "user_id": 1,
         "paid": true
       }
     ]
     ```

   **Postman Test Instructions**:
   - URL: `http://localhost:3000/invoices`
   - Method: `GET`
   - Headers:
     ```
     Authorization: Bearer <your_jwt_token>
     ```

### 3. **GET /invoices/:id**  
   - **Description**: Fetches details of a specific invoice for modal display.
   - **Authentication**: Requires a JWT token in the `Authorization` header.
   - **Request Header**:
     ```
     Authorization: Bearer <your_jwt_token>
     ```
   - **Response**:
     ```json
     {
       "id": 1,
       "vendor_name": "Amazon",
       "amount": 150,
       "due_date": "2025-01-30",
       "description": "Invoice for Vendor 1",
       "user_id": 1,
       "paid": false
     }
     ```

   **Postman Test Instructions**:
   - URL: `http://localhost:3000/invoices/1` (replace `1` with the invoice ID you want to retrieve)
   - Method: `GET`
   - Headers:
     ```
     Authorization: Bearer <your_jwt_token>
     ```