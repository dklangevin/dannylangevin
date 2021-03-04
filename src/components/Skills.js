/*import React, { Component } from "react";
import Skill from "./Skill";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillsLeft: [
        { name: "Python", value: 5 },
        { name: "C/C++", value: 4 },
        { name: "SQL", value: 4 },
        { name: "Bash", value: 5 },
        { name: "MATLAB", value: 4 },
        { name: "Excel/VBA", value: 4 },
        { name: "HTML", value: 5 },
        { name: "XML", value: 4 },
        { name: "CSS", value: 4 },
      ],
      skillsRight: [
        { name: "Mathematica", value: 3 },
        { name: "Agile", value: 5 },
        { name: "JIRA", value: 5 },
        { name: "Javascript", value: 3 },
        { name: "Perl", value: 1 },
        { name: "Ada", value: 3 },
        { name: "Android app development", value: 2 },
        { name: "Multi-threaded programming", value: 2 },
      ],
    };
  }
  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">Skills</h1>
        <ul className="skills-left">
          {this.state.skillsLeft.map((skill) => {
            return <Skill name={skill["name"]} value={skill["value"]} />;
          })}
        </ul>
        <ul className="skills-right">
          {this.state.skillsRight.map((skill) => {
            return <Skill name={skill["name"]} value={skill["value"]} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Skills;
*/

import React, { Component } from "react";
import classNames from "classnames";
import Skill from "components/Skill";
import portrait from "images/portrait.png";
import Parallax from "components/Parallax";
import Header from "components/Header.js";
import HeaderLinks from "components/RightHeaderLinks";
import LeftHeaderLinks from "components/LeftHeaderLinks";
import sunset from "images/sunset_hills.jpg";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Grid from "@material-ui/core/Grid";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Home(props) {
  const classes = useStyles();
  const skillsLeft = [
    { name: "Python", value: 5 },
    { name: "C/C++", value: 4 },
    { name: "SQL", value: 4 },
    { name: "Bash", value: 5 },
    { name: "MATLAB", value: 4 },
    { name: "Excel/VBA", value: 4 },
    { name: "HTML", value: 5 },
    { name: "XML", value: 4 },
    { name: "CSS", value: 4 },
  ];
  const skillsRight = [
    { name: "Mathematica", value: 3 },
    { name: "Agile", value: 5 },
    { name: "JIRA", value: 5 },
    { name: "Javascript", value: 3 },
    { name: "Perl", value: 1 },
    { name: "Ada", value: 3 },
    { name: "Android app development", value: 2 },
    { name: "Multi-threaded programming", value: 2 },
  ];
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
                <h1 className={classes.title}>Skills</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container} justify="center">
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <div className="skills">
                <ul className="skills-left">
                  {skillsLeft.map((skill) => {
                    return (
                      <Skill name={skill["name"]} value={skill["value"]} />
                    );
                  })}
                </ul>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="skills">
                <ul className="skills-right">
                  {skillsRight.map((skill) => {
                    return (
                      <Skill name={skill["name"]} value={skill["value"]} />
                    );
                  })}
                </ul>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
