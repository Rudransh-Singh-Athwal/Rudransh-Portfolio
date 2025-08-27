// import React from "react";
import boy from "../../assets/boy.png";
import "../../index.css";
import Type from "./Type";
import resume from "../../assets/Rudransh_Resume.pdf";

export default function Home() {
  return (
    <div id="home" name="home" className="h-screen w-full">
      <div className="w-5/6 mx-[9.5%] flex flex-row items-center justify-between h-full">
        <div className="flex flex-col justify-center h-full">
          <div className="text-4xl sm:text-6xl font-bold text-white mb-10">
            Hello
            <span className="animate-wave">👋</span>
          </div>

          <div className="text-3xl font-bold">
            <span className="text-white ">I'm</span>
            <span className="text-cyan-400 ml-2">Rudransh Singh Athwal</span>
          </div>

          <p className="text-gray-500 text-lg pt-2 pb-10 max-w-md">
            <Type />
          </p>

          <div>
            <a
              href="https://www.linkedin.com/in/rudransh-singh-athwal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                class="text-white bg-[#0077b5] rounded-full p-3 inline-flex items-center text-center mr-3 my-1.5 hover:glow"
                style={{ "--glow-color": "#0077b5" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </button>
            </a>

            <a
              href="mailto:rsathwal04@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                class="text-white bg-[#ea4335] rounded-full p-3 text-center inline-flex items-center mr-3 my-1.5 hover:glow"
                style={{ "--glow-color": "#ea4335" }}
              >
                <svg
                  class="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </a>

            <a
              href="https://github.com/Rudransh-Singh-Athwal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                class="text-white bg-[#333] rounded-full p-3 text-center inline-flex items-center mr-3 my-1.5 hover:glow"
                style={{ "--glow-color": "gray" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </button>
            </a>

            <a
              href="https://www.instagram.com/rudranshsinghathwal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                class="text-white bg-[#c13584] rounded-full p-3 text-center inline-flex items-center mr-3 my-1.5 hover:glow"
                style={{ "--glow-color": "#c13584" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>
            </a>

            {/* <a href="https://twitter.com/PearlRathour" target="_blank">
              <button
                type="button"
                class="text-white bg-gray-800 rounded-full p-3 text-center inline-flex items-center mr-3 my-1.5 hover:glow"
                style={{ "--glow-color": "gray" }}
              >
                <svg
                  class="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </a> */}

            <a
              href="https://leetcode.com/PearlRathour/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                class="text-white bg-[#FFA116] rounded-full p-3 text-center inline-flex items-center mr-3 my-1.5 hover:glow"
              >
                <svg
                  class="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </button>
            </a>
          </div>
          <div className="justify-center py-6">
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <button
                className="relative inline-flex items-center justify-center mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group hover:text-white dark:text-white hover:glow"
                style={{ "--glow-color": "cyan", "--glow-size": "3px" }}
              >
                <div className="relative px-5 py-3 rounded-md bg-cyan-500 text-gray-200 hover:text-white">
                  See My Resume
                </div>
              </button>
            </a>
          </div>
        </div>

        <div className="big-screen md:block">
          <img
            src={boy}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full floating-image"
          />
        </div>
      </div>
    </div>
  );
}
