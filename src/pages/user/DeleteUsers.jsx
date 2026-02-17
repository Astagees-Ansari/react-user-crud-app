// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Swal from "sweetalert2";

// function DeleteUser({ show, handleClose, selectedUser, onDelete }) {

//   const [loading, setLoading] = useState(false);

//   const handleConfirmDelete = async () => {
//     if (!selectedUser) return;

//     try {
//       setLoading(true);

//       await onDelete(selectedUser.id);

//       const result = await Swal.fire({
//         icon: "success",
//         title: "Deleted Successfully!",
//         text: "User has been removed from the system.",
//         confirmButtonText: "OK",
//         confirmButtonColor: "#dc3545"
//       });

//       if (result.isConfirmed) {
//         handleClose();
//       }

//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Delete Failed",
//         text: "Something went wrong."
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Modal show={show} onHide={handleClose} centered>
//       <Modal.Header closeButton className="border-0 pb-0">
//         <Modal.Title className="fw-bold text-danger">
//           Delete User
//         </Modal.Title>
//       </Modal.Header>

//       <Modal.Body className="pt-3">
//         {selectedUser && (
//           <div className="text-center">
//             <div className="mb-3 fs-5">
//               Are you sure you want to delete
//             </div>

//             <div className="fw-bold text-dark fs-5">
//               {selectedUser.firstName} {selectedUser.lastName} ?
//             </div>

//             <div className="text-muted mt-2">
//               This action cannot be undone.
//             </div>
//           </div>
//         )}
//       </Modal.Body>

//       <Modal.Footer className="border-0 d-flex justify-content-center gap-3">

//         <Button
//           variant="outline-secondary"
//           onClick={handleClose}
//           className="px-4"
//         >
//           Cancel
//         </Button>

//         <Button
//           variant="danger"
//           onClick={handleConfirmDelete}
//           disabled={loading}
//           className="px-4 shadow-sm"
//         >
//           {loading ? "Deleting..." : "Yes, Delete"}
//         </Button>

//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default DeleteUser;


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
