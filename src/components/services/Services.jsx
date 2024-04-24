import React from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { Wifi, MobileFriendly, Tv, DirectionsCar, MusicNote, Restaurant } from '@mui/icons-material';

function Service() {
  const iconColor = "white";

  return (
    <Box id='services' textAlign="center" sx={{ padding: "2vw" }}>
      <Typography mb={3}  variant="h4" gutterBottom color={iconColor}>
        Our Services
      </Typography>
      <Typography variant="body1" gutterBottom color={iconColor}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Grid container spacing={3} justifyContent="center" marginTop={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: 'transparent' }}>
            <CardContent sx={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
              <Box sx={{ backgroundColor: '#3f51b5', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom:'10px' }}>
                <Wifi fontSize="large" color={iconColor} />
              </Box>
              <Box>
                <Typography variant="h6" mb={4} mt={2} color="white">Lorem ipsum dolor sit.</Typography>
                <Typography variant="subtitle2" color="white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: 'transparent' }}>
            <CardContent sx={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
              <Box sx={{ backgroundColor: '#f44336', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom:'10px' }}>
                <MobileFriendly fontSize="large" color={iconColor} />
              </Box>
              <Box>
                <Typography variant="h6" mb={4} mt={2} color="white">Lorem ipsum dolor sit.</Typography>
                <Typography variant="subtitle2" color="white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: 'transparent' }}>
            <CardContent sx={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
              <Box sx={{ backgroundColor: '#4caf50', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom:'10px' }}>
                <Tv fontSize="large" color={iconColor} />
              </Box>
              <Box>
                <Typography variant="h6" mb={4} mt={2} color="white">Lorem ipsum dolor sit amet.</Typography>
                <Typography variant="subtitle2" color="white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: 'transparent' }}>
            <CardContent sx={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
              <Box sx={{ backgroundColor: '#ff9800', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom:'10px' }}>
                <DirectionsCar fontSize="large" color={iconColor} />
              </Box>
              <Box>
                <Typography variant="h6" color="white">Lorem, ipsum dolor.</Typography>
                <Typography variant="subtitle2" mb={4} mt={2} color="white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: 'transparent' }}>
            <CardContent sx={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
              <Box sx={{ backgroundColor: '#9c27b0', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom:'10px' }}>
                <MusicNote fontSize="large" color={iconColor} />
              </Box>
              <Box>
                <Typography variant="h6" color="white">Lorem ipsum dolor sit.</Typography>
                <Typography variant="subtitle2" mb={4} mt={2} color="white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: 'transparent' }}>
            <CardContent sx={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
              <Box sx={{ backgroundColor: '#795548', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom:'10px' }}>
                <Restaurant fontSize="large" color={iconColor} />
              </Box>
              <Box>
                <Typography variant="h6" color="white">Lorem ipsum dolor sit amet.</Typography>
                <Typography variant="subtitle2" mb={4} mt={2} color="white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Service;
