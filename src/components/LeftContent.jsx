import { Box, Divider, IconButton, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import socialData from 'db/socialInfo';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  sideContainer: {
    position: 'fixed',
    top: 0,
    width: '100px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

const LeftContent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.sideContainer} sx={{ left: 0 }}>
      <Stack>
        {socialData.map(({ url, Icon, id }) => (
          <IconButton
            key={`social-icon${id}`}
            onClick={() => window.open(url)}
            sx={{ width: '50px', height: '50px' }}
            aria-label='delete'
            color='slate'
          >
            <Icon />
          </IconButton>
        ))}
      </Stack>
      <Divider
        sx={{
          background: 'rebeccapurple',
          height: '100px',
          width: '1px',
        }}
        color='secondary'
        orientation='column'
      />
    </Box>
  );
};

export default LeftContent;
