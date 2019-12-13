import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, ModalFooter } from 'reactstrap';
import Radio from "@material-ui/core/Radio";
import { Control, LocalForm, Errors, } from 'react-redux-form';

const minLength = (len) => (val) => (val) && (val.length >= len);

class SingIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            accept: false
        }
    }

    chngeAccept = () => {
        this.setState({
            accept: !this.state.accept
        });
    }

    handleLogin = (event) => {
        var values = {
            "username": event.username,
            "password": event.password,
            "remember": this.state.accept,
        }
        alert("Current State is: " +JSON.stringify(values));
        
    }

    render(){
        const { accept } = this.state;
        console.log(accept)
        return ( 
            <Modal 
                isOpen={this.props.isModalSinginOpen}
                toggle={this.props.singinModal}
                centered
            >
                <ModalHeader toggle={this.props.singinModal}>Login</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(evt) => this.handleLogin(evt)}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Control.text
                                model=".username" 
                                id="username"
                                name="username" 
                                placeholder="Your Username"
                                className="form-control"
                                validators={{
                                    minLength: minLength(3),
                                }}
                            />
                            <Errors 
                                className="text-danger"
                                model=".username"
                                show="touched"
                                messages={{
                                    minLength: 'Must be greater than 2 characters',
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Control.text
                                model=".password" 
                                id="password"
                                name="password" 
                                placeholder="Your Password"
                                className="form-control"
                                validators={{
                                    minLength: minLength(3),
                                }}
                            />
                            <Errors 
                                className="text-danger"
                                model=".password"
                                show="touched"
                                messages={{
                                    minLength: 'Must be greater than 2 characters',
                                }}
                            />
                        </FormGroup>
                        <Radio
                            color="secondary"
                            name="accept"
                            value="accept"
                            checked={accept ? true : ""}
                            onClick={() => this.chngeAccept()}
                        />
                        <Label>Remember me</Label>
                        <ModalFooter>
                            <Button outline onClick={this.props.singinModal} color="dark">Cancel</Button>
                            <Button outline type="submit" value="submit" color="danger">Login</Button>
                        </ModalFooter>
                    </LocalForm>
                </ModalBody>
            </Modal>
        );
    }
}

export default SingIn;