import React, { Component } from "react";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class Skill extends Component {
  render() {
    return (
      <li>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">{this.props.name}</Typography>
          <Rating name="read-only" value="3" readOnly />
        </Box>
      </li>
    );
  }
}

export default Skill;