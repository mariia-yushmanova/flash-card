import React from 'react';
import { Theme } from './types/types';
import './Theme.scss';

function ThemeItem({ theme }: { theme: Theme }): JSX.Element {
  return <div className={`theme_item${theme.id}`}>{theme.topic}</div>;
}

export default ThemeItem;
