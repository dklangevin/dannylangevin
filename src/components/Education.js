import React, { Component } from "react";
import Widecard from "../components/Widecard";

class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Education</h1>
        <Widecard
          title="BS in Electrical and Computer Engineering"
          where="University of Colorado Boulder"
          from="2014"
          to="2019"
        />
        <Widecard
          title="High School"
          where="Edina High School"
          from="2010"
          to="2014"
        />
      </div>
    );
  }
}

export default Education;
