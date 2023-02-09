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
>>>>>>> 8980d065d8c2258956f694f7e479df916ff862ca

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
          {/* <Route path="/registration" element={<Registration />} /> */}
          {/* <Route path="/login" element={<Authorization />} /> */}
          <Route path="/cards" element={<CardsList />} />
=======
          {/* <Route index element={<MainPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Authorization />} /> */}
>>>>>>> 8980d065d8c2258956f694f7e479df916ff862ca
        </Route>
      </Routes>
    </div>
  );
}

export default App;
