import React from 'react';
import { Typography, Box, Grid, Card, Avatar } from '@mui/material';

const Testimonial = () => {
  const testimonialData = [
    {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyYPE-EuYCKkmAIcnHHQP5clEGWDBetgbIOJ3fruNiA&s',
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem",
      author: "- Johnathan Doe"
    },
    {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlgVUiuTQbmj_jO_W1nmX8bzbXS2DDxMStn8FdSPyK7SSAKVnHXZjTx9764JdwzGSWd84&usqp=CAU',
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem",
      author: "- Jhon Doe"
    },
    {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlEsWpZ5KvilLs3ToZTRdFpu2UVlj_AGIaSQ&s',
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem",
      author: "- Johnathan Doe"
    },
    {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_7ADjOl4MdP8kdTTaUy_OvNEYla39n8Ke6djuxRt4Q&s',
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem",
      author: "- Jhon Doe"
    },
    {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_cEyvNF7hheKviSGEyDphFWxIDfRUX0wjvuOKZGja94dR3NoIA9YnDrViKexUgZSZA8&usqp=CAU',
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem",
      author: "- Johnathan Doe"
    },
    {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohtzvFny0kyBRr0Uux-BtPh7o6TYJeAt8O2CGo4_qhv17MFV8PNATGNduVBkEXWMUwNw&usqp=CAU',
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe accusamus nulla repudiandae eaque fuga, Culpa quia adipisci dolore vero accusantium numquam quod autem",
      author: "- Jhon Doe"
    }
  ];

  return (
    <Box id='testimonials' textAlign="center" sx={{ padding: "2vw" }} mb={3} mt={3}>
      <Typography variant="h3" gutterBottom color="white" mb={3}>
        WHAT OUR CLIENTS SAY
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {testimonialData.map((testimonial, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card sx={{ backgroundColor: 'transparent' }}>
              <Box sx={{ display: 'flex', alignItems: 'initial', padding: '20px' }}>
                <Avatar src={testimonial.avatar} sx={{ margin: '20px 0' }} />
                <Box sx={{ textAlign: 'initial', marginLeft: '20px' }}>
                  <Typography  variant="subtitle1" color="white" sx={{ marginTop: '10px' , fontStyle:'italic'}}>
                    {testimonial.text}
                  </Typography>
                  <Typography variant="h6" color="white">{testimonial.author}</Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Testimonial;
