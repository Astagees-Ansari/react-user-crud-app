import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { House, People, BarChart, Gear } from "react-bootstrap-icons";

const Sidebar = ({ isOpen }) => {
    return (
        <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
            <ul className="sidebar-menu">
                <li>
                    <House size={20} />
                    {isOpen && <span>Dashboard</span>}
                </li>
                
                <li>
                    <NavLink to="/users" className="sidebar-link">
                        <People size={20} />
                        {isOpen && <span>Users</span>}
                    </NavLink>
                </li>

                <li>
                    <BarChart size={20} />
                    {isOpen && <span>Reports</span>}
                </li>

                <li>
                    <Gear size={20} />
                    {isOpen && <span>Settings</span>}
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
