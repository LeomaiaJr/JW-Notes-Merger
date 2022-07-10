import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  snackbar: {
    boxShadow: 'unset !important',
    minWidth: 'unset !important',
    fontSize: '14px !important',
    'font-weight': '500 !important',
    paddingTop: '2px !important',
    paddingBottom: '2px !important',

    '&& .MuiSvgIcon-root': {
      width: '24px !important',
      height: '24px !important',
    },
  },

  successSnackbar: {
    backgroundColor: `${theme.palette.success.main} !important`,
  },

  infoSnackbar: {
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
  errorSnackbar: {
    backgroundColor: `${theme.palette.error.main} !important`,
  },
}));
