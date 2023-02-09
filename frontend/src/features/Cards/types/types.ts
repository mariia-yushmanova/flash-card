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
export type State = {
  cards: Card[];
};

export type CardID = Card['id'];
