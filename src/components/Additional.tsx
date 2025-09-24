import { Box, Divider, Typography } from '@mui/material';

type AdditionalProps = {
  title: string;
  languages: string[];
  trainings: string[];
};

export const Additional = ({ title, languages, trainings }: AdditionalProps) => (
  <Box>
    <Typography variant='h5'>{title.toUpperCase()}</Typography>
    <Divider />
    <Typography>
      <Typography
        component='span'
        fontWeight={700}
        display='inline'
      >
        Languages:
      </Typography>{' '}
      {languages.join('; ')}
    </Typography>
    <Typography>
      <Typography
        component='span'
        fontWeight={700}
        display='inline'
      >
        Training:
      </Typography>{' '}
      {trainings.join('; ')}
    </Typography>
  </Box>
);
