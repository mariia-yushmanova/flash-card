import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import * as api from './api';

import Navbar from '../features/Navbar/Navbar';
import CardsList from '../features/Cards/CardsList';
import MainPage from '../features/MainPage/MainPage';
import Registration from '../features/auth/Registration';
import Authorization from '../features/auth/Authorization';
import Logout from '../features/auth/Logout';
import NotFound from '../features/NotFound/NotFound';

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

  useEffect(() => {
    api
      .checkUser()
      .then((data) => dispatch({ type: 'LOG_USER', payload: data }));
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/cards" element={<CardsList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
