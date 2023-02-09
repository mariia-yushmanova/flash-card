import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Res } from './Types/User';
import * as api from '../../App/api';

function Auth(): JSX.Element {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkedPassword, setCheckedPassword] = useState('');

  if (name === 'logout') {
    api[name]().then((res:Res) => res.message === 'Session destroy' && dispatch({ type: 'LOGOUT' }));
  }

  const auth = (e:React.FormEvent):void => {
    e.preventDefault();
    if (name === 'registration') {
      api.registration({ name, email, password, checkedPassword }).then((res:Res) => {
        if (res.message === 'Пользователь с таким именем уже существует') {
          navigate('/auth/registration');
        } else {
          dispatch({ type: 'REGA', payload: res });
          navigate('/');
        }
      });
    }
  };

  return (
    <>
    <h2>{name?.toUpperCase()}</h2>
    <div className="form_container">
      <form onSubmit={auth}>
      <div className="mb_3">
          <label className="form_label">
            Login
            <input
              onChange={(e) => setLogin(e.target.value)}
              value={login}
              name="login"
              type="text"
              className="form-control"
            />
          </label>
      </div>
        <div className="mb_3">
          <label className="form_label">
            Email
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              type="email"
              className="form-control"
            />
          </label>
        </div>
        <div className="mb-3">
        <label className="form-label">
          Password
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            type="password"
            className="form-control"
          />
        </label>
        </div>
      <div className="mb-3">
        <label className="form-label">
          CheckedPassword
          <input
            onChange={(e) => setCheckedPassword(e.target.value)}
            value={checkedPassword}
            name="checkedPassword"
            type="password"
            className="form-control"
          />
        </label>
      </div>
      <button className="btn btn-secondary" type="submit">
        {name?.toUpperCase()}
        ubnnbjhbj
      </button>
      </form>
    </div>
    </>
  );
}

export default Auth;
