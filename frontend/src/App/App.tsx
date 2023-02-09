<<<<<<< HEAD
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../features/Navbar/Navbar';
import CardsList from '../features/Cards/CardsList';

import * as api from './api';
=======
import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
// import * as api from './api';
import Navbar from '../features/Navbar/Navbar';
<<<<<<< HEAD
import Auth from '../features/Auth/Auth';
import Login from '../features/Auth/Login';
=======
>>>>>>> 8980d065d8c2258956f694f7e479df916ff862ca
>>>>>>> afcefe5e01e83ab8b0ac048c0954e47747f3fa43

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .loadCards()
      .then((data) => dispatch({ type: 'INIT_CARDS', payload: data }));
    api
      .loadThemes()
      .then((data) => dispatch({ type: 'INIT_THEMES', payload: data }));
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
<<<<<<< HEAD
          {/* <Route index element={<MainPage />} /> */}
          <Route path="/auth/registration" element={<Auth />} />
          <Route path="/auth/login" element={<Login />} />
=======
<<<<<<< HEAD
          {/* <Route index element={<MainPage />} /> */}
          {/* <Route path="/registration" element={<Registration />} /> */}
          {/* <Route path="/login" element={<Authorization />} /> */}
          <Route path="/cards" element={<CardsList />} />
=======
          {/* <Route index element={<MainPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Authorization />} /> */}
>>>>>>> 8980d065d8c2258956f694f7e479df916ff862ca
>>>>>>> afcefe5e01e83ab8b0ac048c0954e47747f3fa43
        </Route>
      </Routes>
    </div>
  );
}

export default App;
