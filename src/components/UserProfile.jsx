import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Avatar, IconButton, Divider, Box, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import VerifiedIcon from '@mui/icons-material/Verified';
import BadgeIcon from '@mui/icons-material/Badge';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'; 

const UserProfile = ({ user }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <Box maxWidth="md" sx={{ mt: 4, mb: 4 }}>
       <Button 
        variant="outlined" 
        startIcon={<ArrowBackIcon />} 
        onClick={handleBackClick}
        sx={{ mb: 2 ,color:'black'}}
      >
        Back
      </Button>

      <Card sx={{ 
        boxShadow: 3, 
        padding: 2, 
        backgroundColor: '#000000',  // Card background set to black
        color: '#edc95f'  // Text color set to gold
      }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
              <Avatar
                alt={user.fullName}
                src={user.profileImageUrl}
                sx={{ width: 150, height: 150 }}
              />
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom>
                {user.fullName}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Roll Number: {user.rollNumber}
              </Typography>
              <Divider sx={{ my: 2, borderColor: '#edc95f' }} />  {/* Divider color set to gold */}
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <IconButton sx={{ color: '#edc95f' }}>
                    <AssignmentIndIcon />
                  </IconButton>
                  Father’s Name: {user.fatherName}
                </Grid>
                <Grid item xs={12} md={6}>
                  <IconButton sx={{ color: '#edc95f' }}>
                    <BadgeIcon />
                  </IconButton>
                  National ID: {user.nationalID}
                </Grid>
                <Grid item xs={12} md={6}>
                  <IconButton sx={{ color: '#edc95f' }}>
                    <EmailIcon />
                  </IconButton>
                  Email: {user.email}
                </Grid>
                <Grid item xs={12} md={6}>
                  <IconButton sx={{ color: '#edc95f' }}>
                    <PhoneIcon />
                  </IconButton>
                  Phone: {user.phoneNumber}
                </Grid>
                <Grid item xs={12} md={6}>
                  <IconButton sx={{ color: '#edc95f' }}>
                    <HomeIcon />
                  </IconButton>
                  Address: {user.address}
                </Grid>
                <Grid item xs={12} md={6}>
                  <IconButton sx={{ color: '#edc95f' }}>
                    <LaptopMacIcon />
                  </IconButton>
                  Has Laptop: {user.hasLaptop ? 'Yes' : 'No'}
                </Grid>
                <Grid item xs={12} md={6}>
                  <IconButton sx={{ color: '#edc95f' }}>
                    <VerifiedIcon color={user.feeVerification ? 'success' : 'error'} />
                  </IconButton>
                  Fee Verified: {user.feeVerification ? 'Yes' : 'No'}
                </Grid>
                <Grid item xs={12} md={6}>
                  <IconButton sx={{ color: '#edc95f' }}>
                    <AssignmentIndIcon />
                  </IconButton>
                  Last Qualification: {user.lastQualification}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserProfile;
