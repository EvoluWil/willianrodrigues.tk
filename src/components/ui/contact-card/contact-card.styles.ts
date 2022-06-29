import { Box, styled, Typography } from '@mui/material';
import { SiGooglemeet } from 'react-icons/si';

export const ContactCardContainer = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(4)};
  width: 300px;
  height: 300px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 220px;
    height: 220px;
  }

  * {
    cursor: pointer !important;
  }
  cursor: pointer;
  transition: background-color 0.5s;
  &:hover {
    background-color: rgba(80, 80, 80, 0.5);
  }
`;

export const Icon = styled('i')`
  left: 80%;
  top: 80%;
  transform: translate(-50%, -50%);
  position: absolute;
  opacity: 0.5;
  font-size: 100px !important;

  ${({ theme }) => theme.breakpoints.down('md')} {
    left: 80%;
    top: 80%;
    font-size: 60px !important;
  }
`;

export const MeetIcon = styled(SiGooglemeet)`
  left: 80%;
  top: 80%;
  transform: translate(-50%, -50%);
  position: absolute;
  font-size: 100px;
  opacity: 0.5;
  ${({ theme }) => theme.breakpoints.down('md')} {
    left: 80%;
    top: 80%;
    font-size: 60px;
  }
`;
