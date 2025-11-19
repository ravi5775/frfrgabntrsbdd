# Embedded MongoDB Backend Setup

## 🚀 Zero-Cost, Zero-Setup Database

This backend uses **embedded MongoDB** with disk persistence. No external MongoDB installation or cloud connection required!

---

## ✨ Features

- ✅ **Zero external dependencies** - MongoDB runs embedded in your app
- ✅ **Persistent storage** - Data saved in `.mongodb` folder
- ✅ **JWT Authentication** - Secure user login/register
- ✅ **Auto-creates Admin user** on first run
- ✅ **MVC Architecture** - Clean, scalable code structure

---

## 📦 Quick Start

### Step 1: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 2: Configure Environment (Optional)
Edit `.env` in the root directory to change admin credentials:
```env
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin123
JWT_SECRET=your-secret-key
```

### Step 3: Start Backend
```bash
cd backend
npm start
```

**That's it!** The server will:
- Download MongoDB binaries (first run only, ~70MB)
- Create `.mongodb` folder for data persistence
- Auto-create admin user
- Start on `http://localhost:5000`

---

## 🧪 Testing the Backend

### Health Check
```bash
curl http://localhost:5000
```

### Register New User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "phone": "1234567890"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "admin123"
  }'
```

### Get Current User (Protected Route)
```bash
curl http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## 📊 Available API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
- `PUT /api/auth/profile` - Update profile (protected)

---

## 📁 Project Structure

```
backend/
├── .mongodb/              # Persistent database storage (auto-created)
├── src/
│   ├── config/
│   │   └── database.js    # Embedded MongoDB setup
│   ├── controllers/
│   │   └── authController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authRoutes.js
│   └── index.js           # Server entry point
├── package.json
└── .gitignore
```

---

## 🔒 Security Features

- **Password Hashing** - bcrypt with salt rounds
- **JWT Tokens** - 30-day expiration
- **Protected Routes** - Middleware authentication
- **Role-Based Access** - User/Admin roles
- **Input Validation** - Schema-level validation

---

## 💾 Data Persistence

- **Location**: `backend/.mongodb/`
- **Survives restarts**: ✅ Yes
- **Format**: WiredTiger storage engine
- **Backup**: Just copy the `.mongodb` folder

---

## 🛠️ Troubleshooting

### MongoDB binaries not downloading?
```bash
cd backend
npm install mongodb-memory-server --force
```

### Port 5000 already in use?
Change `PORT=5000` to another port in `.env`

### Data not persisting?
Check that `backend/.mongodb/` folder exists and has write permissions

---

## 🚀 Running Frontend + Backend Together

From the **root directory**:

```bash
# Install concurrently (if not installed)
npm install concurrently --save-dev

# Add to root package.json scripts:
"scripts": {
  "dev": "concurrently \"npm run dev:frontend\" \"npm run dev:backend\"",
  "dev:frontend": "vite",
  "dev:backend": "cd backend && npm start"
}

# Run both:
npm run dev
```

This starts:
- Frontend on `http://localhost:8080`
- Backend on `http://localhost:5000`

---

## 📝 Next Steps

1. **Connect frontend to backend** - Replace localStorage with API calls
2. **Add more models** - Certificates, Internships, Messages, etc.
3. **Create more routes** - Build out your API endpoints
4. **Customize auth** - Add password reset, email verification, etc.

---

## 💡 Why Embedded MongoDB?

- **Zero setup cost** - No MongoDB Atlas or hosting fees
- **Perfect for MVPs** - Get started instantly
- **Full MongoDB features** - Queries, indexes, aggregations
- **Easy migration** - Switch to cloud MongoDB anytime by changing connection string

---

## 📖 Default Admin Login

After first run, login with:
- **Email**: `admin@example.com`
- **Password**: `admin123`

**⚠️ Change these in production!**
