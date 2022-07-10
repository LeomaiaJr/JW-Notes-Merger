import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { styled as muiStyled } from '@mui/material/styles';

interface DropAreaProps {
  active: 'true' | 'false';
}

export const DropArea = muiStyled(Stack)<DropAreaProps>`
  ${({ theme, active }) => `
    align-items: center;
    flex: 1;
    justify-content: center;
    margin-top: 16px;
    border-radius: 8px;
    border: 3px dashed ${
      active === 'true' ? theme.palette.primary.main : theme.palette.grey[500]
    };
    color: ${
      active === 'true' ? theme.palette.primary.main : theme.palette.grey[500]
    };
    cursor: pointer;
    @media (max-width: 600px) {
      width: 100%;
    }
  `}
`;

export const FileDataWrapper = muiStyled(Box)`
  ${({ theme }) => `
    border-radius: 8px;
    border: 3px solid ${theme.palette.primary.main};
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 600px) {
      width: 100%;
    }
  `}
`;

export const IconWrapper = muiStyled(Box)`
  ${({ theme }) => `
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${theme.palette.grey[800]};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-left: 16px;
  `}
`;

export const CustomTypography = muiStyled(Typography)`
  ${({ theme }) => `

  @media (max-width: 600px) {
    width: 180px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  `}
`;
