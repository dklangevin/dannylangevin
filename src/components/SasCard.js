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
          Aerospace
        </Typography>
        <Typography variant="h5" component="h2">
          <a href="https://specialaerospaceservices.com" target="_blank">
            Special Aerospace Services
          </a>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Software Engineer
        </Typography>
        <Typography variant="body2">
          <ul>
            <li>
              Current Position: Software tools developer under contract with
              Sierra Nevada Corporation (SNC)
              <ul>
                <li>
                  Developing Python tools/programs – back-ends and GUIs (PyQt)
                </li>
                <li>
                  Web development (Express.js/Node.js, Bootstrap) under
                  controlled Agile environment
                </li>
                <li>Database management (Mariadb/MySQL)</li>
                <li>Linux (CentOS) server administration/conﬁguration</li>
              </ul>
            </li>
            <li>
              Promoted to Lead of the unit testing team after one year of
              internship (during school), and six months of full-time
              employment. Managed team progress, metrics, and served as an
              important resource to the newer unit testers.
            </li>
            <li>
              Wrote numerous Python tools, including tools to automatically
              regression-test all previous test harnesses on new code builds
            </li>
            <li>
              Performed unit-level testing of United Launch Alliance (ULA)
              launch vehicle ﬂight software across multiple programs and product
              lines, including Common Avionics, Commercial Crew Program, Interim
              Cryogenic Propulsion Stage, and Vulcan.
              <ul>
                <li>
                  Used LDRA Testbed tool suite in combination with Eclipse in a
                  Linux environment
                </li>
                <li>
                  Developed test cases based on launch vehicle ﬂight software
                  requirements (requirements-driven testing), and in accordance
                  with DO-178 standards, including MC/DC coverage
                </li>
                <li>
                  Gained extensive knowledge of the Ada programming language,
                  Tartan Ada compiler suite, and MIL-STD-1750a assembly
                </li>
              </ul>
            </li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}
