import React from 'react';
import { Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { MdFmdGood, MdPersonAddAlt1, MdOutlineBookmark, MdElectricBolt } from "react-icons/md";

const Features = () => {
  const styles = {
    card: { backgroundColor: "#343a40", color: "#f8f9fa" },
    cardContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      flexDirection: "column",
    },
  };

  return (
    <Box id='features' sx={{ padding: "0 10px", marginBottom: "6vw" }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ marginBottom: "4rem" }}>
        Features
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ ...styles.card }}>
            <CardContent style={{ ...styles.cardContent }}>
              <Typography variant="h6" gutterBottom>
                <MdPersonAddAlt1 size={40} />
              </Typography>
              <Typography variant="body1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, ratione.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ ...styles.card }}>
            <CardContent style={{ ...styles.cardContent }}>
              <Typography variant="h6" gutterBottom>
                <MdFmdGood size={40} />
              </Typography>
              <Typography variant="body1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, ratione.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ ...styles.card }}>
            <CardContent style={{ ...styles.cardContent }}>
              <Typography variant="h6" gutterBottom>
                <MdOutlineBookmark size={40} />
              </Typography>
              <Typography variant="body1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, ratione.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ ...styles.card }}>
            <CardContent style={{ ...styles.cardContent }}>
              <Typography variant="h6" gutterBottom>
                <MdElectricBolt size={40} />
              </Typography>
              <Typography variant="body1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, ratione.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
