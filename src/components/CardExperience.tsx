import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Typography,
} from '@mui/material';

type CardExperienceProps = {
  companyName: string;
  address: { country: string; city: string };
  logo?: string;
  position: string;
  duration: { start: string; finish: string };
  responsibilities: string[];
  techStack: string[];
};
const CardExperience = ({
  companyName,
  address,
  logo,
  position,
  duration,
  responsibilities,
  techStack,
}: CardExperienceProps) => {
  const files = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}', {
    eager: true,
    as: 'url',
  }) as Record<string, string>;

  let logoUrl: string | undefined = undefined;

  if (logo) {
    const fileName = logo.replace('../assets/images/', '').replace('./', '');
    const matchKey = Object.keys(files).find((k) => k.endsWith(fileName));

    logoUrl = matchKey ? files[matchKey] : undefined;
  }

  return (
    <>
      <Stack
        direction='row'
        spacing={2}
        alignItems='center'
        justifyContent='space-between'
      >
        <Stack direction='row' spacing={2} alignItems='center'>
          {logoUrl ? (
            <Avatar variant='square' alt={companyName} src={logoUrl} />
          ) : null}

          <Box>
            <Typography fontWeight={500}>
              {companyName.toUpperCase()}
            </Typography>
            <Typography>{position}</Typography>
          </Box>
        </Stack>

        <Box justifyContent='space-between'>
          <Typography>{`${address.country}, ${address.city}`}</Typography>
          <Typography>{`${duration.start} - ${duration.finish}`}</Typography>
        </Box>
      </Stack>

      <List>
        {responsibilities.map((item, index) => (
          <ListItem key={index} sx={{ p: 0 }}>
            <ListItemIcon sx={{ minWidth: '30px' }}>
              <ChevronRightIcon fontSize='small' />
            </ListItemIcon>
            {item}
          </ListItem>
        ))}
      </List>

      {techStack.length > 0 && (
        <Typography mb={2}>
          <Typography
            component='span'
            fontStyle='italic'
            display='inline'
            fontWeight={500}
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
