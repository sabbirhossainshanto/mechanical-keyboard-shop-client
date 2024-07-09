import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="pt-10 bg-[#f0f0f0]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
