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

    handleRegister(e) {
        e.preventDefault();

        register(
            this.state.username,
            this.state.email,
            this.state.password
        ).then(
            response => {
                console.log(response)
            }
        );
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
                    value={username}
                />
                <Form.Input
                    error='Please enter your Password'
                    fluid
                    label='Password'
                    placeholder='Password'
                    value={password}
                />
                <Form.Input
                    error='Please enter your Email'
                    fluid
                    label='Email'
                    placeholder='Email'
                    value={email}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}

export default Register;
