# 🌟 MindCareAI — Digital Mental Health & Psychological Support System
Here You Go![https://mindcareai-nkg.vercel.app/]


MindCareAI is a comprehensive full-stack platform designed to provide accessible mental health support for students in higher education. It connects students with counselors, offers AI-assisted support, and streamlines appointment management through role-based dashboards.

## 🚀 Key Features

### 👤 User Roles
- **Students**: Book appointments, view history, access AI chatbot (`/chatbot`), and manage profile.
- **Counselors**: Manage appointments, view requests, and update availability.
- **Admins**: Manage users (Students/Counselors), view system statistics, and oversee appointment flows.

### 🤖 AI-Powered Support
- Integrated **AI Chatbot** powered by Groq (Llama 3.1 70B) for 24/7 immediate support and guidance.

### 🔐 Security
- **Authentication**: JWT-based secure login.
- **Protection**: Role-based route protection.
- **Password Security**: Password hashing with bcrypt.

## 🛠️ Tech Stack

- **Frontend**: React (Vite), TailwindCSS, Lucide React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **AI Integration**: Groq API
- **Authentication**: JSON Web Tokens (JWT)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14+ recommended)
- MongoDB installed locally or a MongoDB Atlas URI

### 1. Clone the Repository
```bash
git clone <repository_url>
cd mindcareai
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following variables:
```env
PORT=8008
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GROQ_API_KEY=your_groq_api_key
```
> **Note**: Get your free Groq API key from [https://console.groq.com](https://console.groq.com).

Start the backend server:
```bash
npm run dev
# Backend runs on http://localhost:8008
```

### 3. Frontend Setup
Open a new terminal, navigate to the frontend directory, and install dependencies:
```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
# Frontend runs on http://localhost:5173
```

## 📖 Usage Guide

1. **Register/Login**:
   - Students can sign up directly.
   - Counselors sign up but require Admin approval.
   - Admins are pre-configured in the database.

2. **Booking Appointments**:
   - Students select a counselor and available slot.
   - Counselors approve or reject the request.

3. **Using the Chatbot**:
   - Navigate to the Chatbot tab for instant AI support.

## 📄 License
This project is licensed under the ISC License.
