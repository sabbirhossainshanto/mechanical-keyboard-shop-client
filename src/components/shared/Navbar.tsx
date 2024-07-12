import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from "./Container";
import assets from "@/assets";
import DropDownNavbar from "./DropDownNavbar";
import { useGetAllBookmarkQuery } from "@/redux/features/cart/cartApi";

const Navbar = () => {
  const { data } = useGetAllBookmarkQuery(undefined);
  const navigate = useNavigate();

  return (
    <div className="bg-[#0a152f]">
      <Container>
        <header className="flex items-center justify-between  py-4">
          <div className="flex items-center justify-center gap-10">
            <Link to="/">
              <img
                className="size-12"
                style={{ filter: "brightness(1) invert(1)" }}
                src={assets.logo}
                alt=""
              />
            </Link>

            <div className="block sm:hidden">
              <DropDownNavbar />
            </div>
          </div>
          <div className="sm:flex items-center gap-4 hidden sm:block]">
            <NavLink
              className={({ isActive }) =>
                `text-white transition-colors duration-75 font-medium  text-lg ${
                  isActive ? "font-semibold" : ``
                }`
              }
              to="/"
            >
              Home
            </NavLink>{" "}
            <NavLink
              className={({ isActive }) =>
                `text-white transition-colors duration-75 font-medium  text-lg ${
                  isActive ? "font-semibold" : ``
                }`
              }
              to="/products"
            >
              Products
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-white transition-colors duration-75 font-medium  text-lg ${
                  isActive ? "font-semibold" : ``
                }`
              }
              to="/about-us"
            >
              About Us
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-white transition-colors duration-75 font-medium  text-lg ${
                  isActive ? "font-semibold" : ``
                }`
              }
              to="contact-us"
            >
              Contact Us
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-white transition-colors duration-75 font-medium  text-lg ${
                  isActive ? "font-semibold" : ``
                }`
              }
              to="product-management-dashboard"
            >
              Product Management/Dashboard
            </NavLink>
          </div>

          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <img className="size-10" src={assets.cart} alt="" />
            <span className="badge">{data?.data?.length}</span>
          </div>
        </header>
      </Container>
    </div>
  );
};

export default Navbar;
