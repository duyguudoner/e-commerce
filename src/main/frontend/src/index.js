import React from 'react';
import ReactDOM from "react-dom"
import App from './App'
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from 'react-router-dom';

class Application extends React.Component {
    render() {
        return (
            <App />
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <Application />
    </BrowserRouter>
    , document.getElementById('root'))

serviceWorker.unregister();
