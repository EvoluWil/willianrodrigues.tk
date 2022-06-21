import { Box, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import { Work } from '../../../data/constants/works.constants';
import { StackIcon } from '../stack-icons/stack-icons.component';
import { WorkCardContainer } from './work-card.styles';

interface WorkCardProps {
  work: Work;
}

export const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  return (
    <WorkCardContainer>
      <Typography color="primary" variant="h4">
        {work.name}
      </Typography>
      <Typography
        variant="h6"
        component="p"
        display="flex"
        flexDirection="column"
      >
        {work.occupation}
        <Typography variant="caption">{work.period}</Typography>
      </Typography>
      <Typography color="primary" variant="h6" sx={{ mt: 4 }}>
        Responsabilidades
      </Typography>
      <List>
        {work.tasks.map(task => (
          <ListItem disablePadding key={task}>
            <ListItemIcon sx={{ color: theme => theme.palette.primary.main }}>
              <i className="fa fa-check" />
            </ListItemIcon>
            <Typography variant="caption" sx={{ my: 0.5 }}>
              {task}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Typography color="primary" variant="h6" sx={{ mt: 4 }}>
        Tecnologias
      </Typography>
      <Box display="flex" gap={1} sx={{ flexWrap: 'wrap' }}>
        {work.stacks.map(stack => (
          <Typography variant="h4" component="span" key={stack} color="primary">
            <StackIcon stack={stack} />
          </Typography>
        ))}
      </Box>
    </WorkCardContainer>
  );
};
