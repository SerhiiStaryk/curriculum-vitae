import { Box, Divider, Link, Typography } from '@mui/material';

type SocialsProps = {
  title: string;
  list: { title: string; url: string; GitLab?: string }[];
};

export const Socials = ({ title, list }: SocialsProps) => (
  <Box mt={2}>
    <Typography variant='h5'>{title.toUpperCase()}</Typography>
    <Divider sx={{ mb: 1 }} />
    {list.map((item, index) => (
      <Typography mb='3px' key={index}>
        <Typography component='span' fontWeight={700} display='inline'>
          {item.title}:
        </Typography>{' '}
        <Link href={item.url} target='_blank' rel='noopener noreferrer'>
          {item.url}
        </Link>
      </Typography>
    ))}
  </Box>
);
