import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div>
      <div className="">
        <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
          {/* Loading screen */}
          {/* Sidebar */}
          <div
            x-transition:enter="transform transition-transform duration-300"
            x-transition:enter-start="-translate-x-full"
            x-transition:enter-end="translate-x-0"
            x-transition:leave="transform transition-transform duration-300"
            x-transition:leave-start="translate-x-0"
            x-transition:leave-end="-translate-x-full"
            x-show="isSidebarOpen"
            className="fixed inset-y-0 z-10 flex w-65 p-[30px]"
          >
            {/* Curvy shape */}
            <svg
              className="absolute inset-0 w-full h-full text-white"
              style={{ filter: "drop-shadow(10px 0 10px #00000030)" }}
              preserveAspectRatio="none"
              viewBox="0 0 309 800"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z" />
            </svg>
            {/* Sidebar content */}
            <div className="z-10 flex flex-col flex-1">
              <div className="flex items-center justify-between flex-shrink-0 w-64 p-4">
                {/* Logo */}
                <a>
                  <img src="" alt="" />
                </a>
                {/* Close btn */}
              </div>
              <nav className="flex flex-col flex-1 w-64 gap-5 p-4 mt-4">
                <a href="#" className="flex items-center space-x-2">
                  <i className="fa-solid fa-house" />
                  <div>
                    <div>
                      <span>Home</span>
                    </div>
                  </div>
                </a>
                <a className="flex items-center space-x-2">
                  <i className="fa-solid fa-user-group" />
                  <div>
                    <div>
                      <span>Users</span>
                    </div>
                  </div>
                </a>
                <a className="flex items-center space-x-2">
                  <i className="fa-solid fa-list" />
                  <div>
                    <div>
                      <span>Categories</span>
                    </div>
                  </div>
                </a>
                <a className="flex items-center space-x-2">
                  <i className="fa-solid fa-shapes" />
                  <div>
                    <div>
                      <span>Products</span>
                    </div>
                  </div>
                </a>
              </nav>
              <div className="flex-shrink-0 p-4">
                <button className="flex items-center space-x-2">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Sidebar;
