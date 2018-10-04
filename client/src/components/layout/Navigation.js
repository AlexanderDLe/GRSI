import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/GRSI Logo 2.png';

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

    this.state = {
      isOpen: false,
      textColor: '',
      logoSize: '',
      navBG: ''
    };
    this.toggle = this.toggle.bind(this);
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
      this.setState({
        textColor: 'text-to-black',
        navBG: 'nav-scroll',
        logoSize: 'logoNav-scroll'
      });
    } else if (window.innerWidth > 991) {
      this.setState({ textColor: '', navBG: '', logoSize: 'logoNav-scroll' });
    }
  }

  handleScroll(e) {
    if (window.scrollY === 0 && window.innerWidth > 991) {
      setTimeout(
        function() {
          this.setState({ textColor: '', navBG: '', logoSize: '' });
        }.bind(this),
        10
      );
    } else if (window.scrollY > 0) {
      setTimeout(
        function() {
          this.setState({
            textColor: 'text-to-black',
            navBG: 'nav-scroll',
            logoSize: 'logoNav-scroll'
          });
        }.bind(this),
        10
      );
    }
  }
  toggle() {
    if (window.innerWidth < 992) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }
  render() {
    return (
      <div>
        <Navbar
          id="nav"
          light
          expand="lg"
          className={`fixed-top ${this.state.navBG}`}
        >
          <div className="container">
            <NavbarBrand tag={Link} to="/">
              <img
                id="logoNav"
                src={logo}
                alt=""
                className={this.state.logoSize}
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/" className={this.state.textColor}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={Link}
                    to="/about"
                    className={this.state.textColor}
                    onClick={this.toggle}
                  >
                    About
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    tag={Link}
                    to="/history"
                    className={this.state.textColor}
                    onClick={this.toggle}
                  >
                    Clients
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={Link}
                    to="/testimonials"
                    className={this.state.textColor}
                    onClick={this.toggle}
                  >
                    Testimonials
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className={this.state.textColor}>
                    Services
                  </DropdownToggle>
                  <DropdownMenu className="" right>
                    <DropdownItem
                      tag={Link}
                      to="/crack-seal"
                      className={this.state.textColor}
                      onClick={this.toggle}
                    >
                      Crack Sealing
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to="/joint-seal"
                      className={this.state.textColor}
                      onClick={this.toggle}
                    >
                      Joint Sealing
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to="/traffic-loops"
                      className={this.state.textColor}
                      onClick={this.toggle}
                    >
                      Traffic Loops
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to="/traffic-lights"
                      className={this.state.textColor}
                      onClick={this.toggle}
                    >
                      Traffic/Street Lighting
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink
                    tag={Link}
                    to="/contact"
                    className={this.state.textColor}
                    onClick={this.toggle}
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
