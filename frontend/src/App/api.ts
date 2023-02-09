import { Card } from '../features/Cards/types/types';
import { Theme } from '../features/Themes/types/types';

export const loadCards = async (): Promise<Card[]> => {
  const res = await fetch('http://localhost:4000/api/cards');
  return res.json();
};

export const loadThemes = async (): Promise<Theme[]> => {
  const res = await fetch('http://localhost:4000/api/themes');
  return res.json();
};
