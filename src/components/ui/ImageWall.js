import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    //backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    [theme.breakpoints.down("md")]: {
      width: (640 / 2) * 2,
    },
    [theme.breakpoints.down("sm")]: {
      width: 640 / 2,
    },
    width: (640 / 2) * 3,
    height: 420 * 2,
  },

  gridListTile: {
    "&:hover": {
      "& $media": {
        "-webkit-filter": "brightness(20%)",
        filter: "brightness(20%)",
      },
      "& $text": {
        opacity: 1,
      },
    },
  },

  imgFullWidth: {
    top: "50%",
    width: "100%",
    position: "relative",
    transform: "translateY(0%)",
  },

  media: {
    transition: "all 0.2s",
    "-webkit-transition": "all 0.2s",
    cursor: "pointer",
  },
  text: {
    position: "relative",
    bottom: "135px",
    height: "0px",
    opacity: 0,
    cursor: "pointer",
    textAlign: "center",
    color: "white",
  },
}));

export default function ImageWall({
  images,
  onScrollHandler,
  setStep,
  setImageURL,
  setImageURLError,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const mdMatch = useMediaQuery(theme.breakpoints.down("md"));
  const smMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={426 / 2}
        className={classes.gridList}
        cols={smMatch ? 1 : mdMatch ? 2 : 3}
        onScroll={onScrollHandler}
      >
        {images.map((tile) => (
          <GridListTile
            classes={{
              root: classes.gridListTile,
              imgFullWidth: classes.imgFullWidth,
            }}
            key={tile.id}
            cols={1}
            spacing={1}
            onClick={() => {
              setImageURL(tile.fullHDURL);
              setImageURLError(false);
              setStep();
            }}
          >
            <img
              className={classes.media}
              src={tile.webformatURL}
              alt={tile.tags}
            />
            <Typography className={classes.text}>Use Image</Typography>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
