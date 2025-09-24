import { Paper } from '@mui/material';

export const PageWrapper = (props: React.ComponentProps<typeof Paper>) => (
  <Paper
    sx={{
      margin: '20px auto',
      maxWidth: 'calc(100% - 40px)',
      width: '1200px',
      padding: '40px',
    }}
    {...props}
  />
);
