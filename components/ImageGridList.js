import { createStyles, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import { GridList, GridListTile } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.default,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  galleryImage: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "fill",
  },
}));

const tileData = [
  {
    img: "/1.jpg",
    title: "Image",
    cols: 4,
  },

  {
    img: "/2.jpg",
    title: "Image",
    cols: 2,
  },
  {
    img: "/3.jpg",
    title: "Image",
    cols: 2,
  },
];

export default function ImageGridList() {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width: 768px)");
  console.log("matches", matches);
  return (
    <div className={classes.root}>
      <GridList cellHeight={220} className={classes.gridList} cols={4}>
        {tileData.map((tile, index) => (
          <GridListTile key={index} cols={tile.cols || 1}>
            <img
              src={tile.img}
              className={classes.galleryImage}
              alt={tile.title}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
