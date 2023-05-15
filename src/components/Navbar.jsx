import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-2 py-3">
      <div className="flex flex-col lg:flex-row lg:justify-between max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <a href="/" className="text-2xl">
              Omah<span className="text-orange-600">.</span>
            </a>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} lg:flex`}>
          <div className="flex flex-col lg:flex-row py-3">
            <a
              href="/"
              className="mb-4 lg:mb-0 lg:mr-10 font-light hover:underline"
            >
              Home
            </a>
            <a
              href="/"
              className="mb-4 lg:mb-0 lg:mr-10 font-light hover:underline"
            >
              To Rent
            </a>
            <a
              href="/"
              className="mb-4 lg:mb-0 lg:mr-10 font-light hover:underline"
            >
              For Sale
            </a>
            <a
              href="/"
              className="mb-4 lg:mb-0 lg:mr-10 font-light hover:underline"
            >
              Blog
            </a>
          </div>
          <div>
            <button className="bg-orange-500 rounded-sm text-white px-6 py-3 hover:bg-orange-400">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
