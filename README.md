# Smart Hospital Appointment & Queue Management System

## Overview
This project is a backend-based hospital management system designed to handle appointment booking and queue management efficiently. It provides secure, role-based access for Admin, Doctor, and Patient users through RESTful APIs. The system focuses on automating appointment scheduling, generating queue numbers, and enabling doctors to manage their daily patient flow.

---

## Technology Stack
- Node.js  
- Express.js  
- MongoDB (Atlas)  
- JSON Web Token (JWT) Authentication  
- Postman (API Testing)  

---

## Features
- User Authentication (Admin, Doctor, Patient)
- JWT-based secure login system
- Role-Based Access Control (RBAC)
- Doctor profile creation and management
- Appointment booking with automatic queue number generation
- Doctor queue retrieval and management
- Protected API endpoints
- Structured JSON responses with proper HTTP status codes

---

## System Architecture
The system follows a layered backend architecture:

- Client Layer: Patient, Doctor, Admin, Postman
- API Layer: Express.js routes and controllers
- Authentication Layer: JWT verification and role-based middleware
- Business Logic Layer: Appointment, queue, and doctor management
- Database Layer: MongoDB collections for users, doctors, and appointments

---

## API Endpoints

### Authentication
- POST /api/auth/register  
- POST /api/auth/login  

### Doctor Management
- POST /api/doctors (Admin only)  
- GET /api/doctors  

### Appointment Management
- POST /api/appointments (Patient only)  
- GET /api/appointments/doctor/queue (Doctor only)  
- PUT /api/appointments/:id/complete (Doctor only)  

---

## Installation and Setup

1. Clone the repository:

git clone https://github.com/your-username/smart-hospital-backend.git

2. Navigate to the project folder:

cd smart-hospital-backend

3. Install dependencies:

npm install

4. Create a `.env` file and add:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

5. Start the server:

npm run dev

---

## Testing
API testing was performed using Postman. The following functionalities were tested:
- User login and token generation
- Doctor profile creation
- Appointment booking and queue assignment
- Doctor queue retrieval
- Authorization and access control

---

## Security
- JWT-based authentication for all protected routes
- Role-based authorization middleware
- Secure handling of environment variables
- Proper HTTP status codes for error handling

---

## Future Enhancements
- Frontend integration using React or Angular
- SMS and email notifications
- Online payment integration
- Appointment rescheduling and cancellation
- Deployment on cloud platforms
- Advanced analytics dashboard

---

## Author
Joy Kharinta  
B.Tech Computer Science Engineering (Final Year)
