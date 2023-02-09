import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.scss';
import { RootState } from '../../store';

function Navbar(): JSX.Element {
  const { user } = useSelector((state:RootState) =>
  state.userState);
  return (
    <>
      <div className="nav__container">
        <div className="nav__logo">
          <NavLink to="/">
            <img src="/img/logo.png" alt="logo" />
          </NavLink>
        </div>
        {!user ? (
        <ul className="nav__list">
          <li>
            <NavLink className="nav__list-item" to="/auth/registration">
              Registration
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__list-item" to="/auth/login">
              Login
            </NavLink>
          </li>
        </ul>

          ) : (
          <li>
            <NavLink className="nav__list-item" to="/auth/logout">
              LogOut
            </NavLink>
          </li>
          )}
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
