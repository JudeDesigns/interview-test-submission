# Interview Test Submission - School Management System

## 🎯 Problems Solved

This repository contains the solutions to the interview test problems for the School Management System.

### Problem 1: Fix "Add New Notice" Page ✅
**Issue**: Description field was not being saved when clicking the 'Save' button on `/app/notices/add`

**Root Cause**: Field name mismatch between form registration and schema validation
- Form was registering field as `'content'` but schema expected `'description'`
- Initial state used `content: ''` instead of `description: ''`

**Files Modified**:
- `frontend/src/domains/notice/pages/add-notice-page.tsx` (Line 19)
- `frontend/src/domains/notice/components/notice-form.tsx` (Line 89)

### Problem 2: Complete CRUD Operations in Student Management ✅
**Issue**: All controller functions in `/src/modules/students/students-controller.js` were empty

**Solution**: Implemented all 5 CRUD operations:
- `GET /api/v1/students` - Get all students with query filtering
- `POST /api/v1/students` - Add new student
- `GET /api/v1/students/:id` - Get student details by ID
- `PUT /api/v1/students/:id` - Update student information
- `POST /api/v1/students/:id/status` - Update student status

**File Modified**:
- `backend/src/modules/students/students-controller.js` (All functions implemented)

## 🚀 Application Setup

The application is now fully functional with:

### Backend (Node.js + Express + PostgreSQL)
- **Port**: 3001
- **Database**: PostgreSQL 15 on port 5433
- **Database Name**: `school_mgmt`
- **User**: `school_admin` / `school_pass_2024`

### Frontend (React + TypeScript + Vite + Material-UI)
- **Port**: 5173
- **Hot Reload**: Enabled

### Demo Credentials
- **Username**: `admin@school-admin.com`
- **Password**: `3OU4zn3q6Zh9`

## 🛠️ Setup Instructions

1. **Install Dependencies**:
   ```bash
   # Backend
   cd backend && npm install --ignore-scripts

   # Frontend
   cd frontend && npm install --ignore-scripts
   ```

2. **Database Setup**:
   ```bash
   # PostgreSQL 15 should be running on port 5433
   # Database and user are already configured
   ```

3. **Start Application**:
   ```bash
   # Terminal 1 - Backend
   cd backend && node src/server.js

   # Terminal 2 - Frontend
   cd frontend && npm run dev
   ```

4. **Access Application**:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001/api/v1

## 🔧 Technical Challenges Resolved

During setup, several technical challenges were encountered and resolved:

1. **Environment Configuration**: Fixed dotenv loading order
2. **Port Conflicts**: Resolved macOS Control Center port 5000 conflict
3. **Database Setup**: Created dedicated PostgreSQL user and database
4. **Module Loading Issues**: Fixed corrupted department service file
5. **Email Service**: Configured graceful handling of missing API keys
6. **Build Dependencies**: Bypassed sqlite3 and husky build issues

## 📁 Project Structure

```
├── backend/                 # Node.js API server
│   ├── src/
│   │   ├── modules/
│   │   │   ├── students/   # Student CRUD operations ✅
│   │   │   └── notices/    # Notice management
│   │   └── config/         # Database and environment config
├── frontend/               # React frontend
│   ├── src/
│   │   ├── domains/
│   │   │   ├── notice/     # Notice management ✅
│   │   │   └── student/    # Student management
└── seed_db/               # Database schema and seed data
```

## ✅ Verification

Both problems have been successfully resolved:
- ✅ Notice description field now saves correctly
- ✅ Student CRUD operations are fully functional
- ✅ Application runs without errors
- ✅ Database connectivity established
- ✅ All API endpoints responding correctly

---

**Submitted by**: Jude Oba
**Date**: June 17, 2025