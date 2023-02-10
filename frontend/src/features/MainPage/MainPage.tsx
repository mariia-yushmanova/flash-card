import React from 'react';
import './MainPage.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function MainPage(): JSX.Element {
  const { users } = useSelector((store: RootState) => store.userState);

  console.log(users);
  return (
    <div className="container main">
      <div className="main__flex">
        <div className="main__title">
          <h1>Привет отважный!</h1>
          <h4>Хочешь быть в числе сильнейших - зарегистрируйся!</h4>
          {users && <button type="button">Начать</button>}
        </div>
        <div>
          <h1>Супер стастика</h1>
          {users.map((user) => (
            <div>
              <p>
                {user.name},{user.score}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default MainPage;
