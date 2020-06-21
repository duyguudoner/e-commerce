import React, { Component } from "react";
import { Form, Button } from 'semantic-ui-react'
import { register } from '../actions/authenticationAction'

class Register extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            email: "",
            password: "",
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    async handleRegister(e) {
        e.preventDefault();
        var userObject = {};
        const { username, email, password } = this.state;
        userObject.username = username;
        userObject.email = email;
        userObject.password = password;
        userObject.role = ["user"];

        var newUser = await register(userObject);
        console.log(newUser);
    }

    render() {
        const { username, email, password } = this.state;
        return (
            <Form onSubmit={this.handleRegister}>
                <Form.Input
                    error={{ content: 'Please enter your first name', pointing: 'below' }}
                    fluid
                    label='First name'
                    placeholder='First name'
                    id='form-input-first-name'
                    onChange={this.onChangeUsername}
                    value={username}
                />
                <Form.Input
                    error='Please enter your Password'
                    fluid
                    label='Password'
                    placeholder='Password'
                    onChange={this.onChangePassword}
                    value={password}
                />
                <Form.Input
                    error='Please enter your Email'
                    fluid
                    label='Email'
                    placeholder='Email'
                    onChange={this.onChangeEmail}
                    value={email}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}

export default Register;
