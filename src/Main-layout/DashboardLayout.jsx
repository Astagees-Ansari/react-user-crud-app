import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import "./DashboardLayout.css";

const DashboardLayout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-wrapper">

      <Header toggleSidebar={toggleSidebar} />
      <div className="dashboard-body">
        <Sidebar isOpen={isSidebarOpen} />
        <div className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
          <Outlet />
        </div>
      </div>


    </div>
  );
};

export default DashboardLayout;
