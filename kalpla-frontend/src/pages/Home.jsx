import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>Welcome to Kalpla eLearning Platform</Typography>
      <Typography variant="body1">
        Discover our courses, live classes, and interactive learning tools.
      </Typography>
    </Container>
  );
};

export default Home;
