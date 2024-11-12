// import React from "react";
import c_logo from "../assets/c logo footer.png";

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-white py-6 mt-10">
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
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/contact" className="hover:underline">
            Contact Us
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="#"
            aria-label="Facebook"
            className="text-white hover:text-gray-200"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.496v-9.284H9.41v-3.623h3.411V8.41c0-3.37 2.01-5.209 5.09-5.209 1.446 0 2.684.106 3.045.154v3.529l-2.091.001c-1.64 0-1.958.779-1.958 1.922v2.52h3.905l-.508 3.623h-3.396V24h6.652c.726 0 1.325-.6 1.325-1.324V1.325C24 .6 23.4 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-white hover:text-gray-200"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.335 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.335-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.335-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.013 7.052.072c-1.504.067-2.897.354-4.004 1.46C1.94 2.61 1.653 4.003 1.586 5.507.527 6.787.514 7.197.514 12s.013 5.213.072 6.493c.067 1.504.354 2.897 1.46 4.004 1.106 1.106 2.499 1.393 4.003 1.46 1.28.059 1.689.072 6.493.072s5.213-.013 6.493-.072c1.504-.067 2.897-.354 4.004-1.46 1.106-1.106 1.393-2.499 1.46-4.003.059-1.28.072-1.689.072-6.493s-.013-5.213-.072-6.493c-.067-1.504-.354-2.897-1.46-4.004-1.106-1.106-2.499-1.393-4.003-1.46C15.669.013 15.259 0 12 0z" />
              <path d="M12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.125A3.963 3.963 0 0 1 8.038 12 3.963 3.963 0 0 1 12 8.038 3.963 3.963 0 0 1 15.962 12 3.963 3.963 0 0 1 12 15.963zm6.406-10.845a1.44 1.44 0 1 0 2.88 0 1.44 1.44 0 1 0-2.88 0z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-white hover:text-gray-200"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.954 4.569c-.885.392-1.83.654-2.825.775a4.934 4.934 0 0 0 2.163-2.724 9.861 9.861 0 0 1-3.127 1.194 4.92 4.92 0 0 0-8.384 4.482A13.957 13.957 0 0 1 1.671 3.149a4.918 4.918 0 0 0 1.524 6.573 4.903 4.903 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.902 4.902 0 0 1-2.224.085 4.929 4.929 0 0 0 4.602 3.417A9.867 9.867 0 0 1 0 21.542a13.897 13.897 0 0 0 7.548 2.212c9.142 0 14.307-7.721 14.307-14.428 0-.22 0-.439-.016-.657a10.243 10.243 0 0 0 2.515-2.617z" />
            </svg>
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
