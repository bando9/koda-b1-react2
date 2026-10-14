import { Link } from "react-router";

function Navbar() {
  return (
    <header className="py-3.5 mx-10 md:flex md:justify-between mb-7">
      <Link to="/">
        <h2 className="font-bold text-xl mb-5">React v19.3</h2>
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
        <button className="ml-2 px-5 h-10 rounded-lg cursor-pointer bg-black text-white">
          GitHub
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
