import React from 'react';
import './MainPage.scss';

function MainPage(): JSX.Element {
    return (
 <div className="container">
    <div className="main__flex">
        <div className="main__title">
            <h1>Привет отважный!</h1>
            <h4>Хочешь быть в числе сильнейших - зарегистрируйся!</h4>
            <button>Начать</button>
        </div>
        <div>
            <h1>Супер стастика</h1>
            {users.map((user) => {
                <div>
                    <p>{user.name},{user.score}</p>
                </div>;
            })}
        </div>
    </div>
 </div>
    );
}
export default MainPage;
