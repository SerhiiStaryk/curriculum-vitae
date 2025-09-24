import { Box, Divider, Typography } from '@mui/material';

type EducationProps = {
  title: string;
  list: Array<{
    educationalInstitution: string;
    address: { country: string; city: string };
    degree: string;
    specialty: string;
    duration: { start: string; finish: string };
  }>;
};

export const Education = ({ title, list }: EducationProps) => {
  return (
    <Box>
      <Typography variant='h5'>{title.toUpperCase()}</Typography>
      <Divider />
      {list.map((item, index) => (
        <Box key={index}>
          <Box justifyContent='space-between'>
            <Typography fontWeight={500}>{item.educationalInstitution.toUpperCase()}</Typography>
            <Typography>{`${item.address.country}, ${item.address.city}`}</Typography>
          </Box>

          <Box justifyContent='space-between'>
            <Typography fontWeight={500}>{item.degree}</Typography>
            <Typography>{`${item.duration.start} - ${item.duration.finish}`}</Typography>
          </Box>

          <Typography>{item.specialty}</Typography>
        </Box>
      ))}
    </Box>
  );
};
