import React from 'react';
import { Typography, Box, Grid, Card, Avatar } from '@mui/material';
import img1 from '../assets/team1.jpg';
import img2 from '../assets/team2.jpg';
import img3 from '../assets/team3.jpg';
import img4 from '../assets/team4.jpg';

function Team() {
  const iconColor = "white";
  const imgstyles = {
    width: '100%',
    height: '30vh',
    objectFit: 'contain',
    borderRadius: 0
  };

  return (
    <Box id='team' textAlign="center" sx={{ padding: "2vw" }} >
      <Typography variant="h4" gutterBottom color={iconColor}>
        MEET THE TEAM
      </Typography>
      <Typography variant="body1" gutterBottom color={iconColor}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum accusantium doloribus?
      </Typography>
      <Grid container spacing={3} justifyContent="center" marginTop={4}>
        {/* Displaying four cards side by side */}
        <Grid item xs={6} sm={3}>
          <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Avatar src={img1} alt="Service 1" sx={{ ...imgstyles }} className="centered-avatar" />
            <Box>
              <Typography variant="subtitle1" color="white">Mark Carter</Typography>
              <Typography variant="body2" color="white">Lorem ipsum dolor sit amet.</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Avatar src={img2} alt="Service 2" sx={{ ...imgstyles }} className="centered-avatar" />
            <Box>
              <Typography variant="subtitle1" color="white">Elijah Carter</Typography>
              <Typography variant="body2" color="white">Lorem ipsum dolor sit amet.</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Avatar src={img3} alt="Service 3" sx={{ ...imgstyles }} className="centered-avatar" />
            <Box>
              <Typography variant="subtitle1" color="white">Marcus Thompson</Typography>
              <Typography variant="body2" color="white">Lorem ipsum dolor sit amet consectetur.</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Avatar src={img4} alt="Service 4" sx={{ ...imgstyles}}  />
            <Box>
              <Typography variant="subtitle1" color="white">Isabella Lopez</Typography>
              <Typography variant="body2" color="white">Lorem ipsum dolor sit.</Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Team;
