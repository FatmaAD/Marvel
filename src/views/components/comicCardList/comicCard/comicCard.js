import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 300
  },
  media: {
    height: 440
  }
});

const ComicCard = props => {
  const classes = useStyles();

  return (
    <div className="col-lg-4">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="p" component="p">
              {props.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.auther}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Read More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ComicCard;
