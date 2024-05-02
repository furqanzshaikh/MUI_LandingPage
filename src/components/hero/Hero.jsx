import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import img from '../assets/185915.jpg';

const Hero = () => {
  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom:'5vw'
    },
    text: {
      textAlign: 'center',
      color: '#f8f9fa',
      marginBottom: '2rem',
    },
    button: {
      marginBottom: '2rem',
      backgroundColor: "#343a40",
      padding: '0.7vw 2vw',
      '&:hover': {
        backgroundColor: '#212529',
      },
    },
  };

  return (
    <Box sx={styles.container} id='home'>
      <Box sx={styles.text}>
        <Typography sx={{ color: "#ffff", fontWeight: 500 }} variant="h3">GameVerse</Typography>
        <Typography sx={{ color: "#ffff", fontWeight: 500 }} variant="h3">Unleash Your Gaming Passion!</Typography>
      </Box>
      <Button variant="contained" sx={styles.button}>Learn More</Button>
    </Box>
  );
};

export default Hero;
