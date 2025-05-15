import React from 'react';
import { Container, Box, Typography, Avatar } from '@mui/material';

function Home() {
  return (
    <Container sx={{ textAlign: 'center', mt: 5 }}>
      <Avatar alt="Profile" src="/profilephoto.jpg" sx={{ width: 170, height: 170, margin: 'auto' }} />
      <Typography variant="h4" mt={2}>Abdullah Shahid</Typography>
      <Typography variant="subtitle1">Data Scientist | Analyst | Business</Typography>
    </Container>
  );
}

export default Home;
