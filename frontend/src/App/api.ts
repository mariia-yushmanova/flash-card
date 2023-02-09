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
  return res.json();
};
