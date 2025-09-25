import { Box, Link, Stack, Typography } from '@mui/material';

import { formatPhoneNumber } from '../utils';

type PageTitleProps = {
  firstName: string;
  lastName: string;
  contactNo: string;
  address: {
    country: string;
    city: string;
  };
  email: string;
};

export const PageTitle = ({
  firstName,
  lastName,
  contactNo,
  address,
  email,
}: PageTitleProps) => {
  const { country, city } = address;
  const contactNumber = formatPhoneNumber(contactNo);

  return (
    <Box component='header' sx={{ width: '100%', py: 4 }}>
      <Stack spacing={1} alignItems='center'>
        <Typography variant='h4' textAlign='center'>
          {`${firstName} ${lastName}`.toUpperCase()}
        </Typography>

        <Typography variant='h5' textAlign='center'>
          <Link href={`tel:${contactNo}`} underline='hover'>
            {contactNumber}
          </Link>{' '}
          |{' '}
          <Link href={`mailto:${email}`} underline='hover'>
            {email}
          </Link>{' '}
          |{' '}
          <Typography component='span'>
            {`${country}, ${city}`.toUpperCase()}
          </Typography>
        </Typography>
      </Stack>
    </Box>
  );
};
