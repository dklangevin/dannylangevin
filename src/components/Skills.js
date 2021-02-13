import React, { Component } from "react";

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
      ],
      workingSkills: [
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
        <h1 className="subtopic">Strong Skills</h1>
        <ul>
          {this.state.strongSkills.map((value) => {
            return <li>{value}</li>;
          })}
        </ul>
        <h1 className="subtopic">Working Knowledge Skills</h1>
        <ul>
          {this.state.workingSkills.map((value) => {
            return <li>{value}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Skills;
