import {
  FunctionComponent,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ThemeContext, ThemeContextData } from '../context/ThemeContext';

export type Theme = 'light' | 'dark';

interface ThemeProviderProps {
  children: ReactNode;
}

const AppThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  children,
}) => {
  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');

  const [theme, setTheme] = useState<Theme>(
    darkThemeMq.matches ? 'dark' : 'light'
  );

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

function useAppTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}

export { AppThemeProvider, useAppTheme };
