import { Typography } from '@mui/material';

interface SoftSkillsProps {
  skills: string[];
}
export const SoftSkills: React.FC<SoftSkillsProps> = ({ skills }) => {
  return (
    <>
      {skills.map((skill, index) => (
        <Typography
          key={index}
          color={index % 2 === 0 ? 'primary' : 'secondary'}
          variant="h4"
          component="span"
          sx={{ fontWeight: 'regular', mx: 2 }}
        >
          {skill}
        </Typography>
      ))}
    </>
  );
};
