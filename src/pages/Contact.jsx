import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function Contact() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Contact</Typography>
      <Box>
        <Typography>Email: urfvabdullah@gmail.com</Typography>
        <Typography>Phone: +92 342 6654838</Typography>
        <Button href="https://www.instagram.com/abdullah_shahidk/" target="_blank" sx={{ mt: 2 }}>
          Instagram
        </Button>
        <Button href="https://www.linkedin.com/in/abdullah-shahid-817429294/" target="_blank" sx={{ mt: 1, ml: 2 }}>
          LinkedIn
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;
