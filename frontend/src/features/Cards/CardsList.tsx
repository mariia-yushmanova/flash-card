import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ThemeItem from '../Themes/ThemeItem';
import CardItem from './CardItem';
import './Card.scss';

function CardsList(): JSX.Element {
  const { cards } = useSelector((store: RootState) => store.cardState);
  const { themes } = useSelector((store: RootState) => store.themeState);
  const { user } = useSelector((store: RootState) => store.userState);

  return (
    <div className="card-list">
      {'id' in user && (
        <div className="user_score user__score">
          <p>{user.name}</p>
          <p>{user.score}</p>
        </div>
      )}
      <div className="main_themes_list">
        {themes.map((theme) => (
          <ThemeItem key={theme.id} theme={theme} />
        ))}
        {cards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default CardsList;
