import { Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled as muiStyled } from '@mui/material/styles';

export const Wrapper = muiStyled(Stack)`
  ${({ theme }) => `
    background-color: ${
      theme.palette.mode === 'dark' ? '#272727' : theme.palette.background.paper
    };
    alignItems: center;
    color: ${theme.palette.text.primary};
    border-radius: 8px;
    padding: 32px;
    height: 80%;
    @media (max-width: 600px) {
      padding: 16px;
    }
  `}
`;

export const CustomDivider = muiStyled(Divider)`
  ${({ theme }) => `
    margin-left: -32px;
    margin-right: -32px;
    margin-top: 16px;
    @media (max-width: 600px) {
      margin-left: -16px;
      margin-right: -16px;
    }
  `}
`;
