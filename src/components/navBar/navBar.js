import React, { useRef, useEffect } from "react";
import "./navBar.scss";
import { Link, useLocation } from "react-router-dom";

const selected = (e, ref) => {
  const liElements = ref.current.getElementsByTagName("li");
  [...liElements].map((e) => {
    if (e.classList.contains("selected")) {
      return e.classList.remove("selected");
    }
    return null;
  });
  return e.target.classList.add("selected");
};

const NavBar = () => {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const id = location.pathname.replace(/[^a-zA-Z ]/g, "").toString();
    const liEl = ref.current.getElementsByTagName("li");
    [...liEl].map((e) => {
      if (e.id === id) {
        return e.classList.add("selected");
      }
      return null;
    });
  }, []);

  return (
    <div className="container fade-in">
      <div className="dropdown-container">
        <ul
          className="dropdown-list"
          onClick={(e) => selected(e, ref)}
          id="nav-list"
          ref={ref}
        >
          <Link to="/home">
            <li id="home">Home</li>
          </Link>
          <Link to="/news">
            <li id="news">News</li>
          </Link>
          {/* <li className="dropdown">
            <a href="#" className="dropbtn">
              Dropdown
            </a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li> */}

          <Link to="/spinner">
            <li id="spinner">Spinner</li>
          </Link>

          <Link to="/music">
            <li id="music">Music</li>
          </Link>

          <Link to="/overlay">
            <li id="overlay">Overlay</li>
          </Link>
          <Link to="/weather">
            <li id="weather">Weather</li>
          </Link>
          <Link to="/randomuser">
            <li id="randomuser">Random User</li>
          </Link>
          <Link to="/todoapp">
            <li id="todoapp">Todo App</li>
          </Link>
          <Link to="/syncscroll">
            <li id="syncscroll">SyncScroll</li>
          </Link>
          <Link to="/login">
            <li id="login">Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
