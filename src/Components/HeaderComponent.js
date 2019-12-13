import React, { Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import $ from 'jquery';
import SingIn from './ModalSingIn';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalSinginOpen: false
        };
    }

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    };

    singinModal = () => {
        this.setState({
            isModalSinginOpen: !this.state.isModalSinginOpen
        })
    };

    render() {
        const { isModalSinginOpen } = this.state;
        return(
            <>
            <SectionNav className="navbar-fixed-top">
                <div class="container">
                    <Navbar dark expand="md">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mc-auto" href="/">
                            <img src="assets/images/logo.png" className="size-image" alt="ENSIAS" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home" >
                                        <span className="fa fa-lg" >Home</span>      
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/forum" >
                                        <span className="fa fa-lg" >Forum</span>      
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus" >
                                        <span className="fa fa-lg" >About Us</span>      
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar >
                                <NavItem>
                                    <Button className="navmarge" outline color="danger" onClick={this.singinModal}>
                                        <span className="fa fa-lg" ></span>SingIn
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>
                </div>
            </SectionNav>
            {isModalSinginOpen &&
                <SingIn 
                    isModalSinginOpen={isModalSinginOpen}
                    singinModal={() => this.singinModal()}
                />
            }
            </>
        );
    }
}

const SectionNav = styled.section`
    border: none;
    padding: 18px 0;
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;
    .size-image {
        height: 36px;
        width: 50px;
    }
    .mc-auto {
        margin-right: 0;
    }
    .navbar-nav {
        margin-left: 20em;
        > li > a:hover,
        > li > a:focus {
            background-color: transparent;
        }
        .nav-link.active,
        .show > .nav-link {
            color: #dc3545;
        }
    }
    @media only screen and (max-width: 1200px) {
        .navbar-nav {
            margin-left: 16em;
        }
    }
    @media only screen and (max-width: 992px) {
        .navbar-nav {
            margin-left: 8em;
        }
    }
    @media screen and (max-width: 767px) {
        box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);
        text-align: center;
        .navbar-nav {
            margin-left: 8em;
        }
        .nav li a {
            line-height: normal;
            padding: 5px;
        }
        .nav li a,
        .top-nav-collapse .nav li a {
            color: #656565;
        }
    }
`;
export default Header;