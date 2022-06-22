import { Typography } from '@mui/material';
import { StacksIcons } from '../../../data/constants/stack-icons.constant';

export const SkillsIcons = () => {
  return (
    <>
      {Object.values(StacksIcons).map(({ icon, label }) => (
        <Typography key={label} variant="h2" mx={1}>
          {icon}
        </Typography>
      ))}
    </>
  );
};
