import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function MainPage(): JSX.Element {
  const { users, user } = useSelector((store: RootState) => store.userState);
  const nav = useNavigate();
  return (
    <div className="container main">
      <div className="main__flex">
        <div className="main__title">
          <h1>Привет отважный!</h1>
          <h4>Хочешь быть в числе сильнейших - зарегистрируйся!</h4>
          {user && (
            <button onClick={() => nav('/cards')} type="button">
              Начать
            </button>
          )}
        </div>
        <div>
          <h1>Супер стастика</h1>
          {users.map((usere) => (
            <div>
              <p>
                {usere.name},{usere.score}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default MainPage;
