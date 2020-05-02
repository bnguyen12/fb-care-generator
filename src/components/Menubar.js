import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

class Menubar extends Component {
  render() {
    return(
      <Navbar className="navbar-horizontal navbar-dark bg-primary">
        <NavbarBrand href="/">Care Generator</NavbarBrand>
      </Navbar>
    )
  }
}

export default Menubar;