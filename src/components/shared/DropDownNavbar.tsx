import { Keyboard, HomeIcon, Contact } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import assets from "@/assets";
import { NavLink } from "react-router-dom";

const DropDownNavbar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <img className="size-10 cursor-pointer" src={assets.menu} alt="" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <NavLink to="/">
              <HomeIcon className="mr-2 h-4 w-4" />
              <span>Home</span>
            </NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <NavLink to="/products" className="flex">
              <HomeIcon className="mr-2 h-4 w-4" />
              <span>Products</span>
            </NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <NavLink to="/about-us" className="flex">
              <HomeIcon className="mr-2 h-4 w-4" />
              <span>About Us</span>
            </NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <NavLink to="/contact-us" className="flex">
              <Contact className="mr-2 h-4 w-4" />
              <span>Contact Us</span>
            </NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <NavLink to="/product-management-dashboard" className="flex">
              <Keyboard className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </NavLink>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownNavbar;
