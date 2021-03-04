import React, { Component } from "react";
import classNames from "classnames";
import About from "components/About";
import portrait from "images/portrait.png";
import Parallax from "components/Parallax";
import Header from "components/Header.js";
import HeaderLinks from "components/RightHeaderLinks";
import LeftHeaderLinks from "components/LeftHeaderLinks";
import sunset from "images/sunset_hills.jpg";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Home(props) {
  const classes = useStyles();
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        leftLinks={<LeftHeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <Parallax image={sunset}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Danny Langevin</h1>
                <h3 className={classes.subtitle}>Software Engineer</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className="row">
            <img src={portrait} className="portrait" />
            <About />
          </div>
        </div>
      </div>
    </div>
  );
}
