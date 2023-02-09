import { User } from '../features/auth/Types/type';


export const getUsers = async (): Promise<User[]> => {
    const res = await fetch('http://localhost:4000/api/');
    return res.json();
  };