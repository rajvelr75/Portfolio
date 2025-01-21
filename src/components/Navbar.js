import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { DarkModeSwitch } from 'react-toggle-dark-mode'; 

const Navbar = ({ toggleTheme, theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <nav className="px-4 py-2 fixed top-0 w-full z-10 shadow-md bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          Portfolio
        </div>

        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="about"
                smooth={true}
                offset={-70}
                className="cursor-pointer text-white hover:text-blue-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                offset={-70}
                className="cursor-pointer text-white hover:text-blue-400"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                offset={-70}
                className="cursor-pointer text-white hover:text-blue-400"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="academics"
                smooth={true}
                offset={-70}
                className="cursor-pointer text-white hover:text-blue-400"
              >
                Academics
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                offset={-70}
                className="cursor-pointer text-white hover:text-blue-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <DarkModeSwitch
          checked={theme !== 'dark'}
          onChange={toggleTheme}
          size={40}
          className="flex items-center justify-center relative right-7 md:right-0 text-white"
        />

        <div className="md:hidden z-30" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={30} color='white'/> : <FaBars size={30} color='white'/>}
        </div>
      </div>

      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-3/5 bg-gray-800 transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden z-20 shadow-lg`}
      >
        <ul className="flex flex-col items-center mt-16 space-y-6 text-lg">
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-70}
              onClick={toggleMenu}
              className="cursor-pointer text-white hover:text-blue-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              offset={-70}
              onClick={toggleMenu}
              className="cursor-pointer text-white hover:text-blue-400"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              offset={-70}
              onClick={toggleMenu}
              className="cursor-pointer text-white hover:text-blue-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="academics"
              smooth={true}
              offset={-70}
              onClick={toggleMenu}
              className="cursor-pointer text-white hover:text-blue-400"
            >
              Academics
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-70}
              onClick={toggleMenu}
              className="cursor-pointer text-white hover:text-blue-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;