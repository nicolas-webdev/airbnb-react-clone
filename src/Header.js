import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__icon">
          <img
            src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png"
            alt="header icon"
          />
        </div>
      </Link>
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
