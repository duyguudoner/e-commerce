import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { login } from '../actions/authenticationAction'

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    async handleLogin(e) {
        e.preventDefault();

        this.setState({
            loading: true
        });

        const { username, password } = this.state;
        var loginObject = {};
        loginObject.username = username;
        loginObject.password = password;

        await login(loginObject)
        this.props.history.push("/profile");
        window.location.reload();
    }

    render() {
        const { username, password } = this.state;
        return (
            <Form onSubmit={this.handleLogin}>
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
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}

export default Login;