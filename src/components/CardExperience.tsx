import { Box, List, ListItem, Typography } from '@mui/material';

type CardExperienceProps = {
  companyName: string;
  address: { country: string; city: string };
  position: string;
  duration: { start: string; finish: string };
  responsibilities: string[];
  techStack: string[];
};

const CardExperience = ({
  companyName,
  address,
  position,
  duration,
  responsibilities,
  techStack,
}: CardExperienceProps) => {
  return (
    <>
      <Box justifyContent='space-between'>
        <Typography fontWeight={500}>{companyName.toUpperCase()}</Typography>
        <Typography>{`${address.country}, ${address.city}`}</Typography>
      </Box>

      <Box justifyContent='space-between'>
        <Typography>{position}</Typography>
        <Typography>{`${duration.start} - ${duration.finish}`}</Typography>
      </Box>

      <List>
        {responsibilities.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>

      {techStack.length > 0 && (
        <Typography my={10}>
          <Typography
            component='span'
            fontStyle='italic'
            display='inline'
          >
            Tech stack:
          </Typography>{' '}
          {techStack.join(', ')}
        </Typography>
      )}
    </>
  );
};

export default CardExperience;
