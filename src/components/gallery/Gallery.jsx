import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box,Typography } from '@mui/material';

export default function Gallery() {

  const itemData = [
    {
      img: 'https://assets.vg247.com/current//2018/05/red_dead_redemption_2_cover_art_1.jpg',
      title: 'Red Dead Redemption',
    },
    {
      img: 'https://m.media-amazon.com/images/I/81AhOtq3MIL._SY522_.jpg',
      title: 'Fallout 3',
    },
    {
      img: 'https://assets.goal.com/images/v3/blt679f57c2115ccd2c/GettyImages-1409223178.jpg?format=webp',
      title: 'FIFA 2023',
    },
    {
      img: 'https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1364906194.jpg',
      title: 'GTA 5',
    },
    {
      img: 'https://c4.wallpaperflare.com/wallpaper/60/204/1005/auto-bellic-covers-game-wallpaper-preview.jpg',
      title: 'GTA 4',
    },
    {
      img: 'https://c4.wallpaperflare.com/wallpaper/960/782/399/call-of-duty-call-of-duty-modern-warfare-2-video-game-art-video-games-video-game-cover-hd-wallpaper-preview.jpg',
      title: 'COD Warfare 3',
    },
   
  ];
  

  return (
    <Box id='gallery' sx={{ display: 'flex', justifyContent: 'center' }} mb={10} mt={3}>
      <ImageList sx={{ width: 1200, height: 450 }} cols={3} rowHeight={360}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img style={{objectFit:'contain'}}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

