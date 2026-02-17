import { useEffect, useState } from "react";
import axios from "axios";

import AddUser from "./AddUsers";
import EditUsers from "./EditUsers";
import DeleteUser from "./DeleteUsers";
import UsersTable from "./UserTable";
import "./Index.css";

const API_URL = "http://localhost:3000/users";

const Index = () => {

    const [users, setUsers] = useState([]);

    const [showAddUser, setShowAddUser] = useState(false);
    const [showEditUser, setShowEditUser] = useState(false);
    const [showDeleteUser, setShowDeleteUser] = useState(false);

    const [selectedUser, setSelectedUser] = useState(null);
    const [userToDelete, setUserToDelete] = useState(null);

    const [validation, setValidation] = useState(null);

    const resetValidation = () => {
        setValidation(null);
    };

    // Fetch Users
    const fetchUsers = async () => {
        try {
            const { data } = await axios.get(API_URL);
            setUsers(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // Add
    const handleSaveUser = async (newUser) => {
        try {
            await axios.post(API_URL, newUser);
            fetchUsers();
        } catch (error) {
            console.error(error);
        }
    };

    // Update
    const handleUpdateUser = async (updatedUser) => {
        try {
            await axios.put(`${API_URL}/${updatedUser.id}`, updatedUser);
            fetchUsers();
        } catch (error) {
            console.error(error);
        }
    };

    // Delete
    const handleDeleteUser = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            fetchUsers();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="page-container">

            {/* Top Bar */}
            <div className="page-header">
                <h4 className="page-title">All Users</h4>

                <button
                    className="btn btn-primary add-user-btn"
                    onClick={() => {
                        setShowAddUser(true);
                        resetValidation();
                    }}
                >
                    + Add User
                </button>
            </div>

            {/* Users Table */}
            <UsersTable
                users={users}
                onEdit={(user) => {
                    setSelectedUser(user);
                    setShowEditUser(true);
                    resetValidation();
                }}
                onDelete={(user) => {
                    setUserToDelete(user);
                    setShowDeleteUser(true);
                }}
            />

            {/* Modals */}
            <AddUser
                show={showAddUser}
                handleClose={() => {
                    setShowAddUser(false);
                    resetValidation();
                }}
                onSave={handleSaveUser}
                validation={validation}
                setValidation={setValidation}
            />

            <EditUsers
                show={showEditUser}
                handleClose={() => {
                    setShowEditUser(false);
                    resetValidation();
                }}
                selectedUser={selectedUser}
                onUpdate={handleUpdateUser}
                validation={validation}
                setValidation={setValidation}
            />

            <DeleteUser
                show={showDeleteUser}
                handleClose={() => setShowDeleteUser(false)}
                selectedUser={userToDelete}
                onDelete={handleDeleteUser}
            />

        </div>
    );
};

export default Index;

