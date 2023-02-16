// imimport * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

 function Carde(props) {
        let {value,clickdata} = props
        console.log(value)
  return (
    <Card  onClick={()=> clickdata(value)} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={value.src}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {value.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {value.school}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default Carde