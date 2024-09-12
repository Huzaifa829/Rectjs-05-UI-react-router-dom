import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function MultiActionAreaCard({ profileImageUrl, fullName, email, showMorebtn }) {

  return (
    <Card sx={{ width: 345, backgroundColor: '#000000', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)'}}> 
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={profileImageUrl}
          alt="profile image"
          sx={{ height: 200, objectFit: 'contain' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: '#edc95f' }}> {/* Full name color set to gold */}
            {fullName}
          </Typography>
          <Typography variant="body2" sx={{ color: '#edc95f' }}> {/* Email color set to gold */}
            {email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={showMorebtn} size="small" sx={{ color: '#edc95f' }}> {/* Button color set to gold */}
          Show More...
        </Button>
      </CardActions>
    </Card>
  );
}
