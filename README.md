# Skillvance Technologies

## Project Info

Full-stack web application for skill development and corporate training services.

## Tech Stack

This project is built with:

- **Frontend**: React + TypeScript + Vite
- **UI Framework**: shadcn-ui + Tailwind CSS
- **Backend**: Node.js + Express + MongoDB (Embedded)
- **Authentication**: JWT-based authentication

## Development Setup

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
```

### Running the Application

#### Start Backend Server

```sh
cd backend
npm start
```

The backend will run on `http://localhost:3001`

#### Start Frontend Development Server

```sh
# In the root directory
npm run dev
```

The frontend will run on `http://localhost:8080`

## Project Structure

```
├── src/                    # Frontend source code
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   └── lib/               # Utility functions
├── backend/               # Backend source code
│   ├── src/
│   │   ├── controllers/   # API controllers
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Express middleware
│   │   └── config/        # Configuration files
│   └── .mongodb/          # Embedded MongoDB data
└── public/                # Static assets
```

## Features

- 🎓 Skill Development Programs
- 💼 Corporate Training
- 📝 Internship Management
- 📜 Certificate Verification
- 📧 Contact & Enquiry Forms
- 🔐 Secure Admin Dashboard
- 🌐 Social Media Integration

## Admin Access

- **Default Email**: admin@example.com
- **Default Password**: password123

⚠️ **Change default credentials immediately after first login!**

## Deployment

### Frontend Deployment

Build the frontend for production:

```sh
npm run build
```

Deploy the `dist` folder to your hosting service (Vercel, Netlify, etc.)

### Backend Deployment

The backend uses an embedded MongoDB instance. For production:

1. Update environment variables in `backend/.env`
2. Set `NODE_ENV=production`
3. Deploy to Node.js hosting (Railway, Render, DigitalOcean, etc.)
4. Ensure the `.mongodb` folder persists across deployments

## Environment Variables

### Frontend (`.env.local`)
```
VITE_API_URL=http://localhost:3001
```

### Backend (`backend/.env`)
```
PORT=3001
NODE_ENV=development
JWT_SECRET=[your-secure-secret]
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=password123
FRONTEND_URL=http://localhost:8080
```

## Security

See `SECURITY.md` for comprehensive security documentation and production deployment checklist.

## License

© 2025 Skillvance Technologies. All Rights Reserved.
