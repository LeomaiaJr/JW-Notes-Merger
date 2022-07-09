import { FunctionComponent } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { useAppTheme } from '../../hooks/useTheme';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';

const ThemeSelector: FunctionComponent = () => {
  const { theme, setTheme } = useAppTheme();

  return (
    <ToggleButtonGroup
      exclusive
      aria-label="Theme"
      value={theme}
      onChange={(_, value) => {
        if (value) setTheme(value as 'light' | 'dark');
      }}
    >
      <ToggleButton value="light">
        <BrightnessHighIcon
          style={{
            color: '#fff',
          }}
        />
      </ToggleButton>
      <ToggleButton value="dark">
        <Brightness2Icon
          style={{
            color: '#fff',
          }}
        />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ThemeSelector;
