// import React from "react";
import "../index.css";

export default function Contact() {
  return (
    <section id="contact" name="contact">
      <div className="pt-8 lg:pt-28 px-auto m-auto max-w-screen-md">
        <div className="mb-10 text-4xl font-bold text-center text-gray-900 dark:text-white">
          Contact Me
        </div>

        <p className="mb-10 lg:mb-10 text-center text-cyan-600 dark:text-gray-300">
          <div>Please provide your feedback</div>
          <div>
            Have a project for me? I'd love to hear from you, reach out to me
            via email or the form below.
          </div>
        </p>

        <div className="flex justify-center">
          <form
            action="https://formspree.io/f/mwpnkbnl"
            method="POST"
            className="space-y-4 w-2/3"
          >
            <div>
              {/* <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 rounded-lg border border-gray-300">c</label> */}
              <input
                type="text"
                id="name"
                name="name"
                className="block p-2.5 w-full text-sm bg-transparent border border-gray-300 text-gray-900 rounded-md  dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your Name"
                required
              ></input>
            </div>

            <div>
              {/* <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label> */}
              <input
                type="email"
                id="email"
                name="email"
                className="block p-2.5 w-full text-sm bg-transparent border border-gray-300 text-gray-900 rounded-md  dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your email"
                required
              ></input>
            </div>

            <div className="sm:col-span-2">
              {/* <label for="messsage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"></label> */}
              <textarea
                id="message"
                name="message"
                rows="5"
                className="block p-2.5 w-full text-sm bg-transparent border border-gray-300 text-gray-900 rounded-md dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Message"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-md border border-gray-600 bg-primary-700 sm:w-fit hover:bg-cyan-500 hover:border-transparent hover:glow"
                style={{ "--glow-color": "cyan", "--glow-size": "2px" }}
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-center py-6">
        <a
          href="https://leetcode.com/rsathwal04/"
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className="text-white hover:text-[#FFA116] rounded-sm p-3 text-center inline-flex items-center mr-3 my-1.5"
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
                d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/rudransh-singh-athwal/"
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            class="text-white hover:text-[#0077b5] rounded-sm p-3 inline-flex items-center text-center mr-3 my-1.5"
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

        <a href="mailto:rsathwal04@gmail.com" target="_blank" rel="noreferrer">
          <button
            type="button"
            class="text-white hover:text-[#ea4335] rounded-sm p-3 text-center inline-flex items-center mr-3 my-1.5"
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
          rel="noreferrer "
        >
          <button
            type="button"
            class="text-white hover:text-[#333] rounded-sm p-3 text-center inline-flex items-center mr-3 my-1.5"
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
          rel="noreferrer"
        >
          <button
            type="button"
            class="text-white hover:text-[#c13584] rounded-sm p-3 text-center inline-flex items-center mr-3 my-1.5"
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
      </div>
    </section>
  );
}
