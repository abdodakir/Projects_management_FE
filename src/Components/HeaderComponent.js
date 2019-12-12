import React, { Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,Button,
     Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import $ from 'jquery';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalSinginOpen: false,
            direction:'',
            lastScrollPos:0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    singinModal = () => {
        this.setState({
            isModalSinginOpen: !this.state.isModalSinginOpen
        })
    }

    singupModal = () => {
        this.setState({
            isModalSinupOpen: !this.state.isModalSingupOpen
        })
    }

    handleLogin = (event) => {
        this.toggleModal();
        //alert("username: "+this.username.value+" password: "+ this.password.value+" Remember: "+this.remember.checked);
        //event.preventDefault();
    }

    handleScroll(event) {
        if(this.state.lastScrollPos > event.currentTarget.scrollTop) {
          this.setState({
            direction:'top',
            lastScrollPos:event.currentTarget.scrollTop
          });
        } else if(this.state.lastScrollPos < event.currentTarget.scrollTop) {
          this.setState({
            direction:'bottom',
            lastScrollPos:event.currentTarget.scrollTop
          });
        }
        console.log(this.state.direction)
      }

    handleColor = () =>{
        console.log("qdfqgdffgqsdgqs")
        $(window).scroll(function() {
            if ($(".navbar").offset().top > 50) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        });
    }
/* <Modal isOpen={this.state.isModalSinginOpen} toggle={this.singinModal}>
                    <ModalHeader toggle={this.singinModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={(input) => this.username = input}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={(input) => this.password = input}></Input>
                            </FormGroup>
                            <FormGroup check>
                                <Label check><Input type="checkbox" name="remember" innerRef={(input) => this.remember = input}/>Remember me</Label>
                            </FormGroup>
                            <Button outline type="submit" value="submit" color="dark">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal> */


    render() {
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