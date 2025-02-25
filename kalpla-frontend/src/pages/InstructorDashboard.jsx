import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const InstructorDashboard = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Instructor Dashboard</Typography>
      <Typography variant="body1">
        Create courses, manage live classes, and view student engagement.
      </Typography>
    </Container>
  );
};

export default InstructorDashboard;
