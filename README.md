# ![FlexChat-logo](https://github.com/user-attachments/assets/11f1d077-af80-4d9d-9e15-4ff034fa01c5)

This project is a full-stack application built with React, Node.js, Express, and MongoDB. The frontend is managed using Vite, and the backend handles authentication, user profile management, and other API routes.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/adityasatuluri/flex-chat.git
    cd flex-chat
    ```

2. **Install server dependencies:**

    ```bash
    cd server
    npm install
    ```

3. **Install client dependencies:**

    ```bash
    cd ../client
    npm install
    ```

### Running the Project

1. **Start the server:** Add `"dev": "nodemon index.js" ` in ` "scripts" ` of the ` _package.json_ `  file and run the below command
    ```bash 
    cd server
    npm run dev
    ```

    The server will start on `http://localhost:6969`.

2. **Start the client:**
    ```bash
    cd ../client
    npm run dev
    ```

    The client will start on `http://localhost:5173`.

### Project Structure

- **server**: Contains the Express server, authentication logic, and API routes.
- **client**: Contains the React application managed by Vite.

### Stack

- **Frontend:**
  - React
  - Vite
  - Tailwind CSS
  - React Icons

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - JWT (JSON Web Tokens) for authentication
  - bcrypt for password hashing

### Environment Variables

Modify the `.env` file in the `server` directory by changing the following variables:

 - MONGO_URI=your_mongodb_uri
 - JWT_KEY=your_jwt_secret_key


<!-- ### API Endpoints

- **POST** `/api/auth/signup` - User signup
- **POST** `/api/auth/login` - User login
- **GET** `/api/auth/user-info` - Get user information (requires token)
- **POST** `/api/auth/update-profile` - Update user profile (requires token) !-->

### Additional Information

- Ensure MongoDB is running and accessible from your development environment.
- Update any relevant configurations in the client and server as needed.

## Developed by
- Aditya Satuluri