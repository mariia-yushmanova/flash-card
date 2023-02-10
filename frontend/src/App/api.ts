import { Res, User } from '../features/Auth/Types/types';
import { Answer, Card, Score } from '../features/Cards/types/types';

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
export const login = async (item: User): Promise<User> => {
  const res = await fetch('http://localhost:4000/api/auth/sign-in', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(item),
  });
  return res.json();
};
export const checkUser = async (): Promise<Res> => {
  const res = await fetch('http://localhost:4000/api/auth/sign-in', {
    credentials: 'include',
  });
  return res.json();
};

export const logout = async (): Promise<User> => {
  const res = await fetch('http://localhost:4000/api/auth/logout', {
    credentials: 'include',
  });
  return res.json();
};

// export const getUsers = async (): Promise<User[]> => {
//   const res = await fetch('http://localhost:4000/api/');
//   return res.json();
// };

export const loadCards = async (): Promise<Card[]> => {
  const res = await fetch('http://localhost:4000/api/cards');
  return res.json();
};

export const loadThemes = async (): Promise<Theme[]> => {
  const res = await fetch('http://localhost:4000/api/themes');
  return res.json();
};

export const checkAnswer = async (answer: Answer): Promise<Score> => {
  const res = await fetch('http://localhost:4000/api/cards/score', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: answer.id,
      answer: answer.text,
    }),
  });

  return res.json();
};
