import { Avatar, Box, Divider, Stack, Typography } from '@mui/material';

type EducationProps = {
  title: string;
  list: Array<{
    logo?: string;
    educationalInstitution: string;
    address: { country: string; city: string };
    degree: string;
    specialty: string;
    duration: { start: string; finish: string };
  }>;
};

export const Education = ({ title, list }: EducationProps) => {
  const files = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}', {
    eager: true,
    as: 'url',
  }) as Record<string, string>;

  return (
    <Box mt={2}>
      <Typography variant='h5'>{title.toUpperCase()}</Typography>
      <Divider sx={{ mb: 1 }} />
      {list.map((item, index) => {
        let logoUrl: string | undefined = undefined;

        if (item.logo) {
          const fileName = item.logo
            .replace('../assets/images/', '')
            .replace('./', '');
          const matchKey = Object.keys(files).find((k) => k.endsWith(fileName));

          logoUrl = matchKey ? files[matchKey] : undefined;
        }

        return (
          <Box key={index} mt={2}>
            <Stack direction='row' justifyContent='space-between'>
              <Stack direction='row' spacing={2} alignItems='center'>
                {logoUrl ? (
                  <Avatar
                    variant='square'
                    alt={item.educationalInstitution}
                    src={logoUrl}
                  />
                ) : null}

                <Box>
                  <Typography fontWeight={500}>
                    {item.educationalInstitution.toUpperCase()}
                  </Typography>
                  <Typography>{item.degree}</Typography>
                </Box>
              </Stack>

              <Box>
                <Typography>{`${item.address.country}, ${item.address.city}`}</Typography>
                <Typography>{`${item.duration.start} - ${item.duration.finish}`}</Typography>
              </Box>
            </Stack>

            <Typography mt={1}>{item.specialty}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};
