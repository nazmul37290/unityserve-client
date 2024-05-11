import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import "../css/app.css";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navabr = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    toast.success("logged out successfully");
    navigate("/login");
  };
  console.log(user);
  return (
    <div className="w-full z-50  text-gray-300 absolute">
      <footer className="footer max-w-7xl mx-auto items-center p-4 ">
        <aside className="items-center grid-flow-col">
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-2">
              <span>
                <FaLocationDot className="text-lg text-light"></FaLocationDot>
              </span>
              Los Angles, US block Abc
            </p>
            <p className="flex items-center gap-2">
              <span>
                <FaPhoneVolume className="text-lg text-light"></FaPhoneVolume>
              </span>
              +969 0565 62846
            </p>
          </div>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
      <hr className="my-4" />
      <div className="navbar uppercase max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu  dropdown-content mt-3 z-[1] p-2 shadow bg-[rgb(0,0,0,.2)] background-blur rounded w-52"
            >
              <label className="cursor-pointer grid place-items-center">
                <input
                  type="checkbox"
                  value=""
                  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                />
                <svg
                  className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <svg
                  className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>

              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive, isPending }) =>
                    isActive ? "bg-light text-white " : isPending ? "" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/needVolunteer"}
                  className={({ isActive, isPending }) =>
                    isActive ? "bg-light text-white" : isPending ? "" : ""
                  }
                >
                  Need Volunteer
                </NavLink>
              </li>
              <li>
                <details>
                  <summary>My Profile</summary>
                  <ul className="  bg-[rgb(0,0,0,.2)] background-blur ">
                    <li>
                      <NavLink
                        to={"/addVolunteerNeedPost"}
                        className={({ isActive, isPending }) =>
                          isActive
                            ? "bg-light text-white "
                            : isPending
                            ? ""
                            : ""
                        }
                      >
                        Add Volunteer Post
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/manageMyPost"}
                        className={({ isActive, isPending }) =>
                          isActive ? "bg-light text-white" : isPending ? "" : ""
                        }
                      >
                        Manage My post
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost gap-0 text-2xl">
            Unity<span className="text-light">Serve</span>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal font-bold px-1">
            <li className="hover:bg-middle hover:text-white rounded-xl">
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "bg-light text-white rounded-full"
                    : isPending
                    ? ""
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hover:bg-middle hover:text-white rounded-xl">
              <NavLink
                to={"/needVolunteer"}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "bg-light text-white rounded-full"
                    : isPending
                    ? ""
                    : ""
                }
              >
                Need Volunteer
              </NavLink>
            </li>
            <li className="hover:bg-middle hover:text-white rounded-xl">
              <details>
                <summary>My Profile</summary>
                <ul className=" w-[200px] bg-[rgb(0,0,0,.2)] background-blur p-2">
                  <li className="hover:bg-middle hover:text-white rounded-xl">
                    <NavLink
                      to={"/addVolunteerNeedPost"}
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "bg-light text-white rounded-full"
                          : isPending
                          ? ""
                          : ""
                      }
                    >
                      Add Volunteer Post
                    </NavLink>
                  </li>
                  <li className="hover:bg-middle hover:text-white rounded-xl">
                    <NavLink
                      to={"/manageMyPost"}
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "bg-light text-white rounded-full"
                          : isPending
                          ? ""
                          : ""
                      }
                    >
                      Manage My post
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex">
            <label className="cursor-pointer  grid place-items-center">
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
          {user ? (
            <>
              <div className="h-10 w-10 mr-2 rounded-full">
                <img
                  title={user?.displayName}
                  className="w-full h-full rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <button
                onClick={handleLogOut}
                className="px-10 py-2 bg-light text-white rounded-full font-bold "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                className="px-10 py-2 bg-light text-white rounded-full font-bold "
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navabr;
