import { useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import "../../App.css";

function AddUser({ show, handleClose, onSave, validation, setValidation }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim() || phone.length !== 10 || !email.trim()) {
      setValidation({
        firstName: !firstName.trim(),
        lastName: !lastName.trim(),
        phone: phone.length !== 10,
        email: !email.trim(),
      });
      return;
    }

    const data = {
      firstName,
      lastName,
      phone: Number(phone),
      email,
    };

    try {
      await onSave(data);
      Swal.fire({
        icon: "success",
        title: "User Added Successfully!",
        confirmButtonText: "OK",
        confirmButtonColor: "#0d6efd",
      });
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      handleClose();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to Add User",
      });
    }
  };


  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add User</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Row>
            <Col md={6} className="mb-3">
            <Form.Group>
             <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={validation?.firstName ? "validation-border" : ""}
              />
              {validation?.firstName && (
                <div className="form-control-validation-text">
                  First name is required
                </div>
              )}
            </Form.Group>
            </Col>
             <Col md={6} className="mb-3">
            <Form.Group>
  <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={validation?.lastName ? "validation-border" : ""}
              />
              {validation?.lastName && (
                <div className="form-control-validation-text">
                  Last name is required
                </div>
              )}
            </Form.Group>
            </Col>
             <Col md={6} className="mb-3">
            <Form.Group>
         <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                value={phone}
                maxLength={10}
                onChange={(e) =>
                  setPhone(
                    e.target.value
                      .replace(/[^0-9]/g, "")
                  )
                }
                className={validation?.phone ? "validation-border" : ""}
              />
              {validation?.phone && (
                <div className="form-control-validation-text">
                  Phone must be 10 digits
                </div>
              )}
            </Form.Group>
            </Col>
             <Col md={6} className="mb-3">
            <Form.Group>
 <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={validation?.email ? "validation-border" : ""}
              />
              {validation?.email && (
                <div className="form-control-validation-text">
                  Email is required
                </div>
              )}
            </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default AddUser;
