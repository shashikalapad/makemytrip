import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

const Sidebar = () => { 
  return (
    <Menu>
      {/* <a className="menu-item"  href="/login">
     Shashi
      </a> */}

      <a className="menu-item" href="/">
      Flights
      </a>
      <a className="menu-item" href="/hotels">
      Hotels
      </a>
      <a className="menu-item" href="/trains">
      Trains
      </a>
      <a className="menu-item" href="/login">    
      Log In
      </a>
      <a className="menu-item" href="/signUp">
      Sign Up
      </a>
    </Menu>
  );
};

export default Sidebar;
