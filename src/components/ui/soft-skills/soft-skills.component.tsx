import { Typography } from '@mui/material';
import { softSkills } from '../../../data/constants/soft-skills.constant';

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
//className="flex items-center justify-center lg:mt-16 flex-wrap w-5/6 md:w-full xl:w-5/6">
