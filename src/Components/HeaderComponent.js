import React, { Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,Button,
     Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
        alert("username: "+this.username.value+" password: "+ this.password.value+" Remember: "+this.remember.checked);
        event.preventDefault();
    }

    render() {
        return(
            <>
                <Navbar dark expand="md">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mc-auto" href="/">
                            <img src="assets/images/logo.png" height="36" width="50" alt="ENSIAS" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home" >
                                        <span className="fa fa-lg" >Home</span>      
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home" >
                                        <span className="fa fa-lg" >Forum</span>      
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home" >
                                        <span className="fa fa-lg" >About Us</span>      
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar >
                                <NavItem>
                                    <Button className="navmarge" outline color="light" onClick={this.singinModal}>
                                        <span className="fa fa-lg" ></span>SingIn
                                    </Button>
                                    <Button className="navmarge" outline color="light" onClick={this.sinupModal}>
                                        <span className="fa fa-lg" ></span>SingUp
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>
                
                <Modal isOpen={this.state.isModalSinginOpen} toggle={this.singinModal}>
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
                </Modal>
            </>
        );
    }
}
export default Header;