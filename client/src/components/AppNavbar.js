import React, { Component } from 'react';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

export default class AppNavbar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isOpen: false
    }

   
  }
  toggle = () => {
    this.setState( {
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expant="sm" className="mb-5">
          <Container>
            <NavbarBrand href='/'>ShoppingList!!!</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink href="https://github.com/Vasya094/trav_youtube.git">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}
