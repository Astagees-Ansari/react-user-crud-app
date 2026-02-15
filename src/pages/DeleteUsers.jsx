import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteUser({ show, handleClose, selectedUser, onDelete }) {

  const [loading, setLoading] = useState(false);

  const handleConfirmDelete = async () => {
    if (!selectedUser) return;

    try {
      setLoading(true);

      await onDelete(selectedUser.id);

      handleClose();
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete User</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {selectedUser && (
          <p>
            Are you sure you want to delete{" "}
            <strong>
              {selectedUser.firstName} {selectedUser.lastName}
            </strong>
            ?
          </p>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>

        <Button
          variant="danger"
          onClick={handleConfirmDelete}
          disabled={loading}
        >
          {loading ? "Deleting..." : "Delete"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteUser;
