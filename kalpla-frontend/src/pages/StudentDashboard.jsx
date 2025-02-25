import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const StudentDashboard = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Student Dashboard</Typography>
      <Typography variant="body1">
        Explore courses, track progress, and join live classes.
      </Typography>
    </Container>
  );
};

export default StudentDashboard;
