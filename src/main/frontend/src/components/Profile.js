import React, { Component } from "react";
import { getCurrentUser } from '../actions/authenticationAction'

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: getCurrentUser()
        }
    }

    render() {
        const { currentUser } = this.state;

        return (
            <div>
                <h3>
                    <strong>{currentUser.uye_adi}</strong> Profile
                </h3>
                <p>
                    <strong>Token:</strong>{" "}
                    {currentUser.accessToken.substring(0, 20)} ... {" "}
                    {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                </p>
                <p>
                    <strong>Id:</strong>{" "}
                    {currentUser.uyeno}
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    {currentUser.uye_mail}
                </p>
                <strong>Authorities:</strong>
                <ul>
                    {currentUser.roles &&
                        currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                </ul>
            </div>
        )
    }
}

export default Profile;