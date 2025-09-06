# Express TypeScript Server with PostgreSQL, Sequelize, and JWT

A robust Express.js server built with TypeScript, featuring PostgreSQL database integration using Sequelize ORM, JWT authentication, and comprehensive middleware setup.

## 🚀 Features

- **Express 5.1.0** - Latest version with modern features
- **TypeScript** - Full type safety and modern JavaScript features
- **PostgreSQL** - Robust relational database
- **Sequelize ORM** - Feature-rich ORM with TypeScript support
- **JWT Authentication** - Secure token-based authentication
- **Input Validation** - Request validation using express-validator
- **Error Handling** - Centralized error handling middleware
- **Security** - Helmet, CORS, and other security middleware
- **Logging** - Morgan HTTP request logging
- **Environment Configuration** - Flexible environment variable management

## 📁 Project Structure

```
src/
├── config/
│   └── database.ts          # Database configuration and connection
├── controllers/
│   └── authController.ts     # Authentication logic
├── middleware/
│   ├── auth.ts              # JWT authentication middleware
│   ├── errorHandler.ts      # Error handling middleware
│   └── validation.ts        # Request validation middleware
├── models/
│   ├── User.ts              # User model with Sequelize
│   └── index.ts             # Model exports and associations
├── routes/
│   ├── auth.ts              # Authentication routes
│   └── index.ts             # Main routes configuration
├── types/
│   └── index.ts             # TypeScript interfaces and types
├── app.ts                   # Express application configuration
└── server.ts                # Server entry point
```

## 🛠️ Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn package manager

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd primeng-angular-express-postgres
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp env.example .env
   
   # Edit .env with your database credentials
   nano .env
   ```

4. **Configure your .env file**
   ```env
   # Server Configuration
   PORT=3000
   NODE_ENV=development
   
   # Database Configuration
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=express_auth_db
   DB_USER=postgres
   DB_PASSWORD=your_password
   
   # JWT Configuration
   JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random
   JWT_EXPIRES_IN=24h
   
   # CORS Configuration
   CORS_ORIGIN=http://localhost:4200
   ```

5. **Set up PostgreSQL database**
   ```sql
   CREATE DATABASE express_auth_db;
   CREATE USER your_username WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE express_auth_db TO your_username;
   ```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## 📚 API Endpoints

### Authentication Routes

#### POST `/api/v1/auth/signup`
Create a new user account
```json
{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

#### POST `/api/v1/auth/login`
Authenticate user and get JWT token
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### GET `/api/v1/auth/profile`
Get user profile (requires JWT token)
```
Authorization: Bearer <your-jwt-token>
```

### Health Check
#### GET `/health`
Server health status

## 🔐 JWT Authentication

The server uses JWT tokens for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## 🛡️ Security Features

- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing configuration
- **Input Validation** - Request data validation
- **Password Hashing** - Bcrypt password encryption
- **JWT** - Secure token-based authentication

## 🗄️ Database

The application uses PostgreSQL with Sequelize ORM. The User model includes:

- Email (unique, validated)
- Password (hashed with bcrypt)
- First Name
- Last Name
- Timestamps (createdAt, updatedAt)

## 📝 Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm test` - Run tests

## 🔧 Configuration

### TypeScript Configuration
The `tsconfig.json` is configured for:
- ES2020 target
- CommonJS modules
- Strict type checking
- Source maps for debugging
- Decorator support for Sequelize

### Database Configuration
Database connection is configured in `src/config/database.ts` with:
- Connection pooling
- Environment-based logging
- Automatic model synchronization in development

## 🚨 Error Handling

The application includes comprehensive error handling:
- Centralized error middleware
- Custom error classes
- Development vs production error responses
- Request logging for debugging

## 📊 Logging

- **Morgan** - HTTP request logging
- **Custom logging** - Request details and timestamps
- **Error logging** - Detailed error information in development

## 🔄 Development Workflow

1. Make changes to TypeScript files
2. Server automatically restarts (development mode)
3. TypeScript compilation errors are shown in console
4. Database models are automatically synchronized

## 🚀 Deployment

1. Set `NODE_ENV=production` in your environment
2. Run `npm run build` to compile TypeScript
3. Start with `npm start`
4. Ensure PostgreSQL is accessible from your deployment environment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For support and questions, please open an issue in the repository.
