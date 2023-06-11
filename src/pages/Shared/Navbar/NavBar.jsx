/* eslint-disable no-undef */
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const user = false;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNameVisible, setIsNameVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMouseEnter = () => {
    setIsNameVisible(true);
  };

  const handleMouseLeave = () => {
    setIsNameVisible(false);
  };

  return (
    <nav className="fixed z-10 bg-opacity-30 min-w-[84%] max-w-screen-xl  flex flex-wrap items-center justify-between bg-black text-white p-4 rounded  h-20">
      <div className="flex items-center">
        <Link
          to="/"
          className="flex flex-col items-center  font-bold text-lg"
        >
          {/* i can use img here if i wan to add a logo to nav */}
          <p>SportifyCamp</p>
        </Link>
        <button
          className=" ml-4 block sm:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full sm:flex sm:items-center sm:w-auto`}
      >
        <div className="sm:flex sm:items-center">
          <Link
            to="/"
            className=" ml-4 block mt-4 sm:inline-block sm:mt-0"
          >
            Home
          </Link>
          <Link
            to="/instructors"
            className=" ml-4 block mt-4 sm:inline-block sm:mt-0"
          >
            Instructors
          </Link>
          <Link
            to="/classes"
            className=" ml-4 block mt-4 sm:inline-block sm:mt-0"
          >
            Classes
          </Link>

          {user && (
            <Link
              to="/dashboard"
              className=" ml-4 block mt-4 sm:inline-block sm:mt-0"
            >
              Dashboard
            </Link>
          )}
        </div>
        <div className="flex items-center mt-4 sm:mt-0">
          {user ? (
            <div
              className="flex items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center  focus:outline-none">
                {isNameVisible && (
                  <span className="mr-2 ml-2">{user?.displayName}</span>
                )}
                <img
                  src={user?.photoURL}
                  alt="User Profile"
                  className="h-11  ml-4 rounded-full"
                />
              </button>

              <button
                onClick={handleLogout}
                className=" ml-9 btn btn-outline btn-accent"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className=" ml-4 btn btn-outline btn-primary  text-lg "
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
