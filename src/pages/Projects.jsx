import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function Projects() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Experience & Skills</Typography>
      <Typography variant="body1">1+ year in Data Analysis, ML, and Data Science</Typography>
      <Button href="https://github.com/dev-abdullah-shahid" target="_blank" variant="contained" sx={{ mt: 2 }}>
        View GitHub
      </Button>
    </Container>
  );
}

export default Projects;
