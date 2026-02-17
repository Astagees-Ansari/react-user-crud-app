import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import Swal from "sweetalert2";

function Login() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy login check
    if (name === "admin" && password === "123") {
      localStorage.setItem("isLoggedIn", "true");

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        timer: 1000,
        showConfirmButton: false
      });

      navigate("/users");
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Credentials"
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card style={{ width: "400px" }} className="p-4 shadow">
        <h4 className="text-center mb-4">Login</h4>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
