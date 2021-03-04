import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function PageTitle(props) {
  let windowScrollTop;
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }
  //const [transform, setTransform] = React.useState(windowScrollTop);

  const [opacity, setOpacity] = React.useState(1);

  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", updateOpacity);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", updateOpacity);
      }
    };
  });
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    //setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  const updateOpacity = () => {
    console.log(window.pageYOffset);
    setOpacity(1 - window.pageYOffset / (window.innerHeight - 500));
  };

  const classes = useStyles();
  return (
    <div
      className={classes.brand}
      style={{
        opacity: opacity,
        color: "white",
      }}
    >
      <h1 className={classes.title}>{props.title}</h1>
    </div>
  );
}
