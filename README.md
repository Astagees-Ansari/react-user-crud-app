# 🚀 React CRUD Application – User Management System

A scalable React-based CRUD (Create, Read, Update, Delete) web application for managing users.  
The application is built with modular architecture, clean structure, protected routing, and proper API integration using Axios and JSON-server.

---

## 🌐 Live Demo

🔗 Live Application: https://your-deployment-link.vercel.app  
🔗 GitHub Repository: https://github.com/your-username/react-crud-app  

---

## 📌 Features

### 🔐 Authentication (Bonus Feature)

- Simple login system
- Protected routes using `ProtectedRoute`
- LocalStorage-based session handling

**Demo Credentials:**

```
Username: admin
Password: 123
```

---

### 👥 User Management (CRUD)

- ➕ Create new user  
- 📋 View all users  
- ✏️ Update existing user  
- 🗑 Delete user  
- Real-time UI updates after API operations  

---

### ✅ Form Validation

Each field includes proper validation:

| Field       | Validation Rule |
|------------|----------------|
| First Name | Required |
| Last Name  | Required |
| Phone      | Must be 10 digits (numbers only) |
| Email      | Required |

- Inline validation messages
- Input border highlighting
- SweetAlert2 success & error feedback

---

## 🛠 Tech Stack

- React (Vite)
- React Router DOM
- Axios
- React-Bootstrap
- SweetAlert2
- JSON-server (Mock API)

---

## 📂 Project Structure

```
src/
│
├── Components/
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── LoginUser.jsx
│   └── ProtectedRoute.jsx
│
├── Main-layout/
│   └── DashboardLayout.jsx
│
├── pages/user/
│   ├── Index.jsx
│   ├── AddUsers.jsx
│   ├── EditUsers.jsx
│   ├── DeleteUsers.jsx
│   └── UserTable.jsx
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/react-crud-app.git
cd react-crud-app
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Run JSON Server (Mock API)

Make sure `db.json` exists in the root folder.

```bash
npx json-server --watch db.json --port 3000
```

---

### 4️⃣ Run React Application

```bash
npm run dev
```

Application runs at:

```
http://localhost:5173
```

---

## 🔄 Extensibility Guide (Adding New Fields)

The application is modular and structured for easy extension.

To add a new field (Example: `Date of Birth`):

### Step 1:
Add state inside:
- `AddUsers.jsx`
- `EditUsers.jsx`

```js
const [dob, setDob] = useState("");
```

### Step 2:
Add the new input field inside the modal form.

### Step 3:
Include it inside the data object:

```js
const data = {
  firstName,
  lastName,
  phone,
  email,
  dob
};
```

### Step 4:
Update `UserTable.jsx` if you want to display it.

Since logic is component-based and isolated, new fields can be added without restructuring the entire application.

---

## 🧠 Design Decisions

- Modal-based form handling for better UX
- Centralized API URL configuration
- Reusable table component
- Protected dashboard layout
- Parent-controlled validation state
- Clean and readable folder structure

---

## 🔮 Future Improvements

- Convert project to TypeScript
- Add dynamic form schema configuration
- Add search & filtering
- Add pagination
- Add role-based authentication
- Move API calls to separate service layer

---

## 🧪 Assumptions

- Backend follows REST standards
- User ID is auto-generated
- JSON-server used for mock testing
- Authentication is for demonstration purposes only

---

## 👨‍💻 Author

**Astagees Ansari**  
Frontend Developer  
React Developer  
