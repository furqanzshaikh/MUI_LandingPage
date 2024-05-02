import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, useMediaQuery, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { styled } from '@mui/system';

const RootAppBar = styled(AppBar)(({ theme }) => ({
  flexGrow: 1,
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
}));

const navbtnstyle = { color: "#f8f9fa",cursor:'pointer',fontSize:15 };

function Navbar() {
  const isSmallScreen = useMediaQuery('(max-width:800px)');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <RootAppBar sx={{ backgroundColor: "#212529", padding: "1vw 0" }} position="sticky">
      <Toolbar sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <TitleTypography sx={navbtnstyle} style={{fontSize:25}} onClick={() => scrollToSection('home')} variant="h6" >
          Logo
        </TitleTypography>
        {isSmallScreen ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => { scrollToSection('features'); handleMenuClose(); }}>Features</MenuItem>
              <MenuItem onClick={() => { scrollToSection('about'); handleMenuClose(); }}>About</MenuItem>
              <MenuItem onClick={() => { scrollToSection('contact'); handleMenuClose(); }}>Contact</MenuItem>
              <MenuItem onClick={() => { scrollToSection('testimonials'); handleMenuClose(); }}>Testimonials</MenuItem>
              <MenuItem onClick={() => { scrollToSection('team'); handleMenuClose(); }}>Team</MenuItem>
              <MenuItem onClick={() => { scrollToSection('services'); handleMenuClose(); }}>Services</MenuItem>
              <MenuItem onClick={() => { scrollToSection('gallery'); handleMenuClose(); }}>Gallery</MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{display:'flex' , gap:3}}>
            <Button sx={navbtnstyle} onClick={() => scrollToSection('gallery')}>Gallery</Button>
            <Button sx={navbtnstyle} onClick={() => scrollToSection('services')}>Services</Button>
            <Button sx={navbtnstyle} onClick={() => scrollToSection('features')}>Features</Button>
            <Button sx={navbtnstyle} onClick={() => scrollToSection('contact')}>Contact</Button>
            <Button sx={navbtnstyle} onClick={() => scrollToSection('about')}>About</Button>
            <Button sx={navbtnstyle} onClick={() => scrollToSection('testimonials')}>Testimonials</Button>
            <Button sx={navbtnstyle} onClick={() => scrollToSection('team')}>Team</Button>
           
          </Box>
        )}
      </Toolbar>
    </RootAppBar>
  );
}

export default Navbar;
