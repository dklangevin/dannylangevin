import React, { Component } from "react";
import portrait from "../images/portrait.png";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={portrait} className="portrait" />
      </div>
    );
  }
}
export default Home;
