import React from 'react';
import ReactDOM from "react-dom"
import App from './App'
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from "./serviceWorker";

class Application extends React.Component {
    render() {
        return (
            <App />
        )
    }
}

ReactDOM.render(<Application />, document.getElementById('root'))
