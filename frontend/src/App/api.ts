<<<<<<< HEAD
import { User, Res } from '../features/Auth/Types/User';

export const registration = async (item: User):Promise<Res> => {
  const res = await fetch('http://localhost:4000/api/auth/registration', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(item),
  });
  return res.json();
};

export const login = async (item: User): Promise<Res> => {
  const res = await fetch('http://localhost:4000/api/auth/login', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(item),
  });
  return res.json();
};

export const logout = async (): Promise<Res> => {
  const res = await fetch('http://localhost:4000/api/auth/logout');
=======
import { Card } from '../features/Cards/types/types';
import { Theme } from '../features/Themes/types/types';

export const loadCards = async (): Promise<Card[]> => {
  const res = await fetch('http://localhost:4000/api/cards');
  return res.json();
};

export const loadThemes = async (): Promise<Theme[]> => {
  const res = await fetch('http://localhost:4000/api/themes');
>>>>>>> afcefe5e01e83ab8b0ac048c0954e47747f3fa43
  return res.json();
};
