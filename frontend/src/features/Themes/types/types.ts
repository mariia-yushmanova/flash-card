export type Theme = {
  id: number;
  topic: string;
};
export type State = {
  themes: Theme[];
};

export type ThemeID = Theme['id'];
