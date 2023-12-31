import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useContext } from "react";
import { ApiProvider } from "../ContextProvider/ContextProvider";
import toast from "react-hot-toast";
const Header = () => {
  const { logout, user } = useContext(ApiProvider);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Successfully Signed out");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  const nav = (
    <>
      {/* <li>
        <NavLink>Item 1</NavLink>
      </li> */}
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/bookings">Bookings</NavLink>
      </li>
      {user ? (
        <li onClick={handleLogout}>
          <Link className="bg-red-800">Logout</Link>
        </li>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-sky-900">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            {nav}
          </ul>
        </div>
        <img src={logo} className="w-32" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="px-1 menu menu-horizontal text-white flex">{nav}</ul>
      </div>
      <div className="navbar-end">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
