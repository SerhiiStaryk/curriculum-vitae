import { Box, Divider, Typography } from '@mui/material';

type NotableProject = {
  title: string;
  projects: { title: string; description: string }[];
};

export const NotableProjects = ({ title, projects }: NotableProject) => {
  return (
    <Box>
      <Typography variant='h5'>{title.toUpperCase()}</Typography>
      <Divider />
      {projects.map((project, index) => (
        <Box key={index}>
          <Typography fontWeight={500}>{project.title.toUpperCase()}</Typography>
          <Typography>{project.description}</Typography>
        </Box>
      ))}
    </Box>
  );
};
