import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import  Logo  from '../assets/logo.png'; // Replace with your logo component or image path

const Footer = () => {
  return (
    <Paper 
      component="footer" 
      sx={{ 
        mt: 4, 
        py: 2, 
        textAlign: 'center', 
        backgroundColor: '#f5f5f5', // Light grey background
        borderTop: '1px solid #ddd' // Light border at the top
      }}
      elevation={3}
    >
      <Container>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {/* Replace with your actual logo */}
              <img 
                src={Logo}
                alt="Company Logo" 
                style={{ maxWidth: '100px', height: 'auto' }} 
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography variant="body2" color="text.secondary">
              &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <a href="/privacy" style={{ textDecoration: 'none', color: 'inherit' }}>Privacy Policy</a> | 
              <a href="/terms" style={{ textDecoration: 'none', color: 'inherit' }}> Terms of Service</a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Footer;
