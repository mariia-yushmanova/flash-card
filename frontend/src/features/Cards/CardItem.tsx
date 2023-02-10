import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as api from '../../App/api';
import { Card } from './types/types';
import './Card.scss';

function CardItem({ card }: { card: Card }): JSX.Element {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(true);
  const [rightAnswerAndDescription, setRightAnswerAndDescription] =
    useState(false);
  const [answer, setCurrentAnswer] = useState('');

  const dispatch = useDispatch();

  function submitAnswer(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    api
      .checkAnswer({ id: card.id, text: answer })
      .then((data) => dispatch({ type: 'CHECK_SCORE', payload: data }));
  }

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className={`card_item ${success ? 'visible' : 'hidden'}`}
      >
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
          <form onSubmit={submitAnswer}>
            <input
              value={answer}
              name="answer"
              onChange={(e) => setCurrentAnswer(e.target.value)}
              type="text"
            />
            <button
              onClick={() => {
                setRightAnswerAndDescription(true);
                setSuccess(false);
                setOpen(false);
              }}
              type="submit"
            >
              Answer
            </button>
          </form>
          <img src={card.img} alt="" className="modal__img" />
          <div className="question">{card.question}</div>
        </div>
      </div>
      {rightAnswerAndDescription && (
        <div className="overlay animated show">
          <div className="overlay__modal">
            <svg
              height="200"
              viewBox="0 0 200 200"
              width="200"
              className="modal__svg"
              onClick={() => setRightAnswerAndDescription(false)}
            >
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>

            <div className="description">{card.description}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default CardItem;
