import React from 'react';
import { Typography } from '@mui/material';
import { Bounce } from 'react-reveal';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';

import './Heading.css';

const useStyles = makeStyles((theme) => ({
  heading: {
    backgroundColor: '#eee',
    color: theme.palette.slate.main,
    padding: '0 10px',

    //
    fontWeight: 'bolder',
    // letterSpacing: "5px",
    textShadow:
      '2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)',

    [theme.breakpoints.down('md')]: {
      fontSize: 30,
    },
    // "10px 10px 25px rgb(81,67,21), -10px 10px 25px rgb(81,67,21), -10px -10px 25px rgb(81,67,21),10px -10px 25px rgb(81,67,21)",
  },
  divider: {
    position: 'absolute',
    top: '50%',
    zIndex: -1,
    width: '100%',
    height: '1px',
    borderRadius: 20,
    border: 'none',
    background: 'linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b)',
    backgroundColor: 'gray',
    // transform: "transateX(-50%)",
  },
}));

function Heading({ heading, questionNo = '0' }) {
  const { color } = useSelector((state) => state.global);
  const classes = useStyles();
  return (
    <Bounce>
      <div className='heading' style={{ position: 'relative' }}>
        <Typography variant='h2' className={classes.heading}>
          {' '}
          {`< ${questionNo} />`}
        </Typography>
        <Typography variant='h2' className={classes.heading}>
          {' '}
          {heading}
        </Typography>
        <hr className={classes.divider} />
      </div>
    </Bounce>
  );
}

export default Heading;
