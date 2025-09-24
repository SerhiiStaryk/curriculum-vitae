import { Box, Divider, Typography } from '@mui/material';

import CardExperience from './CardExperience';

type WorkExperienceProps = {
  title: string;
  workPlaces: {
    companyName: string;
    address: { country: string; city: string };
    position: string;
    duration: { start: string; finish: string };
    responsibilities: string[];
    techStack: string[];
  }[];
};

export const WorkExperience = ({ title, workPlaces }: WorkExperienceProps) => (
  <Box>
    <Typography variant='h5'>{title.toUpperCase()}</Typography>
    <Divider />
    {workPlaces.map((place, index) => (
      <CardExperience
        key={index}
        {...place}
      />
    ))}
  </Box>
);
