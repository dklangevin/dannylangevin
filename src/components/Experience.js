import React, { Component } from "react";
import classNames from "classnames";
import Parallax from "components/Parallax";
import Header from "components/Header.js";
import HeaderLinks from "components/RightHeaderLinks";
import LeftHeaderLinks from "components/LeftHeaderLinks";
import sunset from "images/sunset_hills.jpg";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import SasCard from "components/SasCard";
import ColoplastCard from "components/ColoplastCard";
import Grid from "@material-ui/core/Grid";
import PageTitle from "components/PageTitle";

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
              <PageTitle title="Experience"/>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Grid container spacing={10}>
            <Grid xs={12}>
              <SasCard/>
            </Grid>
            <Grid xs={12}>
              <ColoplastCard />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
