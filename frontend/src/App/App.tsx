import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
// import * as api from './api';
import Navbar from '../features/Navbar/Navbar';
import Auth from '../features/Auth/Auth';
import Login from '../features/Auth/Login';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          {/* <Route index element={<MainPage />} /> */}
          <Route path="/auth/registration" element={<Auth />} />
          <Route path="/auth/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
