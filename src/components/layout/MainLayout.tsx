import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="pt-10 bg-[#f0f0f0]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
