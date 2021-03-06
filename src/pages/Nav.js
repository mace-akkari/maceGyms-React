import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Nav.css';

const Nav = () => (
  <nav>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/timetable">Time Table</NavLink></li>
      <li><NavLink to="/teachers">Teachers</NavLink></li>
      <li><NavLink to="/Classes">Classes</NavLink></li>
    </ul>    
  </nav>
);

export default Nav;