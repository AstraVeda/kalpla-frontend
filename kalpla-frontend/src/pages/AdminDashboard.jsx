import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const AdminDashboard = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Admin Dashboard</Typography>
      <Typography variant="body1">
        Manage courses, users, and platform settings here.
      </Typography>
    </Container>
  );
};

export default AdminDashboard;
