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
          <h1 className="main_text">Добро пожаловать!</h1>
          <h4 className="main_text2">
            Хочешь быть в числе сильнейших - зарегистрируйся!
          </h4>
          {user && (
            <button onClick={() => nav('/cards')} type="button">
              Начать
            </button>
          )}
        </div>
        <div>
          <h1>Супер стастика</h1>
        </div>
        <div>
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
