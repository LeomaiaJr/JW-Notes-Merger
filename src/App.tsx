import { ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import AppBar from './components/AppBar';
import { AppThemeProvider, useAppTheme } from './hooks/useTheme';
import darkTheme from './theme/darkTheme';
import lightTheme from './theme/lightTheme';
import './translations/i18n';

function App() {
  const { t } = useTranslation('translation');
  const { theme } = useAppTheme();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <AppBar />
      <p>{t('welcome')}</p>
    </ThemeProvider>
  );
}

export default App;
