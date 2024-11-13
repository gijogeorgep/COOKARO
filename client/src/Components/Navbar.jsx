import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/cookarologo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsMenuOpen(false);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(event);

      closeAllMenus();
    };

    if (isMenuOpen || isDropdownOpen || isMobileDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen, isDropdownOpen, isMobileDropdownOpen]);

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
            onClick={(e) => {
              e.stopPropagation(); // Prevents the menu toggle button from closing immediately
              toggleMenu();
            }}
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

          <div
            className="relative z-50"
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown();
            }}
          >
            <button className="hover:text-yellow-400 text-white focus:outline-none">
              RECIPES
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-[#374151] mt-2 rounded shadow-lg">
                <Link
                  to="/category"
                  onClick={closeAllMenus}
                  className="block px-4 py-2 text-gray-300 hover:text-yellow-400"
                >
                  Category
                </Link>
                <Link
                  to="/area"
                  onClick={closeAllMenus}
                  className="block px-4 py-2 text-gray-300 hover:text-yellow-400"
                >
                  Area
                </Link>
                <Link
                  to="/breakfast"
                  onClick={closeAllMenus}
                  className="block px-4 py-2 text-gray-300 hover:text-yellow-400"
                >
                  Breakfast
                </Link>
                <Link
                  to="/vegetarian"
                  onClick={closeAllMenus}
                  className="block px-4 py-2 text-gray-300 hover:text-yellow-400"
                >
                  Vegetarian
                </Link>
                <Link
                  to="/dessert"
                  onClick={closeAllMenus}
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
          <Link
            to="/"
            onClick={closeAllMenus}
            className="hover:text-yellow-400 cursor-pointer"
          >
            HOME
          </Link>

          {/* Mobile Dropdown for Recipes */}
          <div className="flex flex-col space-y-2 cursor-pointer">
            <span
              onClick={(e) => {
                e.stopPropagation();
                toggleMobileDropdown();
              }}
              className="hover:text-yellow-400"
            >
              RECIPES
            </span>
            {isMobileDropdownOpen && (
              <div className="flex flex-col pl-4 space-y-2">
                <Link
                  to="/category"
                  onClick={closeAllMenus}
                  className="hover:text-yellow-400"
                >
                  Category
                </Link>
                <Link
                  to="/area"
                  onClick={closeAllMenus}
                  className="hover:text-yellow-400"
                >
                  Area
                </Link>
                <Link
                  to="/breakfast"
                  onClick={closeAllMenus}
                  className="hover:text-yellow-400"
                >
                  Breakfast
                </Link>
                <Link
                  to="/vegetarian"
                  onClick={closeAllMenus}
                  className="hover:text-yellow-400"
                >
                  Vegetarian
                </Link>
                <Link
                  to="/dessert"
                  onClick={closeAllMenus}
                  className="hover:text-yellow-400"
                >
                  Dessert
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/contact"
            onClick={closeAllMenus}
            className="hover:text-yellow-400 cursor-pointer"
          >
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
