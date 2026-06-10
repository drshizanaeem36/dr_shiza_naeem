# Contact Form Backend

Express + MongoDB backend for the React contact form.

## 📁 Project Structure

```
backend/
├── config/
│   └── db.js                  # MongoDB connection
├── controllers/
│   └── contactController.js   # Business logic (CRUD)
├── middleware/
│   ├── errorHandler.js        # Global error handler
│   └── validateContact.js     # Input validation rules
├── models/
│   └── Contact.js             # Mongoose schema
├── routes/
│   └── contactRoutes.js       # API route definitions
├── utils/
│   └── asyncHandler.js        # Async error wrapper
├── .env.example               # Environment variable template
├── .gitignore
├── package.json
├── server.js                  # App entry point
└── Form.jsx                   # Updated React form (copy to your frontend)
```

## 🚀 Setup

### 1. Install dependencies
```bash
cd backend
npm install
```

### 2. Configure environment
```bash
cp .env.example .env
# Edit .env with your MongoDB URI and settings
```

### 3. Run the server
```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

### 4. Update your React app
- Copy `Form.jsx` to your frontend and replace the existing `Form.jsx`
- Add to your frontend `.env`:
  ```
  REACT_APP_API_URL=http://localhost:5000
  ```

## 📡 API Endpoints

| Method | Endpoint                    | Description          |
|--------|-----------------------------|----------------------|
| POST   | `/api/contact`              | Submit contact form  |
| GET    | `/api/contact`              | Get all submissions  |
| GET    | `/api/contact/:id`          | Get one by ID        |
| PATCH  | `/api/contact/:id/status`   | Update status        |
| DELETE | `/api/contact/:id`          | Delete a contact     |
| GET    | `/api/health`               | Health check         |

## 📬 Example Request

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "phone": "+1 555 000 0000",
    "email": "john@example.com",
    "message": "I would like to book a consultation."
  }'
```

## ✅ Contact Schema

| Field     | Type   | Required | Notes                        |
|-----------|--------|----------|------------------------------|
| name      | String | ✅       | Max 100 chars                |
| phone     | String | ❌       | Optional, validated format   |
| email     | String | ✅       | Lowercased, validated        |
| message   | String | ✅       | Max 2000 chars               |
| status    | String | —        | `new` / `read` / `replied`   |
| createdAt | Date   | —        | Auto (timestamps)            |
| updatedAt | Date   | —        | Auto (timestamps)            |