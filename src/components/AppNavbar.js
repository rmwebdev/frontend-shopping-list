import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';
import Loader from './Loader';

class AppNavbar extends Component{
        state = {
            isOpen: false
        }
        static propTypes = {
            auth: PropTypes.object.isRequired,
        }
        toggle = () => {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
        render() {
            const { isAuthenticated, isLoading } = this.props.auth;
            const authLinks = (
                <Fragment>
                    <NavItem>
                        <NavLink className="navbar-text mr-3 " href='/profile'>
                                {/* <strong>{ user ? `Selamat datang ${user.name}` : ''}</strong> */}
                                Profile
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <Logout />
                    </NavItem>
                </Fragment>
            )
            const guestLinks = (
                <Fragment>
                    <NavItem>
                        <RegisterModal />
                    </NavItem>
                    <NavItem>
                        <LoginModal />
                    </NavItem>
                </Fragment>
            )
            return (
                <div>
                    { isLoading ? <Loader /> : (
                        <Navbar color="dark" dark expand="sm" className="mb-5">
                        <Container>
                             <NavbarBrand href="/">Daftar Belanja</NavbarBrand>
                             <NavbarToggler onClick={this.toggle} />
                             <Collapse isOpen={this.state.isOpen} navbar>
                                 <Nav className="ml-auto" navbar>
                                     { isAuthenticated ? authLinks : guestLinks }       
                                 </Nav>
                             </Collapse>
                         </Container>
                        </Navbar>  
                    )}    
            </div>
       
            ) ;
      }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null )(AppNavbar);