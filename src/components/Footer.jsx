import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', textAlign: 'center', p: 3, mt: 5 }}>
      <Typography variant="body1">&copy; 2025 Fit & Hit.</Typography>
    </Box>
  );
}

export default Footer;
