import React from "react";
import { Input } from 'antd';
import './navbar.scss';

const { Search } = Input;

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="search-container">
        <Search />
      </div>
      <div className="logo-container">
        <img />
      </div>
    </div>
  );
};

export default Navbar;
