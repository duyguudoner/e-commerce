import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/kategoriler">Kategoriler</Link>
                            </li>
                            <li>
                                <Link to="/siparisler">Siparişler</Link>
                            </li>
                            <li>
                                <Link to="/uyeler">Üyeler</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Router>
        )
    }
}

export default Header;