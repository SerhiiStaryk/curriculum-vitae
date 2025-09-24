import { Box, Divider, Typography } from '@mui/material';

type TechnicalSkillsProps = {
  title: string;
  tolls: string[];
  languages: string[];
  libraries: string[];
};

export const TechnicalSkills = ({ title, tolls, languages, libraries }: TechnicalSkillsProps) => (
  <Box>
    <Typography variant='h5'>{title.toUpperCase()}</Typography>
    <Divider />
    <Typography>
      <Typography
        component='span'
        fontWeight={700}
        display='inline'
      >
        Tools:
      </Typography>{' '}
      {tolls.join(', ')}
    </Typography>
    <Typography>
      <Typography
        component='span'
        fontWeight={700}
        display='inline'
      >
        Languages:
      </Typography>{' '}
      {languages.join(', ')}
    </Typography>
    <Typography>
      <Typography
        component='span'
        fontWeight={700}
        display='inline'
      >
        Libraries:
      </Typography>{' '}
      {libraries.join(', ')}
    </Typography>
  </Box>
);
