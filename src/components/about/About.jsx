import React from 'react';
import { Box, Avatar, Typography, Grid } from '@mui/material';
import sideimg from '../assets/peakpx.jpg';

const About = () => {
  const styles = {
    avatar: {
      width: '100%',
      height: 'auto',
      maxWidth: '100%',
      maxHeight: '50vh',
      borderRadius: 0,
    },
    textContainer: {
      textAlign: 'center',
    },
  };

  return (
    <Grid id='about' mb={10} container spacing={2}>
      <Grid item xs={12} md={6}>
        <Avatar 
          alt="Side Image" 
          src={sideimg} 
          sx={styles.avatar} 
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={styles.textContainer}>
          <Typography variant="h3" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
