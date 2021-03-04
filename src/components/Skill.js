import React, { Component } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

class Skill extends Component {
  render() {
    return (
      <li>
        <span>{this.props.name}</span>
        <Rating value={this.props.value} readOnly className="rating" />
      </li>
    );
  }
}

export default Skill;
