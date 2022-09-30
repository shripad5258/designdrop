import React from "react";
//REDUX
import { useSelector, useDispatch } from "react-redux";
import { userAuthActions } from "../../redux/actions/actionCreator";

import { Link } from "react-router-dom";

//CSS
import "./navbar.css";

//Toastify

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Component

function NavBar() {
  const userState = useSelector((st) => st.user);
  const dispatch = useDispatch();

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />

      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>

          {userState.isLoggedIn ? (
            <>
              <ul className="menu-items">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>

                <li>
                  <Link
                    onClick={() => dispatch(userAuthActions.logout())}
                    to=""
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="menu-items">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>

                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </ul>
            </>
          )}

          <Link to="/home">
            <h1 className="logo"><span>design</span>Drop</h1>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
