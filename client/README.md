# Invoice Management Frontend

## Overview

This is the frontend application built with React, Redux, React Query, Tailwind CSS, and Zod for validation. It allows users to log in and view their invoices.

## Features

- **Login Page**: Allows users to log in with email and password.
- **Invoices Page**: Displays a list of invoices for the logged-in user.
- **Modal**: Displays individual invoice details in a modal.

## Setup and Installation

1. Clone the repository (if not already done):
2. Navigate to the frontend directory `cd root/client`
3. Install dependencies: `npm install`
4. Run development server: `npm run dev`

## API Integration

- **Login**:
    - When the user submits the login form, a `POST` request is sent to `http://localhost:3000/auth/login`.
    - On success, the JWT token is stored in `localStorage` and the user is redirected to the `/invoices` page.

- **Fetch Invoices**:
    - Once logged in, a `GET` request is sent to `http://localhost:3000/invoices` with the stored JWT token in the `Authorization` header.

## Testing the Frontend

1. **Login**: Enter valid email and password to authenticate.
    - Email: `test@test.com`
    - Password: `password123`

2. **Invoices**: After successful login, the invoices will be fetched and displayed on the `/invoices` page.

## Debugging

1. Open the browser console to check for errors.
2. Ensure the backend server is running and accessible at `http://localhost:3000`.
