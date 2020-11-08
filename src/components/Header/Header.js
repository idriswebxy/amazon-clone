import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <nav className="header">
      <Link to="/login">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header-search">
        <input type="text" className="header-search-input" />
        <SearchIcon className="header-search-icon" />
      </div>

      <div className="header-nav">
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-option-lineOne">Hello</span>
            <span className="header-option-lineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-option-lineOne">Returns</span>
            <span className="header-option-lineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-option-lineOne">Your</span>
            <span className="header-option-lineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header-option-basket">
            <span>0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
