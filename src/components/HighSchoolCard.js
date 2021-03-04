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
  const classes1 = `${classes.last} ${classes.root}`;

  return (
    <Card className={classes1}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          High School
        </Typography>
        <Typography variant="h5" component="h2">
          <a href="https://www.edinaschools.org/edinahigh" target="_blank">
            Edina High School
          </a>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          2010 to 2014
        </Typography>
      </CardContent>
    </Card>
  );
}
