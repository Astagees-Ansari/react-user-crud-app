// import { Table } from "react-bootstrap";

// const UsersTable = ({ users = [], onEdit, onDelete }) => {

//   const getAvatar = (firstName) => {
//     return `https://ui-avatars.com/api/?name=${firstName}&background=0D6EFD&color=fff`;
//   };

//   return (
//     <div className="card shadow-sm border-0 rounded-4">
//       <div className="card-body p-0">

//         <Table hover responsive className="align-middle mb-0">

//           <thead className="bg-light">
//             <tr className="text-muted small text-uppercase">
//               <th className="ps-4">User</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th className="text-end pe-4">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {users.length === 0 ? (
//               <tr>
//                 <td colSpan="4" className="text-center py-4 text-muted">
//                   No users found
//                 </td>
//               </tr>
//             ) : (
//               users.map((user) => (
//                 <tr key={user.id} className="border-top">

//                   {/* Avatar + Name */}
//                   <td className="ps-4">
//                     <div className="d-flex align-items-center gap-3">

//                       <img
//                         src={getAvatar(user.firstName)}
//                         alt="avatar"
//                         width="40"
//                         height="40"
//                         className="rounded-circle shadow-sm"
//                       />

//                       <div>
//                         <div className="fw-semibold">
//                           {user.firstName} {user.lastName}
//                         </div>
//                         <small className="text-muted">
//                           ID: {user.id}
//                         </small>
//                       </div>

//                     </div>
//                   </td>

//                   <td className="text-muted">
//                     {user.email}
//                   </td>

//                   <td className="text-muted">
//                     {user.phone}
//                   </td>

//                   <td className="text-end pe-4">
//                     <button
//                       className="btn btn-sm btn-light border me-2 shadow-sm"
//                       onClick={() => onEdit?.(user)}
//                     >
//                       ✏ Edit
//                     </button>

//                     <button
//                       className="btn btn-sm btn-light border text-danger shadow-sm"
//                       onClick={() => onDelete?.(user)}
//                     >
//                       🗑 Delete
//                     </button>
//                   </td>

//                 </tr>
//               ))
//             )}
//           </tbody>

//         </Table>

//       </div>
//     </div>
//   );
// };

// export default UsersTable;


import { Table } from "react-bootstrap";
import { PencilSquare, Trash } from "react-bootstrap-icons";


const UsersTable = ({ users = [], onEdit, onDelete }) => {

  const getAvatar = (firstName = "") => {
    return `https://ui-avatars.com/api/?name=${firstName}&background=0D6EFD&color=fff`;
  };

  return (
    <div className="card shadow-sm border-0 rounded-3">
      <div className="card-body p-0">

        <Table hover responsive className="mb-0 align-middle">

          <thead className="table-light">
            <tr className="text-uppercase small text-muted">
              <th className="ps-4">User</th>
              <th>Email</th>
              <th>Phone</th>
              <th className="text-end pe-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4 text-muted">
                  No users found
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id}>

                  {/* User Info */}
                  <td className="ps-4">
                    <div className="d-flex align-items-center gap-3">

                      <img
                        src={getAvatar(user.firstName)}
                        alt="avatar"
                        width="38"
                        height="38"
                        className="rounded-circle"
                      />

                      <div>
                        <div className="fw-semibold">
                          {user.firstName} {user.lastName}
                        </div>
                        <small className="text-muted">
                          ID: {user.id}
                        </small>
                      </div>

                    </div>
                  </td>

                  {/* Email */}
                  <td className="text-muted">
                    {user.email}
                  </td>

                  {/* Phone */}
                  <td className="text-muted">
                    {user.phone}
                  </td>

                  {/* Actions */}
                  <td className="text-end pe-4">
                    <button
                      className="btn btn-sm btn-outline-primary rounded-pill px-3 me-2 d-inline-flex align-items-center gap-1"
                      onClick={() => onEdit(user)}
                    >
                      <PencilSquare size={14} />
                      Edit
                    </button>

                    <button
                      className="btn btn-sm btn-outline-danger rounded-pill px-3 d-inline-flex align-items-center gap-1"
                      onClick={() => onDelete(user)}
                    >
                      <Trash size={14} />
                      Delete
                    </button>
                  </td>



                </tr>
              ))
            )}
          </tbody>

        </Table>

      </div>
    </div>
  );
};

export default UsersTable;
