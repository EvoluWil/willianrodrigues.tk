import { Box, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import { Work } from "../../../data/models/work.model";
import { StackIcon } from "../stack-icons/stack-icons.component";
import { WorkCardContainer } from "./work-card.styles";

interface WorkCardProps {
  work: Work;
  responsibilitiesLabel: string;
  technologiesLabel: string;
}

export const WorkCard: React.FC<WorkCardProps> = ({
  work,
  responsibilitiesLabel,
  technologiesLabel,
}) => {
  return (
    <WorkCardContainer>
      <a
        href={work.page}
        style={{ cursor: "pointer" }}
        rel="noreferrer"
        target="_blank"
      >
        <Typography color="primary" variant="h4" sx={{ cursor: "pointer" }}>
          <i className="fa fa-globe" style={{ marginRight: "4px" }} />
          {work.name}
        </Typography>
      </a>
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
        {responsibilitiesLabel}
      </Typography>
      <List>
        {work.tasks.map((task) => (
          <ListItem disablePadding key={task}>
            <ListItemIcon sx={{ color: (theme) => theme.palette.primary.main }}>
              <i className="fa fa-check" />
            </ListItemIcon>
            <Typography variant="caption" sx={{ my: 0.5 }}>
              {task}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Typography color="primary" variant="h6" sx={{ mt: 4, mb: 2 }}>
        {technologiesLabel}
      </Typography>
      <Box display="flex" gap={1} sx={{ flexWrap: "wrap" }}>
        {work.stacks.map((stack) => (
          <Typography variant="h4" component="span" key={stack} color="primary">
            <StackIcon stack={stack} />
          </Typography>
        ))}
      </Box>
    </WorkCardContainer>
  );
};
