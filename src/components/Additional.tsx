import { Box, Divider, Typography } from '@mui/material';

type AdditionalProps = {
  title: string;
  languages: string[];
  trainings: string[];
};

export const Additional = ({
  title,
  languages,
  trainings,
}: AdditionalProps) => (
  <Box mt={2}>
    <Typography variant='h5'>{title.toUpperCase()}</Typography>
    <Divider sx={{ mb: 1 }} />
    <Typography>
      <Typography component='span' fontWeight={700} display='inline'>
        Languages:
      </Typography>{' '}
      {languages.join('; ')}
    </Typography>
    <Typography mt={1}>
      <Typography component='span' fontWeight={700} display='inline'>
        Training:
      </Typography>{' '}
      {trainings.join('; ')}
    </Typography>
  </Box>
);
