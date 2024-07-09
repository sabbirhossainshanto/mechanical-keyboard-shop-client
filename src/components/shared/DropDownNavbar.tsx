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
        <img className="size-10" src={assets.menu} alt="" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <NavLink to="/" className="flex">
              <HomeIcon className="mr-2 h-4 w-4" />
              <span>Home</span>
            </NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <NavLink to="/" className="flex">
              <HomeIcon className="mr-2 h-4 w-4" />
              <span>Home</span>
            </NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <NavLink to="/" className="flex">
              <HomeIcon className="mr-2 h-4 w-4" />
              <span>Home</span>
            </NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <NavLink to="/contact" className="flex">
              <Contact className="mr-2 h-4 w-4" />
              <span>Contact</span>
            </NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem>
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
