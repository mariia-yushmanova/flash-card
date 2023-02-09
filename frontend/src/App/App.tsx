import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
// import * as api from './api';
import Navbar from '../features/Navbar/Navbar';
import MainPage from '../features/MainPage/MainPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainPage />} />
          {/* <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Authorization />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
