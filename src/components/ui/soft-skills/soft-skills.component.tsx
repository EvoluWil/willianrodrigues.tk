import { Box, useTheme } from '@mui/material';
import { useMemo } from 'react';
import { TagCloud } from 'react-tagcloud';

interface SoftSkillsProps {
  skills: string[];
}
export const SoftSkills: React.FC<SoftSkillsProps> = ({ skills }) => {
  const theme = useTheme();
  const data = useMemo(() => {
    return skills.map((skill, index) => ({
      value: skill,
      count: index,
      color:
        index % 2 === 0
          ? theme.palette.primary.main
          : theme.palette.secondary.main
    }));
  }, [skills, theme]);

  return (
    <Box
      width={'100%'}
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <TagCloud minSize={16} maxSize={48} tags={[...data]} />
    </Box>
  );
};
