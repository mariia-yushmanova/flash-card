import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.scss';
import { RootState } from '../../store';

function Navbar(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.userState);

  return (
    <>
      <div className="nav__container">
        <div className="nav__logo">
          <NavLink to="/">
            <img src="/img/logo.png" alt="logo" className="nav__logo_img" />
          </NavLink>
        </div>
        <ul className="nav__list">
          {!user && (
            <>
              <li>
                <NavLink className="nav__list-item" to="/registration">
                  Registration
                </NavLink>
              </li>
              <li>
                <NavLink className="nav__list-item" to="/login">
                  Login
                </NavLink>
              </li>
            </>
          )}
          {user && (
            <li>
              <NavLink className="nav__list-item" to="/logout">
                LogOut
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
