import React from "react";
import { Input } from "antd";
import "./navbar.scss";
import MovieIcon from "../../icons/logo-img.webp";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

const Navbar = ({ onSearchChange }) => {
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <div className="search-container">
        <Search
          onChange={onSearchChange}
          placeholder="Search movies here ..."
        />
      </div>
      <div onClick={() => navigate("/")} className="logo-container">
        <img src={MovieIcon} />
      </div>
    </div>
  );
};

export default Navbar;
