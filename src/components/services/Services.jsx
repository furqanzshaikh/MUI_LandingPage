import React from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { Wifi, MobileFriendly, Tv, DirectionsCar, MusicNote, Restaurant } from '@mui/icons-material';

function Service() {
  const iconColor = "white";

  const servicesData = {
    service1: {
      icon: <Wifi fontSize="large" color={iconColor} />,
      title: "Lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem"
    },
    service2: {
      icon: <MobileFriendly fontSize="large" color={iconColor} />,
      title: "Lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem"
    },
    service3: {
      icon: <Tv fontSize="large" color={iconColor} />,
      title: "Lorem ipsum dolor sit amet.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem"
    },
    service4: {
      icon: <DirectionsCar fontSize="large" color={iconColor} />,
      title: "Lorem, ipsum dolor.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem"
    },
    service5: {
      icon: <MusicNote fontSize="large" color={iconColor} />,
      title: "Lorem ipsum dolor sit.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem"
    },
    service6: {
      icon: <Restaurant fontSize="large" color={iconColor} />,
      title: "Lorem ipsum dolor sit amet.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem"
    }
  };

  return (
    <Box id='services' textAlign="center" sx={{ padding: "2vw" }}>
      <Typography mb={3}  variant="h4" gutterBottom color={iconColor}>
        Our Services
      </Typography>
      <Typography variant="body1" gutterBottom color={iconColor}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Grid container spacing={3} justifyContent="center" marginTop={4}>
        {Object.entries(servicesData).map(([key, value]) => (
          <Grid key={key} item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: 'transparent' }}>
              <CardContent sx={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <Box sx={{ backgroundColor: '#3f51b5', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom:'10px' }}>
                  {value.icon}
                </Box>
                <Box>
                  <Typography variant="h6" mb={4} mt={2} color="white">{value.title}</Typography>
                  <Typography variant="subtitle2" color="white">{value.description}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Service;
