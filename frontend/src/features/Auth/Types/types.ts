export type Res = { message:string; user:string };
export type User = {
  id?: number;
  name:string;
  email:string;
  password:string;
  checkedPassword?:string;
  score:number;
};
