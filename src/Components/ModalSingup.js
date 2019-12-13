import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, ModalFooter } from 'reactstrap';
import Radio from "@material-ui/core/Radio";
import { Control, LocalForm, Errors, } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class SingUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: false
        }
    }

    chngeType = () => {
        this.setState({
            type: !this.state.type
        });
    }

    handleLogin = (event) => {
        var values = {
            "name": event.name,
            "email": event.email,
            "phone": event.phone,
            "username": event.username,
            "password": event.password,
            "type": this.state.type ? "prof":"student",
        }
        alert("Current State is: " +JSON.stringify(values));
    }

    render(){
        const { type } = this.state;
        return ( 
            <Modal 
                isOpen={this.props.isModalSingupOpen}
                toggle={this.props.singupModal}
                centered
            >
                <ModalHeader toggle={this.props.singupModal}>Register</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(evt) => this.handleLogin(evt)}>
                        <FormGroup>
                            <Label htmlFor="name">Name</Label>
                            <Control.text
                                model=".name" 
                                id="name"
                                name="name" 
                                placeholder="Your Name"
                                className="form-control"
                                validators={{
                                    minLength: minLength(3),
                                }}
                            />
                            <Errors 
                                className="text-danger"
                                model=".name"
                                show="touched"
                                messages={{
                                    minLength: 'Must be greater than 2 characters',
                                }}
                            />
                        </FormGroup>
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
                        <FormGroup>
                            <Label htmlFor="email">E-mail</Label>
                            <Control.text
                                model=".email" 
                                id="email"
                                name="email" 
                                placeholder="Your Email"
                                className="form-control"
                                validators={{
                                    required, validEmail
                                }}
                            />
                            <Errors 
                                className="text-danger"
                                model=".email"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    validEmail: 'Invalid Email Address'
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="phone">Phone</Label>
                            <Control.text
                                model=".phone" 
                                id="phone"
                                name="phone" 
                                placeholder="Your Phone"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(10), maxLength: maxLength(10), isNumber
                                }}
                            />
                            <Errors 
                                className="text-danger"
                                model=".phone"
                                show="touched"
                                messages={{
                                    minLength: 'Must 10 numbers',
                                    maxLength: 'Must be less than 10 numbers',
                                    isNumber: 'Must be number'
                                }}
                            />
                        </FormGroup>
                        <Radio
                            color="secondary"
                            name="type"
                            value="type"
                            checked={type ? "" : true}
                            onClick={() => this.chngeType()}
                        />
                        <Label>Student</Label>
                        <Radio
                            color="secondary"
                            name="type"
                            value="type"
                            checked={type ? true : ""}
                            onClick={() => this.chngeType()}
                        />
                        <Label>Professor</Label>
                        <ModalFooter>
                            <Button outline onClick={this.props.singupModal} color="dark">Cancel</Button>
                            <Button outline type="submit" value="submit" color="danger">Register</Button>
                        </ModalFooter>
                    </LocalForm>
                </ModalBody>
            </Modal>
        );
    }
}

export default SingUp;