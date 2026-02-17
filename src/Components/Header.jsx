import { Dropdown } from "react-bootstrap";
import { Bell, List, Gear, Person } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ toggleSidebar }) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <header className="dashboard-header">
      <div className="header-wrapper">

        {/* Left Section */}
        <div className="left-section">
          <List
            size={22}
            className="menu-icon"
            onClick={toggleSidebar}
          />
          <h5 className="app-title">
            User Management System
          </h5>
        </div>

        {/* Right Section */}
        <div className="right-section">

          {/* Settings Icon */}
          <div className="header-pill">
            <Gear size={16} />
            <span>Settings</span>
          </div>

          {/* Bell Icon */}
          <div className="icon-circle">
            <Bell size={16} />
          </div>

          {/* Profile Dropdown */}
          <Dropdown align="end">
            <Dropdown.Toggle
              variant="light"
              size="sm"
              className="profile-toggle"
            >
              <Person size={16} className="me-2" />
              Astagees
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Header>
                <strong>Astagees</strong><br />
                <small>astagees@example.com</small>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>
      </div>
    </header>
  );
};

export default Header;
