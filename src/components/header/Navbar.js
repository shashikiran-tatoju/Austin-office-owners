import React,{Component} from 'react'; 
import {Collapse,Navbar,NavbarToggler,Nav,NavItem,NavLink,} from 'reactstrap';

export default class Example extends Component {
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
      <React.Fragment>
        <Navbar color="light" light  expand="md" className="NavbarHeading">
        <a className="header__logoimg" href="#Logo" title="Logo">Logo</a>
          <NavbarToggler onClick={this.toggle} className="hamberger__bgclr" />
          <Collapse className="navbar__collapse" isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto mr--mrgn navvbar__ul' navbar>
            <NavItem className="navbar__li">
                <NavLink className="WhyAustin" href="#" onClick={this.props.whyAustin}  title="WhyAustin">Why Austin</NavLink>
              </NavItem >
              <NavItem className="navbar__li">
                <NavLink href="#" onClick={this.props.austinOfficeMarket} title="Austin Office Market">Austin Office Market</NavLink>
              </NavItem>
              <NavItem className="navbar__li">
                <NavLink href="#" onClick={this.props.topOfficeOwners} title="Top Office Owners">Top Office Owners</NavLink>
              </NavItem>
              <NavItem className="navbar__li">
                <NavLink href="#" onClick={this.props.austinLandscap} title=" Austin LandScape">Austin LandScape</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </React.Fragment>
    );
  }
}