import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const styles = ({ palette }) =>
  createStyles({
    root: {
      maxWidth: 345,
      backgroundColor: "black",
    },
    media: {
      height: 140,
    },
    button: {
      backgroundColor: "#f7b42c",
      backgroundImage: "linear-gradient(315deg, #f7b42c 0%, #fc575e 74%)",
      color: palette.getContrastText("#f7b42c"),
    },
  });

const useStyles = makeStyles(styles);

const UserCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/logo.jpg"
          title="Contemplative Reptile"
        />
        <CardMedia
          className={classes.media}
          image="/logo.jpg"
          title="Contemplative Reptile"
        />
        <CardMedia
          className={classes.media}
          image="/logo.jpg"
          title="Contemplative Reptile"
        />
        <CardContent></CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
};

export default UserCard;
