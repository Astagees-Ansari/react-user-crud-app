import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./main-layout/DashboardLayout";
import Index from "./pages/user/Index";
import Login from "./Components/LoginUser";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Index />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
