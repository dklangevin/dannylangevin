import React from "react";
import { makeStyles, rgbToHex } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import styles from "assets/jss/material-kit-react/components/experienceCardStyle";

const useStyles = makeStyles(styles);

export default function SimpleCard() {
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
          Medical Devices
        </Typography>
        <Typography variant="h5" component="h2">
          <a href="https://www.coloplast.us/" target="_blank">
            Coloplast
          </a>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Intern
        </Typography>
        <Typography variant="body2">
          <ul>
            <li>
              Performed various tasks, reading documentation, organizing and
              renaming files
            </li>
            <li>
              I constantly thought about and implemented ways to improve the
              speed of my work, such as writing a program to rename thousands of
              files automatically
            </li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}
