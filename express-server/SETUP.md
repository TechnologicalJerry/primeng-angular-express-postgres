# 🚀 Express TypeScript Server Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Create a `.env` file in the root directory with the following content:

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

### 3. Set Up PostgreSQL Database
```sql
-- Connect to PostgreSQL
psql -U postgres

-- Create database
CREATE DATABASE express_auth_db;

-- Create user (optional)
CREATE USER your_username WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE express_auth_db TO your_username;

-- Exit psql
\q
```

### 4. Build the Project
```bash
npm run build
```

### 5. Start the Server
```bash
# Development mode (with hot reload)
npm run dev

# Production mode
npm start
```

## 🧪 Testing the Server

### Health Check
```bash
curl http://localhost:3000/health
```

### Test Authentication Endpoints

#### Signup
```bash
curl -X POST http://localhost:3000/api/v1/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "firstName": "John",
    "lastName": "Doe"
  }'
```

#### Login
```bash
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

#### Get Profile (requires JWT token)
```bash
curl -X GET http://localhost:3000/api/v1/auth/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

## 🔧 Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Ensure PostgreSQL is running
   - Check database credentials in `.env`
   - Verify database exists

2. **Port Already in Use**
   - Change PORT in `.env` file
   - Kill process using the port: `npx kill-port 3000`

3. **TypeScript Compilation Errors**
   - Run `npm run build` to see detailed errors
   - Check type definitions in `src/types/`

4. **JWT Errors**
   - Ensure JWT_SECRET is set in `.env`
   - Check token format in Authorization header

### Development Tips

- Use `npm run dev` for development with auto-restart
- Check console logs for detailed error information
- Database models auto-sync in development mode
- Use Postman or similar tool for API testing

## 📁 File Structure Overview

```
src/
├── config/database.ts      # Database connection
├── controllers/            # Business logic
├── middleware/             # Request processing
├── models/                 # Database models
├── routes/                 # API endpoints
├── types/                  # TypeScript interfaces
├── app.ts                  # Express app setup
└── server.ts              # Server entry point
```

## 🚀 Next Steps

1. **Add More Models** - Extend the database schema
2. **Implement Role-Based Access** - Add user roles and permissions
3. **Add File Upload** - Implement file handling middleware
4. **Add Testing** - Set up Jest or Mocha test suite
5. **Add Documentation** - Use Swagger/OpenAPI for API docs
6. **Add Logging** - Implement structured logging with Winston
7. **Add Caching** - Implement Redis for session/cache management
