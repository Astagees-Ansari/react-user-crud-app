# React CRUD User Management Application

This is a simple React-based CRUD (Create, Read, Update, Delete) web application built using React.  
It manages user data through a mock API powered by JSON-server.

The application is designed with modular structure and future extensibility in mind.

---

## Features

- Create a new user
- View all users
- Update existing user information
- Delete a user
- Required field validation
- Clean and modular component structure
- Loading states for better user experience

---

## Tech Stack

- React (JavaScript)
- React Bootstrap
- JSON-server (Mock API)
- Fetch API with Async/Await

---

## Setup Instructions

### Clone the Repository

```bash
git clone <your-repository-link>
cd <project-folder>
```

---

### Install Dependencies

```bash
npm install
```

---

### Start JSON Server (Mock API)

```bash
npx json-server --watch db.json --port 3000
```

Make sure your `db.json` file contains:

```json
{
  "users": []
}
```

JSON Server will run at:

```
http://localhost:3000/users
```

---

### Start React Application

```bash
npm start
```

React App will run at:

```
http://localhost:5173
```

---

## How to Add a New Field (Extensibility)

The form is built using controlled components with a centralized `formData` state.

To add a new field (for example: Date of Birth):

1. Add the new property inside the `formData` state in both AddUser and EditUsers components.
2. Add the corresponding `<Form.Group>` input field in the UI.
3. Ensure the `db.json` structure supports the new field.

No changes are required in the core CRUD logic (Create, Update, Delete functions).

---

## Architecture & Design Decisions

- Separate components for Add, Edit, and Delete operations
- Centralized data fetching in the parent component
- Async/Await used for API handling
- Loading indicators for better UX
- Controlled form inputs for predictable state management
- Modular and maintainable folder structure

---

## Deployment

Live Application Link:  
<Add your deployed link here>

---

## Source Code

GitHub Repository Link:  
<Add your GitHub repository link here>

---

## Assumptions

- JSON-server is used as a mock backend API.
- API endpoint is running on port 3000.
- The project is built using JavaScript (not TypeScript).
