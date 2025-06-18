import React, { useContext } from "react";
import "../styles/Navbar.css";
import { SWIGGY_LOGO_URL } from "../utils/image-urls/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../store/slices/userSlice";

function Navbar() {
  const { user, isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSignout = () => {
    dispatch(setLogout());
  };
  return (
    <div id="navbar">
      <img id="swiggy-logo" src={SWIGGY_LOGO_URL} alt="swiggy logo" />
      <ul id="nav-items">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        {!isLoggedIn ? (
          <>
            <li>
              <Link className="nav-link" to="/signin">
                Sign in
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/signup">
                Sign up
              </Link>
            </li>
          </>
        ) : (
          <>
            <li style={{ color: "green" }}>{user}</li>
            <li>
              <Link className="nav-link" onClick={handleSignout}>
                SignOut
              </Link>
            </li>
          </>
        )}
        <li>
          <Link className="nav-link" to="/cart">
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
