import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import FallingGIF from "./giphy.gif";
import Container from "../../components/Container/index"

class NoMatch extends Component {
  render() {
    return (
      <div>
        
        <Jumbotron>
          This page does not exist!
        </Jumbotron>
        <Container>
          <img src={FallingGIF} alt="GIF of a falling climber"/>
        </Container>
      </div>
    );
  }
}

export default NoMatch;

