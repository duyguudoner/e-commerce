import React, { Component } from 'react'
import { Form, Button, Dimmer, Loader } from 'semantic-ui-react'
import { login } from '../actions/authenticationAction'
import { withRouter } from 'react-router'

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
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

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    async handleLogin(e) {
        e.preventDefault();
        this.setState({ clickSubmit: true, loading: true })
        const { username, password } = this.state;
        var loginObject = {};
        if (username !== "" && password !== "") {
            loginObject.username = username;
            loginObject.password = password;

            var loginUser = await login(loginObject)
            if (loginUser && loginUser.accessToken) {
                window.location = window.location.origin;
            }
        } else {
            this.setState({ loading: false });
        }
    }

    render() {
        const { username, password, clickSubmit, loading } = this.state;
        return (
            <div>
                {loading &&
                    <Dimmer active inverted>
                        <Loader inverted>Yükleniyor...</Loader>
                    </Dimmer>}
                <Form onSubmit={this.handleLogin}>
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
                    <Button type='submit'>Giriş Yap</Button>
                </Form>
            </div>
        )
    }
}

export default withRouter(Login);
