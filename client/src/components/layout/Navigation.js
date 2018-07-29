import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../../img/GRSI Logo 1.png';
import logoBlack from '../../img/GRSI Logo 1.png';

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
      logo: logoWhite,
      textColor: ''
    };
    this.handleScroll = debounce(this.handleScroll.bind(this), 10);
    this.resizeWidth = debounce(this.resizeWidth.bind(this), 10);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.resizeWidth);
    this.resizeWidth();
    this.handleScroll();
  }

  resizeWidth() {
    if (window.innerWidth <= 991 || window.scrollY > 0) {
      this.setState({ logo: logoBlack, textColor: 'text-to-black' });
    } else if (window.innerWidth > 991) {
      this.setState({ logo: logoWhite, textColor: '' });
    }
  }

  handleScroll(e) {
    if (window.scrollY === 0 && window.innerWidth > 991) {
      setTimeout(
        function() {
          this.setState({ logo: logoWhite, textColor: '' });
        }.bind(this),
        100
      );
    } else if (window.scrollY > 0) {
      setTimeout(
        function() {
          this.setState({ logo: logoBlack, textColor: 'text-to-black' });
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
                  <NavLink tag={Link} to="/" className={this.state.textColor}>
                    Home
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className={this.state.textColor}>
                    About
                  </DropdownToggle>
                  <DropdownMenu className="bg-light dropdown-borderStyle" right>
                    <DropdownItem
                      tag={Link}
                      to="/travels"
                      className={this.state.textColor}
                    >
                      Travels
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to="/mission"
                      className={this.state.textColor}
                    >
                      Mission
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to="/vision"
                      className={this.state.textColor}
                    >
                      Vision
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to="/goals"
                      className={this.state.textColor}
                    >
                      Goals
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink
                    tag={Link}
                    to="/history"
                    className={this.state.textColor}
                  >
                    History
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={Link}
                    to="/testimonials"
                    className={this.state.textColor}
                  >
                    Testimonials
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className={this.state.textColor}>
                    Services
                  </DropdownToggle>
                  <DropdownMenu className="bg-light dropdown-borderStyle" right>
                    <DropdownItem
                      tag={Link}
                      to="/crack-seal"
                      className={this.state.textColor}
                    >
                      Crack Seal
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to="/joint-seal"
                      className={this.state.textColor}
                    >
                      Joint Seal
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to="/traffic-loops"
                      className={this.state.textColor}
                    >
                      Traffic Loops
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to="/traffic-lights"
                      className={this.state.textColor}
                    >
                      Traffic Lights
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink
                    tag={Link}
                    to="/contact"
                    className={this.state.textColor}
                  >
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
