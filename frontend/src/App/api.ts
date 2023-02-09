import { User } from '../features/auth/Types/types';
import { Card } from '../features/Cards/types/types';
import { Theme } from '../features/Themes/types/types';

export const registr = async (newUser: User): Promise<User> => {
  const res = await fetch('http://localhost:4000/api/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
    }),
  });
  return res.json();
};

export const loadCards = async (): Promise<Card[]> => {
  const res = await fetch('http://localhost:4000/api/cards');
  return res.json();
};

export const loadThemes = async (): Promise<Theme[]> => {
  const res = await fetch('http://localhost:4000/api/themes');
  return res.json();
};
