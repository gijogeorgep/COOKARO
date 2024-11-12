import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/cookarologo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileDropdownOpen(false); // Close dropdown when menu toggles
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  };

  return (
    <nav className="relative">
      <div className="flex justify-between items-center px-4 py-4 bg-[#111827] shadow-2xl">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="CookKaro Logo" className="w-40 sm:w-56" />
          </Link>
        </div>

        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Toggle menu"
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios/50/menu--v1.png"
              alt="Menu Icon"
            />
          </button>
        </div>

        <div className="hidden sm:flex items-center space-x-6">
          <Link to="/" className="hover:text-yellow-400 text-white">
            HOME
          </Link>

          <div className="relative z-50" onClick={toggleDropdown}>
            <button className="hover:text-yellow-400 text-white focus:outline-none">
              RECIPES
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-[#374151] mt-2 rounded shadow-lg">
                <Link
                  to="/category"
                  onClick={closeDropdown}
                  className="block px-4 py-2 text-gray-300 hover:text-yellow-400"
                >
                  Category
                </Link>
                <Link
                  to="/area"
                  onClick={closeDropdown}
                  className="block px-4 py-2 text-gray-300 hover:text-yellow-400"
                >
                  Area
                </Link>
                <Link
                  to="/breakfast"
                  onClick={closeDropdown}
                  className="block px-4 py-2 text-gray-300 hover:text-yellow-400"
                >
                  Breakfast
                </Link>
                <Link
                  to="/vegetarian"
                  onClick={closeDropdown}
                  className="block px-4 py-2 text-gray-300 hover:text-yellow-400"
                >
                  Vegetarian
                </Link>
                <Link
                  to="/dessert"
                  onClick={closeDropdown}
                  className="block px-4 py-2 text-gray-300 hover:text-yellow-400"
                >
                  Dessert
                </Link>
              </div>
            )}
          </div>
          <Link to="/contact" className="hover:text-yellow-400 text-white">
            CONTACT
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#374151] shadow-lg z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="text-gray-300 hover:text-yellow-400 absolute top-4 right-4"
          aria-label="Close menu"
        >
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/multiply.png"
            alt="Close Icon"
          />
        </button>
        <div className="flex flex-col mt-16 space-y-4 pl-6 text-gray-300">
          <Link to="/" className="hover:text-yellow-400 cursor-pointer">
            HOME
          </Link>

          {/* Mobile Dropdown for Recipes */}
          <div className="flex flex-col space-y-2 cursor-pointer">
            <span
              onClick={toggleMobileDropdown}
              className="hover:text-yellow-400"
            >
              RECIPES
            </span>
            {isMobileDropdownOpen && (
              <div className="flex flex-col pl-4 space-y-2">
                <Link
                  to="/category"
                  onClick={closeDropdown}
                  className="hover:text-yellow-400"
                >
                  Category
                </Link>
                <Link
                  to="/area"
                  onClick={closeDropdown}
                  className="hover:text-yellow-400"
                >
                  Area
                </Link>
                <Link
                  to="/breakfast"
                  onClick={closeDropdown}
                  className="hover:text-yellow-400"
                >
                  Breakfast
                </Link>
                <Link
                  to="/vegetarian"
                  onClick={closeDropdown}
                  className="hover:text-yellow-400"
                >
                  Vegetarian
                </Link>
                <Link
                  to="/dessert"
                  onClick={closeDropdown}
                  className="hover:text-yellow-400"
                >
                  Dessert
                </Link>
              </div>
            )}
          </div>
          <Link to="/contact" className="hover:text-yellow-400 cursor-pointer">
            CONTACT
          </Link>
        </div>
      </div>

      {/* Overlay to close the mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
