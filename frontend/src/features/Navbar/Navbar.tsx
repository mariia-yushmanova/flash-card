import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Navbar.scss';

function Navbar(): JSX.Element {
  return (
    <>
      <div className="nav__container">
        <div className="nav__logo">
          <NavLink to="/">
            <img src="/img/logo.png" alt="logo" />
          </NavLink>
        </div>
        <ul className="nav__list">
          <li>
            <NavLink className="nav__list-item" to="/login">
              SignIn
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__list-item" to="/registration">
              SignUp
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__list-item" to="/logout">
              LogOut
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
