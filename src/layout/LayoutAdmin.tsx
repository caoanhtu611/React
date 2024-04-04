import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const LayoutAdmin = () => {
  return (
    <div className="bg-gray-100" style={{ gap: "50px" }}>
      <Sidebar />
      <div
        style={{
          padding: "30px 30px 30px 10px",
          position: "absolute",
          top: 0,
          left: 400,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutAdmin;
