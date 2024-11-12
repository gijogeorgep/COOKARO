// import React from "react";
import { Link } from "react-router-dom";
import c_logo from "../assets/c logo footer.png";
import footerimg from "../assets/footerbg.jpg";

const Footer = () => {
  return (
    <footer
      className="relative bg-[#1f2937] text-white py-6 mt-10"
      style={{
        backgroundImage: `url(${footerimg})`,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Company Name & Description */}
        <div className="text-center md:text-left flex-1">
          <h3 className="text-2xl font-bold">CookKaro</h3>
          <p className="mt-2 text-sm">
            Your ultimate guide to cooking amazing dishes. Explore recipes from
            around the world!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-center md:text-left">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="#"
            aria-label="Facebook"
            className="text-white hover:text-gray-200"
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png"
              alt="facebook-new"
            />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-white hover:text-gray-200"
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/instagram-circle.png"
              alt="instagram-circle"
            />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-white hover:text-gray-200"
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/twitter-circled--v1.png"
              alt="twitter-circle"
            />
          </a>
        </div>
      </div>

      {/* Logo and Copyright */}
      <div className="container mx-auto px-4 mt-6 flex flex-col items-center">
        <img src={c_logo} alt="CookKaro Logo" className="h-12 w-auto mb-2" />
        <div className="text-center text-sm">
          &copy; 2024 CookKaro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
