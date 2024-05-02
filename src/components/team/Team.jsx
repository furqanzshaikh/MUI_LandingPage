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
    objectFit: 'cover',
    borderRadius: 2
  };

  const cardStyles = {
    backgroundColor: '#212121',
    padding: '20px 10px 40px 10px',
    borderRadius: '16px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    height:260,

  };

  const teamMembers = [
    {
      img: img1,
      name: "Mark Carter",
      description: "Lorem ipsum dolor sit amet."
    },
    {
      img: img2,
      name: "Elijah Carter",
      description: "Lorem ipsum dolor sit amet."
    },
    {
      img: img3,
      name: "Marcus Thompson",
      description: "Lorem ipsum dolor sit amet consectetur."
    },
    {
      img: img4,
      name: "Isabella Lopez",
      description: "Lorem ipsum dolor sit."
    }
  ];

  return (
    <Box id='team' textAlign="center" sx={{ padding: "2vw" }} >
      <Typography variant="h4" gutterBottom color={iconColor}>
        MEET THE TEAM
      </Typography>
      <Typography variant="body1" gutterBottom color={iconColor}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum accusantium doloribus?
      </Typography>
      <Grid container spacing={3} justifyContent="center" marginTop={4}>
        {teamMembers.map((member, index) => (
          <Grid key={index} item xs={6} sm={3}>
            <Card sx={cardStyles}>
              <Avatar  src={member.img} alt={member.name} sx={imgstyles} />
              <Box mt={2}>
                <Typography variant="subtitle1" color="white">{member.name}</Typography>
                <Typography variant="body2" color="white">{member.description}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Team;
