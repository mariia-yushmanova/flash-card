import React, { useState } from 'react';
import { Card } from './types/types';
import './Card.scss';

function CardItem({ card }: { card: Card }): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)} className="card_item">
        <div className="question_point">{card.point}</div>
      </div>
      <div className={`overlay animated ${open ? 'show' : ''}`}>
        <div className="overlay__modal">
          <svg
            height="200"
            viewBox="0 0 200 200"
            width="200"
            className="modal__svg"
            onClick={() => setOpen(false)}
          >
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <p>{card.question}</p>
        </div>
      </div>
    </>
  );
}

export default CardItem;
