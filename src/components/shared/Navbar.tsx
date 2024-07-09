import { NavLink } from "react-router-dom";
import Container from "./Container";
import assets from "@/assets";
import DropDownNavbar from "./DropDownNavbar";

const Navbar = () => {
  return (
    <Container>
      <header className="flex items-center justify-between bg-[#fdfeff] py-2">
        <div className="flex items-center justify-center gap-10">
          <img className="size-12" src={assets.logo} alt="" />
          <div className="block sm:hidden">
            <DropDownNavbar />
          </div>
        </div>
        <div className="sm:flex items-center gap-4 hidden sm:block]">
          <NavLink
            className="text-accentBlack transition-colors duration-75 font-medium  text-sm"
            to="/"
          >
            Home
          </NavLink>{" "}
          <NavLink
            className="text-accentBlack transition-colors duration-75 font-medium  text-sm"
            to="/products"
          >
            Products
          </NavLink>
          <NavLink
            className="text-accentBlack transition-colors duration-75 font-medium  text-sm"
            to="/about-us"
          >
            About Us
          </NavLink>
          <NavLink
            className="text-accentBlack transition-colors duration-75 font-medium  text-sm"
            to="contact-us"
          >
            Contact Us
          </NavLink>
          <NavLink
            className="text-accentBlack transition-colors duration-75 font-medium text-sm"
            to="product-management-dashboard"
          >
            Product Management/Dashboard
          </NavLink>
        </div>

        <div className="relative">
          <img className="size-10" src={assets.cart} alt="" />
          <span className="badge">5</span>
        </div>
      </header>
    </Container>
  );
};

export default Navbar;
