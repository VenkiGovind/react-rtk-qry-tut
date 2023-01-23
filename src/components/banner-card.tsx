import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import Image from '../images/plain_bg.jpg';
import { autoBatchEnhancer } from '@reduxjs/toolkit';
  
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const stylesBgImg = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    display: 'block',
    backgroundRepeat: 'no-repeat',
    height: 200
  }
};
const styles = {
  paperContainer: {
    backgroundColor: '#6C56AF',
    backgroundSize: "cover",
    display: 'block',
    backgroundRepeat: 'no-repeat',
    height: 200
  }
};

export const BannerCard = () => {
  return (

    <Paper >
      <div style={styles.paperContainer}>
        asdfadfasf
      </div>
      
    </Paper>

  )
}