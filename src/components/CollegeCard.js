import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import sasLogo from "images/sas_logo.webp";
import Grid from "@material-ui/core/Grid";
import { findByLabelText } from "@testing-library/react";

import styles from "assets/jss/material-kit-react/components/experienceCardStyle";

const useStyles = makeStyles(styles);

export default function SasCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Undergraduate
        </Typography>
        <Typography variant="h5" component="h2">
          <a href="https://www.colorado.edu/" target="_blank">
            University of Colorado at Boulder
          </a>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Graduated 2019
        </Typography>
      </CardContent>
    </Card>
  );
}
