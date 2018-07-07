import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/GRSI Logo.png';
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
        <Navbar id="nav" light expand="lg" className="fixed-top">
          <NavbarBrand tag={Link} to="/">
            <img id="logoNav" src={logo} alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  About
                </DropdownToggle>
                <DropdownMenu className="bg-light" right>
                  <DropdownItem tag={Link} to="/travels">
                    Travels
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/mission">
                    Mission
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/vision">
                    Vision
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/goals">
                    Goals
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink tag={Link} to="/history">
                  History
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/testimonials">
                  Testimonials
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Services
                </DropdownToggle>
                <DropdownMenu className="bg-light" right>
                  <DropdownItem tag={Link} to="/crack-seal">
                    Crack Seal
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/joint-seal">
                    Joint Seal
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/traffic-loops">
                    Traffic Loops
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink tag={Link} to="/contact">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
