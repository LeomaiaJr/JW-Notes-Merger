import { createContext, Dispatch, SetStateAction } from 'react';
import { Theme } from '../hooks/useTheme';

export interface ThemeContextData {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData
);
