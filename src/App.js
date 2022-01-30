import React from 'react';
import {data} from './data';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function App() {
  
  return (
    <div>
      {data.map(item => {
        return (
          <Card style={{margin: '4vw'}}>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/500x500"
              // alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.schoolName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.location}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        )
      })}
    </div>
  );
}