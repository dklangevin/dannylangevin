import React, { Component } from "react";
import Skill from "./Skill";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strongSkills: [
        "Python",
        "C/C++",
        "SQL",
        "Unix",
        "Bash",
        "MATLAB",
        "Excel/VBA",
        "HTML",
        "XML",
        "CSS",
        "Mathematica",
        "Agile",
        "JIRA",
        "Javascript",
        "Perl",
        "Ada",
        "Android app development",
        "multi-threaded programming",
      ],
    };
  }
  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">Skills</h1>
        <ul>
          {this.state.strongSkills.map((value) => {
            return (
              <Skill name={value}/>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Skills;
