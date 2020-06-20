import React, { Component } from 'react'
import { CreateKategori } from '../../components'
import { fetchKategori } from '../../actions/kategoriAction'

class Kategoriler extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        };
    }

    componentDidMount = () => {
        fetchKategori().then(
            response => {
                this.setState({
                    content: response.data
                });
            },
            error => {
                this.setState({
                    content:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                });
            }
        )
    }

    render() {
        return (
            <div>
                <CreateKategori />
                <h3>{this.state.content}</h3>
            </div>
        )
    }


}

export default Kategoriler;
