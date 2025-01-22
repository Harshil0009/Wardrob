import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi"; // For the menu toggle icon

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="bg-black h-auto">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl text-white">
            Femme<span className="font-serif italic">Wardrobe</span>
          </div>

          {/* Hamburger Menu Button (Visible on small screens) */}
          <button
            className="text-white text-2xl md:hidden"
            onClick={toggleMenu}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Navigation Links & Icons */}
          <div
            className={`absolute md:static top-16 left-0 w-full md:w-auto z-20 bg-black md:bg-transparent md:flex flex-col md:flex-row text-center justify-center items-center md:space-x-6 md:font-bold text-white transition-transform ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            {/* Navigation Links */}
            <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 font-bold text-white md:items-center">
              <Link
                to="/"
                className="hover:text-sky-300 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="hover:text-sky-300 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="hover:text-sky-300 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="hover:text-sky-300 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>

            {/* Search & Shopping Bag Icons */}
            <div className="flex items-center justify-center space-x-4 mt-4 md:mt-0 md:items-center text-white">
              <button className="hover:cursor-pointer text-lg">
                <IoMdSearch />
              </button>
              <button className="hover:cursor-pointer text-lg">
                <FaShoppingBag />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;