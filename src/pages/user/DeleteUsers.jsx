import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

function DeleteUser({ show, handleClose, selectedUser, onDelete }) {

  const [loading, setLoading] = useState(false);

  const handleConfirmDelete = async () => {
    if (!selectedUser?.id) return;

    try {
      setLoading(true);

      await onDelete(selectedUser.id);

      Swal.fire({
        icon: "success",
        title: "User Deleted Successfully!",
        timer: 1000,
        showConfirmButton: false
      });

      handleClose();

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Delete Failed"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-danger">
          Delete User
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {selectedUser && (
          <div className="text-center">
            <p className="fs-5 mb-2">
              Are you sure you want to delete?
            </p>

            <strong>
              {selectedUser.firstName} {selectedUser.lastName}
            </strong>
          </div>
        )}
      </Modal.Body>

      <Modal.Footer className="d-flex justify-content-center gap-2">
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>

        <Button
          variant="danger"
          onClick={handleConfirmDelete}
          disabled={loading}
        >
          {loading ? "Deleting..." : "Yes, Delete"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteUser;
