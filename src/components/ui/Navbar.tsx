import { NavLink } from "react-router-dom";
import Container from "../shared/Container";
import assets from "@/assets";

const Navbar = () => {
  return (
    <Container>
      <header className="flex items-center justify-between bg-[#fdfeff]">
        <div className="flex items-center gap-4">
          <img className="size-12" src={assets.logo} alt="" />
          <NavLink
            className="text-[#484848] hover:text-[#5f5f5f] transition-colors duration-75 font-semibold text-lg"
            to="/"
          >
            Home
          </NavLink>{" "}
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="contact-us">Contact Us</NavLink>
          <NavLink to="product-management-dashboard">
            Product Management/Dashboard
          </NavLink>
        </div>

        <div>
          <img className="size-10" src={assets.cart} alt="" />
        </div>
      </header>
    </Container>
  );
};

export default Navbar;
