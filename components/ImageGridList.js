import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.default,
    },
    gridList: {
      width: "90%",
      height: "90%",
    },
  })
);

const tileData = [
  {
    img: "/1.jpg",
    title: "Image",
    cols: 2,
  },

  {
    img: "/2.jpg",
    title: "Image",
    cols: 1,
  },
  {
    img: "/3.jpg",
    title: "Image",
    cols: 1,
  },
];

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} cols={2}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
