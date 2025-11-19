# Backend Setup Instructions

## 🚀 Quick Start Guide

Follow these steps to run your Express.js + SQLite backend locally:

### Step 1: Download Your Project
Download/export your Lovable project to your local machine.

### Step 2: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 3: Install Root Dependencies (if needed)
```bash
cd ..
npm install concurrently --save-dev
```

### Step 4: Update Root package.json Scripts
Add these scripts to your **root** `package.json`:

```json
{
  "scripts": {
    "dev": "concurrently \"npm run dev:frontend\" \"npm run dev:backend\"",
    "dev:frontend": "vite",
    "dev:backend": "cd backend && npm start",
    "build": "tsc -b && vite build"
  }
}
```

### Step 5: Start Everything
From the **root directory**, run:
```bash
npm run dev
```

This will start:
- ✅ Frontend on `http://localhost:8080`
- ✅ Backend on `http://localhost:5000`

---

## 📁 Project Structure

```
your-project/
├── backend/
│   ├── server.js          # Express server
│   ├── database.js        # SQLite initialization
│   ├── routes/
│   │   └── api.js         # API endpoints
│   └── package.json       # Backend dependencies
├── data/
│   └── database.db        # SQLite database (auto-created)
├── src/                   # Your React frontend
├── .env                   # Environment variables
└── package.json           # Root dependencies
```

---

## 🧪 Testing the Backend

### Test Backend Connection
```bash
curl http://localhost:5000/api/test
```

Expected response:
```json
{
  "status": "success",
  "message": "Backend API is working!"
}
```

### Test Database
```bash
# Get all users
curl http://localhost:5000/api/users

# Add a user
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","phone":"1234567890"}'
```

---

## 📊 Available API Endpoints

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create user
- `DELETE /api/users/:id` - Delete user

### Messages (Contact Form)
- `GET /api/messages` - Get all messages
- `POST /api/messages` - Create message

### Certificates
- `GET /api/certificates` - Get all certificates
- `GET /api/certificates/:certificateId` - Verify certificate
- `POST /api/certificates` - Create certificate
- `DELETE /api/certificates/:id` - Delete certificate

### Internships
- `GET /api/internships` - Get all internships
- `POST /api/internships` - Create internship
- `PUT /api/internships/:id` - Update internship
- `DELETE /api/internships/:id` - Delete internship

### Settings
- `GET /api/settings` - Get all settings
- `POST /api/settings` - Update setting

---

## 🔒 Data Persistence

✅ **All data persists in `data/database.db`**
✅ **Survives server restarts**
✅ **No data loss on refresh**
✅ **File-based SQLite database**

---

## 🛠️ Troubleshooting

### Backend not starting?
```bash
cd backend
npm install
node server.js
```

### Database not persisting?
Check that the `data/` folder exists and has write permissions.

### Frontend can't reach backend?
Make sure both servers are running and the proxy in `vite.config.ts` is configured correctly.

---

## 📝 Next Steps

1. Connect your frontend components to the backend APIs
2. Replace localStorage calls with API calls
3. Add authentication if needed
4. Customize database schema in `backend/database.js`

---

## 💡 Tips

- Database location: `data/database.db`
- Backend runs on port 5000
- Frontend runs on port 8080
- All API calls start with `/api/`
- Use `fetch('/api/users')` in your frontend
