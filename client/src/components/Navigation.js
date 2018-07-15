import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/GRSI Logo2.png';
import logo2 from '../img/GRSI Logo White.png';
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

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      logo: logo2
    };
    this.handleScroll = debounce(this.handleScroll.bind(this), 20);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    if (window.scrollY === 0) {
      setTimeout(
        function() {
          this.setState({ logo: logo2 });
        }.bind(this),
        100
      );
    } else {
      setTimeout(
        function() {
          this.setState({ logo });
        }.bind(this),
        100
      );
    }
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
          <div className="container">
            <NavbarBrand tag={Link} to="/">
              <img id="logoNav" src={this.state.logo} alt="" />
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
                  <DropdownMenu className="bg-light dropdown-borderStyle" right>
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
                  <DropdownMenu className="bg-light dropdown-borderStyle" right>
                    <DropdownItem tag={Link} to="/crack-seal">
                      Crack Seal
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/joint-seal">
                      Joint Seal
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/traffic-loops">
                      Traffic Loops
                    </DropdownItem>
                    <DropdownItem tag={Link} to="/traffic-lights">
                      Traffic Lights
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
          </div>
        </Navbar>
      </div>
    );
  }
}
