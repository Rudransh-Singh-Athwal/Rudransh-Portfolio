import { useState } from "react";
import { Link } from "react-scroll";
import "../index.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      id="navbar"
      className="sticky top-0 backdrop-filter backdrop-blur-2xl bg-opacity-30 z-10"
    >
      <nav className="bg-black-800">
        <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-16">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-3xl font-semibold text-gray-200 ml-20 hidden sm:inline">
                <a href="/" rel="noreferrer">
                  Rudransh Singh Athwal
                </a>
              </h1>
              {/* Mobile name - smaller and visible on small screens */}
              <h1 className="text-xl font-semibold text-gray-200 ml-2 sm:hidden">
                <a href="/" rel="noreferrer">
                  Rudransh Singh Athwal
                </a>
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6">
              <div className="sm:ml-6 sm:block cursor-pointer">
                <div className="flex space-x-2 text-base font-semibold">
                  <Link
                    to="home"
                    className="text-gray-300 hover:bg-cyan-500 hover:text-white hover:glow rounded-md px-3 py-2"
                    style={{ "--glow-color": "cyan", "--glow-size": "3px" }}
                    aria-current="page"
                  >
                    Home
                  </Link>
                  <Link
                    to="about"
                    className="text-gray-300 hover:bg-cyan-500 hover:text-white hover:glow rounded-md px-3 py-2"
                    style={{ "--glow-color": "cyan", "--glow-size": "3px" }}
                  >
                    About
                  </Link>
                  <Link
                    to="experience"
                    className="text-gray-300 hover:bg-cyan-500 hover:text-white hover:glow rounded-md px-3 py-2"
                    style={{ "--glow-color": "cyan", "--glow-size": "3px" }}
                  >
                    Experience
                  </Link>
                  <Link
                    to="projects"
                    className="text-gray-300 hover:bg-cyan-500 hover:text-white hover:glow rounded-md px-3 py-2"
                    style={{ "--glow-color": "cyan", "--glow-size": "3px" }}
                  >
                    Projects
                  </Link>
                  <Link
                    to="contact"
                    className="text-gray-300 hover:bg-cyan-500 hover:text-white hover:glow rounded-md px-3 py-2"
                    style={{ "--glow-color": "cyan", "--glow-size": "3px" }}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-cyan-500 hover:text-white hover:glow focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                style={{ "--glow-color": "cyan", "--glow-size": "3px" }}
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <div className="flex flex-col space-y-1 w-6 h-6 justify-center">
                  <div
                    className={`h-0.5 w-6 bg-gray-300 transition-transform duration-300 ${
                      isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  />
                  <div
                    className={`h-0.5 w-6 bg-gray-300 transition-opacity duration-300 ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <div
                    className={`h-0.5 w-6 bg-gray-300 transition-transform duration-300 ${
                      isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`sm:hidden ${isMenuOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2 backdrop-filter backdrop-blur-2xl bg-black bg-opacity-50">
            <Link
              to="home"
              className="text-gray-300 hover:bg-cyan-500 hover:text-white hover:glow block rounded-md px-3 py-2 text-base font-semibold"
              style={{ "--glow-color": "cyan", "--glow-size": "3px" }}
              aria-current="page"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="about"
              className="text-gray-300 hover:bg-cyan-500 hover:text-white hover:glow block rounded-md px-3 py-2 text-base font-semibold"
              style={{ "--glow-color": "cyan", "--glow-size": "3px" }}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="experience"
              className="text-gray-300 hover:bg-cyan-500 hover:text-white hover:glow block rounded-md px-3 py-2 text-base font-semibold"
              style={{ "--glow-color": "cyan", "--glow-size": "3px" }}
              onClick={closeMenu}
            >
              Experience
            </Link>
            <Link
              to="projects"
              className="text-gray-300 hover:bg-cyan-500 hover:text-white hover:glow block rounded-md px-3 py-2 text-base font-semibold"
              style={{ "--glow-color": "cyan", "--glow-size": "3px" }}
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              to="contact"
              className="text-gray-300 hover:bg-cyan-500 hover:text-white hover:glow block rounded-md px-3 py-2 text-base font-semibold"
              style={{ "--glow-color": "cyan", "--glow-size": "3px" }}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
