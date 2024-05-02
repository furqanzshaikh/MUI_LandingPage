import React, { useState } from 'react';
import { Box, Grid, Typography, TextField, TextareaAutosize, Button } from '@mui/material';
import { MdLocationOn, MdLocalPhone, MdEmail } from "react-icons/md";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <footer id='contact' style={{ backgroundColor: 'whitesmoke', padding: '2vw', color: 'black', marginTop: '5vw' }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Box sx={{ padding: '2vw', border: '1px solid #ccc', borderRadius: '8px' }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 900, letterSpacing: 2, fontSize: { xs: 25, md: 35 }, marginBottom: '1rem' }}>
              GET IN TOUCH
            </Typography>
            <Typography variant='body1' gutterBottom>
              Please fill out the form below to send us an email and we will get back to you as soon as possible.
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextareaAutosize
                    aria-label="Message"
                    minRows={4}
                    placeholder="Message"
                    style={{ width: '100%', padding: '8px', resize: 'none', marginTop: '10px' }}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" type="submit">
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ padding: '2vw', border: '1px solid #ccc', borderRadius: '8px' }}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong><MdLocationOn /> Address:</strong><br />
              4321 California St, San Francisco, CA 12345
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong><MdLocalPhone /> Phone:</strong><br />
              +1 123 456 1234
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong><MdEmail /> Email:</strong><br />
              info@company.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center',gap:3 }} mb={6} mt={6} >
        <FacebookIcon sx={{ color: 'rgb(25, 118, 210)', fontSize: 42, marginRight: '1rem' }} />
        <YouTubeIcon sx={{ color: 'rgb(25, 118, 210)', fontSize: 42, marginRight: '1rem' }} />
        <TwitterIcon sx={{ color: 'rgb(25, 118, 210)', fontSize: 42 }} />
      </Box>
    </footer>
  );
}

export default Footer;
