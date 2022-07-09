import MenuIcon from '@mui/icons-material/Menu';
import { AppBar as MuiAppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FunctionComponent } from 'react';
import ThemeSelector from '../ThemeSelector';

const AppBar: FunctionComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
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
          <Box>
            <ThemeSelector />
          </Box>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};

export default AppBar;
