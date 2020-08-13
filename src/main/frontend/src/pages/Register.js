import React, { Component } from "react";
import { Form, Button, Dimmer, Loader } from 'semantic-ui-react'
import { register, login } from '../actions/authenticationAction'
import { withRouter } from 'react-router'

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
            clickSubmit: false,
            loading: false
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
        this.setState({ clickSubmit: true, loading: true })
        var userObject = {};
        const { username, email, password } = this.state;
        if (username !== "" && email !== "" && password !== "") {
            userObject.username = username;
            userObject.email = email;
            userObject.password = password;
            userObject.role = ["user"];

            var newUser = await register(userObject);
            console.log(newUser)
            if (newUser && newUser.status && newUser.status === 200) {
                var loginObject = {};
                loginObject.username = username;
                loginObject.password = password;

                var loginUser = await login(loginObject)
                if (loginUser && loginUser.accessToken) {
                    window.location = window.location.origin;
                }
            }
        } else {
            this.setState({ loading: false });
        }
    }

    render() {
        const { username, email, password, clickSubmit, loading } = this.state;
        return (
            <div>
                {loading &&
                    <Dimmer active inverted>
                        <Loader inverted>Yükleniyor...</Loader>
                    </Dimmer>}
                <Form onSubmit={this.handleRegister}>
                    <Form.Input
                        error={(username === "" && clickSubmit) ? { content: 'Lütfen kullanıcı adını giriniz.', pointing: 'below' } : false}
                        fluid
                        label='Kullanıcı Adı'
                        placeholder='Kullanıcı Adı'
                        id='form-input-first-name'
                        onChange={this.onChangeUsername}
                        value={username}
                    />
                    <Form.Input
                        error={(password === "" && clickSubmit) ? { content: 'Lütfen şifrenizi giriniz.', pointing: 'below' } : false}
                        fluid
                        label='Şifre'
                        placeholder='Şifre'
                        onChange={this.onChangePassword}
                        value={password}
                        type='password'
                    />
                    <Form.Input
                        error={(email === "" && clickSubmit) ? { content: 'Lütfen geçerli bir e-posta adresi giriniz.', pointing: 'below' } : false}
                        fluid
                        label='E-posta Adresi'
                        placeholder='tuna@gmail.com'
                        onChange={this.onChangeEmail}
                        value={email}
                    />
                    <Button type='submit'>Üye Ol</Button>
                </Form>
            </div>
        )
    }
}

export default withRouter(Register);
