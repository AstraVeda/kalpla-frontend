import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Kalpla
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/admin">Admin</Button>
        <Button color="inherit" component={Link} to="/student">Student</Button>
        <Button color="inherit" component={Link} to="/instructor">Instructor</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
