import { Box, Divider, Typography } from '@mui/material';

type TechnicalSkillsProps = {
  title: string;
  tolls: string[];
  languages: string[];
  libraries: string[];
};

export const TechnicalSkills = ({
  title,
  tolls,
  languages,
  libraries,
}: TechnicalSkillsProps) => (
  <Box>
    <Typography variant='h6'>{title.toUpperCase()}</Typography>
    <Divider sx={{ mb: 1 }} />
    <Typography>
      <Typography component='span' fontWeight={700} display='inline'>
        Tools:
      </Typography>{' '}
      {tolls.join(', ')}
    </Typography>
    <Typography>
      <Typography component='span' fontWeight={700} display='inline'>
        Languages:
      </Typography>{' '}
      {languages.join(', ')}
    </Typography>
    <Typography>
      <Typography component='span' fontWeight={700} display='inline'>
        Libraries:
      </Typography>{' '}
      {libraries.join(', ')}
    </Typography>
  </Box>
);
