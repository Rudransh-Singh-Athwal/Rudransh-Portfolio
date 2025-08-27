// import React from "react";
import { Link } from "react-scroll";
import "../index.css";

export default function Navbar() {
  return (
    <div
      id="navbar"
      className="sticky top-0 backdrop-filter backdrop-blur-2xl bg-opacity-30 z-10"
    >
      <nav className="bg-black-800">
        <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-16">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex items-center ">
              <h1 className="text-3xl font-semibold text-gray-200 ml-20 hidden sm:inline">
                <a href="/" rel="noreferrer">
                  Rudransh Singh Athwal
                </a>
              </h1>
            </div>

            <div className="absolute inset-y-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6">
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
                  {/* <Link
                    to="experience"
                    className="text-gray-300 hover:bg-cyan-500 hover:text-white hover:glow rounded-md px-3 py-2"
                    style={{ "--glow-color": "cyan", "--glow-size": "3px" }}
                  >
                    Experience
                  </Link> */}
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
          </div>
        </div>
      </nav>
    </div>
  );
}
