import React from 'react';
import { Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { MdFmdGood, MdPersonAddAlt1, MdOutlineBookmark, MdElectricBolt } from "react-icons/md";

const cardData = [
  {
    icon: <MdPersonAddAlt1 size={40} />,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, ratione."
  },
  {
    icon: <MdFmdGood size={40} />,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, ratione."
  },
  {
    icon: <MdOutlineBookmark size={40} />,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, ratione."
  },
  {
    icon: <MdElectricBolt size={40} />,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, ratione."
  }
];

const Features = () => {
  const styles = {
    card: { 
      backgroundColor: "#343a40", 
      color: "#f8f9fa", 
      padding: "20px", // Added padding
      borderRadius: "10px", // Added border radius
      
    },
    cardContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      flexDirection: "column",
      height: "100%",
    },
    component: {
      padding: "0 20px", // Added padding to the component
      marginBottom: "3rem", // Added margin bottom to the component
    },
  };

  return (
    <Box id='features' sx={{ ...styles.component }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ marginBottom: "2rem" }}>
        Features
      </Typography>
      <Grid container spacing={4}>
        {cardData.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Card sx={{ ...styles.card }}>
              <CardContent style={{ ...styles.cardContent }}>
                <Typography variant="h6" gutterBottom>
                  {item.icon}
                </Typography>
                <Typography variant="body1">
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
