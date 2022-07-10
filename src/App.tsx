import Stack from '@mui/material/Stack';
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { useMemo } from 'react';
import AppBar from './components/AppBar';
import CustomSnackbarProvider from './components/CustomSnackbarProvider';
import { useAppTheme } from './hooks/useTheme';
import UploadPage from './pages/UploadPage';
import darkTheme from './theme/darkTheme';
import lightTheme from './theme/lightTheme';
import './translations/i18n';

function App() {
  const { theme } = useAppTheme();

  const currentTheme = useMemo(
    () => (theme === 'dark' ? darkTheme : lightTheme),
    [theme]
  );

  return (
    <ThemeProvider theme={responsiveFontSizes(currentTheme)}>
      <CustomSnackbarProvider>
        <Stack height="100%" bgcolor={currentTheme.palette.background.default}>
          <AppBar />
          <UploadPage />
        </Stack>
      </CustomSnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
