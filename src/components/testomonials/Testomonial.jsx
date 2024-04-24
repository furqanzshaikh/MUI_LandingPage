import React from 'react';
import { Typography, Box, Grid, Card, Avatar } from '@mui/material';

const Testimonial = () => {
  return (
    <Box id='testimonials' textAlign="center" sx={{ padding: "2vw" }} mb={3} mt={3}>
      <Typography variant="h3" gutterBottom color="white" mb={3}>
        WHAT OUR CLIENTS SAY
      </Typography>
      <Grid container spacing={3} justifyContent="center">
      
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: 'transparent' }}>
            <Box sx={{ display: 'flex', alignItems: 'initial', padding: '20px' }}>
              <Avatar src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyYPE-EuYCKkmAIcnHHQP5clEGWDBetgbIOJ3fruNiA&s'} sx={{ margin: '20px 0' }} />
              <Box sx={{ textAlign: 'initial', marginLeft: '20px' }}> {/* Added margin for gap */}
                <Typography  variant="subtitle1" color="white" sx={{ marginTop: '10px' , fontStyle:'italic'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem
                </Typography>
                <Typography variant="h6" color="white">- Johnathan Doe</Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: 'transparent' }}>
            <Box sx={{ display: 'flex', alignItems: 'initial', padding: '20px' }}>
              <Avatar src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlgVUiuTQbmj_jO_W1nmX8bzbXS2DDxMStn8FdSPyK7SSAKVnHXZjTx9764JdwzGSWd84&usqp=CAU'} sx={{ margin: '20px 0' }} />
              <Box sx={{ textAlign: 'initial', marginLeft: '20px' }}> {/* Added margin for gap */}
                <Typography  variant="subtitle1" color="white" sx={{ marginTop: '10px' , fontStyle:'italic'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem
                </Typography>
                <Typography variant="h6" color="white">- Jhon Doe</Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: 'transparent'}}>
            <Box sx={{ display: 'flex', alignItems: 'initial', padding: '20px' }}>
              <Avatar src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlEsWpZ5KvilLs3ToZTRdFpu2UVlj_AGIaSQ&s'} sx={{ margin: '20px 0' }} />
              <Box sx={{ textAlign: 'initial', marginLeft: '20px' }}> {/* Added margin for gap */}
                <Typography  variant="subtitle1" color="white" sx={{ marginTop: '10px' , fontStyle:'italic'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem
                </Typography>
                <Typography variant="h6" color="white">- Johnathan Doe</Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: 'transparent' }}>
            <Box sx={{ display: 'flex', alignItems: 'initial', padding: '20px' }}>
              <Avatar src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_7ADjOl4MdP8kdTTaUy_OvNEYla39n8Ke6djuxRt4Q&s'} sx={{ margin: '20px 0' }} />
              <Box sx={{ textAlign: 'initial', marginLeft: '20px' }}> {/* Added margin for gap */}
                <Typography  variant="subtitle1" color="white" sx={{ marginTop: '10px' , fontStyle:'italic'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem
                </Typography>
                <Typography variant="h6" color="white">- Jhon Doe</Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: 'transparent' }}>
            <Box sx={{ display: 'flex', alignItems: 'initial', padding: '20px' }}>
              <Avatar src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_cEyvNF7hheKviSGEyDphFWxIDfRUX0wjvuOKZGja94dR3NoIA9YnDrViKexUgZSZA8&usqp=CAU'} sx={{ margin: '20px 0' }} />
              <Box sx={{ textAlign: 'initial', marginLeft: '20px' }}> {/* Added margin for gap */}
                <Typography  variant="subtitle1" color="white" sx={{ marginTop: '10px' , fontStyle:'italic'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem
                </Typography>
                <Typography variant="h6" color="white">- Johnathan Doe</Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: 'transparent' }}>
            <Box sx={{ display: 'flex', alignItems: 'initial', padding: '20px' }}>
              <Avatar src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohtzvFny0kyBRr0Uux-BtPh7o6TYJeAt8O2CGo4_qhv17MFV8PNATGNduVBkEXWMUwNw&usqp=CAU'}  sx={{ margin: '20px 0' }} />
              <Box sx={{ textAlign: 'initial', marginLeft: '20px' }}> {/* Added margin for gap */}
                <Typography  variant="subtitle1" color="white" sx={{ marginTop: '10px' , fontStyle:'italic'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem
                </Typography>
                <Typography variant="h6" color="white">- Jhon Doe</Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Testimonial;
