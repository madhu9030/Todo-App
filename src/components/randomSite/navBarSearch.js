import React, { useState, useEffect } from "react";
import "../navBar/navBar.scss";
// import logo from "../../images/M-logo.png";

const NavBarSearch = ({ getFilterList, input }) => {
  return (
    <div className="container fade-in products-search">
      <div className="dropdown-container">
        <ul className="dropdown-list" id="nav-list">
          {/* <a>
            <li>
              <img className="logo" src={logo} alt="" />
            </li>
          </a> */}
          <a>
            <li id="home">Home</li>
          </a>
          <a>
            <li id="news">News</li>
          </a>
          <div className="textfeild-wrapper">
            <input
              type="text"
              value={input}
              className={input ? "focused textfeild-box" : "textfeild-box"}
              onChange={(e) => getFilterList(e)}
            />
            <label className="textfeild-label">Search products</label>
          </div>
          {/* <TextFeild
            onBlur={(e) => null}
            setInput={setInput}
            input={input}
            inputAttrs={inputAttrs}
          /> */}
          <a>
            <li id="login">Login</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavBarSearch;
