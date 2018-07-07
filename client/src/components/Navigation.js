import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link to="/">
            <NavbarBrand href="/">GRSI</NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">
                  <NavLink>Home</NavLink>
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  About
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/travels">
                    <DropdownItem>Travels</DropdownItem>
                  </Link>
                  <Link to="/mission">
                    <DropdownItem>Mission</DropdownItem>
                  </Link>
                  <Link to="/vision">
                    <DropdownItem>Vision</DropdownItem>
                  </Link>
                  <Link to="/goals">
                    <DropdownItem>Goals</DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to="/history">
                  <NavLink>History</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/testimonials">
                  <NavLink>Testimonials</NavLink>
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Services
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/crack-seal">
                    <DropdownItem>Crack Seal</DropdownItem>
                  </Link>
                  <Link to="/joint-seal">
                    <DropdownItem>Joint Seal</DropdownItem>
                  </Link>
                  <Link to="/traffic-loops">
                    <DropdownItem>Traffic Loops</DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to="/contact">
                  <NavLink>Contact</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
