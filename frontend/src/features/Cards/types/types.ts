export type Card = {
  id: number;
  question: string;
  answer: string;
  point: number;
  img: string;
  description: string;
  theme_id: number;
  user_id: number;
};

export type Score = {
  points: number;
};

export type Answer = {
  id: number;
  text: string;
};

export type State = {
  cards: Card[];
  answer: Answer;
};

export type CardID = Card['id'];
