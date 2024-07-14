# My Project

This project is a full-stack application built with React, Node.js, Express, and MongoDB. The frontend is managed using Vite, and the backend handles authentication, user profile management, and other API routes.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/your-repo.git
    cd your-repo
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

1. **Start the server:**

    ```bash
    cd server
    npm start
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

Create a `.env` file in the `server` directory and add the following variables:

MONGO_URI=your_mongodb_uri
JWT_KEY=your_jwt_secret_key


### API Endpoints

- **POST** `/api/auth/signup` - User signup
- **POST** `/api/auth/login` - User login
- **GET** `/api/auth/user-info` - Get user information (requires token)
- **POST** `/api/auth/update-profile` - Update user profile (requires token)

### Additional Information

- Ensure MongoDB is running and accessible from your development environment.
- Update any relevant configurations in the client and server as needed.

### Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

