import { IconSearch } from "@tabler/icons-react";
import { Link } from "react-router";
// import logo from "/assets/images/logo.svg";

function Navbar() {
  return (
    <header className="py-3.5 mx-10 md:flex md:justify-between mb-7">
      <Link to="/">
        <img src="/logo.svg" alt="bluebird logo" className="w-40" />
      </Link>

      <nav className="max-w-full md:flex md:flex-row items-center space-x-3 ">
        <ul className="flex flex-col md:flex-row text-sm text-[#4A5565] mt-3 space-y-2 md:space-x-4 justify-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <Link className="ml-2  h-8 w-8 rounded-lg cursor-pointer bg-blue-600 text-white flex items-center justify-center">
          <IconSearch />
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
