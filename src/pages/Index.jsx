import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import AddUser from "./AddUsers";
import { Table } from "react-bootstrap";
import EditUsers from "./EditUsers";
import DeleteUser from "./DeleteUsers";
// import AddUser from "./AddUser";

const Index = () => {
    const [showAddUser, setShowAddUser] = useState(false);

    const handleOpen = () => setShowAddUser(true);
    const handleClose = () => setShowAddUser(false);

    const [users, setUsers] = useState([]);


    //State For Edit
    const [showEditUser, setShowEditUser] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleOpenEdit = (user) => {
        setSelectedUser(user);     // jis row ka edit click hua
        setShowEditUser(true);     // modal open
    };

    const handleCloseEdit = () => {
        setShowEditUser(false);
        setSelectedUser(null);
    };

    const handleUpdateUser = async (updatedUser) => {
        console.log("Updated:", updatedUser);

        try {
            await fetch(`http://localhost:3000/users/${updatedUser.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedUser)
            });

            fetchUsers();
        } catch (err) {
            console.log(err);
        }
    };


    //State For Delete
    const [showDeleteUser, setShowDeleteUser] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    const handleOpenDelete = (user) => {
        setUserToDelete(user);
        setShowDeleteUser(true);
    };

    const handleCloseDelete = () => {
        setShowDeleteUser(false);
        setUserToDelete(null);
    };

    const handleDeleteUser = async (id) => {
        try {
            await fetch(`http://localhost:3000/users/${id}`, {
                method: "DELETE"
            });

            fetchUsers();
        } catch (error) {
            console.log("Delete error:", error);
        }
    };






    // const handleSaveUser = (data) => {
    //     console.log("User Data:", data);
    // };

    const handleSaveUser = async (data) => {
        await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        fetchUsers();
    };


    const fetchUsers = async () => {
        const res = await fetch("http://localhost:3000/users");
        const data = await res.json();
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers()
    }, []);

    return (
        <div className="container mt-4">

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center pb-3 mb-4 border-bottom">
                <h4 className="m-0 fw-bold">User Management System</h4>

                <Button onClick={handleOpen}>
                    Add User
                </Button>
            </div>

            {/* Modal Component */}
            <AddUser
                show={showAddUser}
                handleClose={handleClose}
                onSave={handleSaveUser}
            />

            <EditUsers
                show={showEditUser}
                handleClose={handleCloseEdit}
                selectedUser={selectedUser}
                onUpdate={handleUpdateUser}
            />

            <DeleteUser
                show={showDeleteUser}
                handleClose={handleCloseDelete}
                selectedUser={userToDelete}
                onDelete={handleDeleteUser}
            />



            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Button
                                        variant="warning"
                                        size="sm"
                                        className="me-2"
                                        onClick={() => handleOpenEdit(user)}
                                    >
                                        Edit
                                    </Button>


                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleOpenDelete(user)}
                                    >
                                        Delete
                                    </Button>
                                </td>

                            </tr>

                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">
                                No users found
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

        </div>


    );
};

export default Index;
