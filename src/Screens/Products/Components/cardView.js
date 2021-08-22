import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CreateIcon from '@material-ui/icons/Create';
import useStyles from './style'


const Cardview = props => {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.title}
        subheader={props.category}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Delete" >
          <DeleteForeverIcon  onClick={props.buttondel}/>
        </IconButton>
        <IconButton aria-label="Edit">
          <CreateIcon  onClick={props.buttonedit}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
export default Cardview;