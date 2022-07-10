import MenuIcon from '@mui/icons-material/Menu';
import { AppBar as MuiAppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FunctionComponent } from 'react';
import ThemeSelector from '../ThemeSelector';
import ReactCountryFlag from 'react-country-flag';
import i18n from 'i18next';

const AppBar: FunctionComponent = () => {
  const changeCurrentLng = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          textAlign="center"
          sx={{ flexGrow: 1 }}
        >
          JW Notes Merger
        </Typography>
        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center" mr={1}>
            <IconButton
              onClick={() => {
                changeCurrentLng('en');
              }}
            >
              <ReactCountryFlag countryCode="US" svg />
            </IconButton>
            <IconButton
              onClick={() => {
                changeCurrentLng('pt');
              }}
            >
              <ReactCountryFlag countryCode="BR" svg />
            </IconButton>
          </Box>
          <ThemeSelector />
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
