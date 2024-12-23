import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <a href="#Home" className=" px-3 py-2 rounded-md text-2xl">
              Asep<span className="text-blue-500">Nurdin</span>
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg">
              Home
            </a>
            <a href="#about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg">
              About
            </a>
            <a href="#projects" className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg">
              Projects
            </a>
            <a href="#experience" className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg">
              Experience
            </a>
            <a href="#certificate" className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg">
              Certificate
            </a>
            <a href="#contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <a
            href="#"
            className="block px-3 py-2 text-lg text-white hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-3 py-2 text-lg text-white hover:bg-gray-700"
          >
            About
          </a>
          <a
            href="#projects"
            className="block px-3 py-2 text-lg text-white hover:bg-gray-700"
          >
            Project
          </a>
          <a
            href="#experience"
            className="block px-3 py-2 text-lg text-white hover:bg-gray-700"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 text-lg text-white hover:bg-gray-700"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
