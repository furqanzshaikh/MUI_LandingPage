import React, { useState } from 'react';
import { Box,Grid, Typography, TextField, TextareaAutosize, Button } from '@mui/material';
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
    <footer  id='contact' style={{ backgroundColor: 'whitesmoke', padding: '2vw', color: 'black',marginTop:'5vw' }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8} sx={{ padding: { xs: 2, md: 4 } }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 900, letterSpacing: 2, fontSize: { xs: 25, md: 35 } }}>
            GET IN TOUCH
          </Typography>
          <Typography variant='subtitle1'>
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
        </Grid>
        <Grid item xs={12} md={4} marginTop={{ xs: 4, md: 0 }}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h6" gutterBottom>
                Contact Info
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <strong><MdLocationOn /> Address:</strong><br />
                4321 California St, San Francisco, CA 12345
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <strong><MdLocalPhone /> Phone:</strong><br />
                +1 123 456 1234
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <strong><MdEmail /> Email:</strong><br />
                info@company.com
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  {/* <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' ,gap:"2vw"}}>
  <FacebookIcon sx={{ color: 'black', fontSize: 42 }} />
  <YouTubeIcon sx={{ color: 'black', fontSize: 42 }} />
  <TwitterIcon sx={{ color: 'black', fontSize: 42 }} />
</Box> */}

    </footer>
  );
}

export default Footer;
