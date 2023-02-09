import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import * as api from './api';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Authorization />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
