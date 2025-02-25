import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 2, mt: 4, textAlign: 'center' }}>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Kalpla. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
