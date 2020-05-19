import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';

class Header extends Component {
  render() {
    return(
      <div>
        <Jumbotron fluid id="header">
          <Container fluid>
            <h1 className="display-5">Facebook Care Generator</h1>
            <hr />
            <p className="lead">Customize a care emoji to hold what you care about</p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
