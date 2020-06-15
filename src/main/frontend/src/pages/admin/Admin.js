import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import { Kategoriler, Altkategoriler, Siparisler, Urunler, Uyeler } from '../index'

class Admin extends Component {
    state = { activeItem: 'Uyeler' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Grid>
                <Grid.Column width={4}>
                    <Menu fluid vertical tabular>
                        <Menu.Item
                            name='Uyeler'
                            active={activeItem === 'Uyeler'}
                            onClick={this.handleItemClick}>
                            Üyeler
                        </Menu.Item>
                        <Menu.Item
                            name='Kategoriler'
                            active={activeItem === 'Kategoriler'}
                            onClick={this.handleItemClick}>
                            Kategoriler
                        </Menu.Item>
                        <Menu.Item
                            name='Altkategoriler'
                            active={activeItem === 'Altkategoriler'}
                            onClick={this.handleItemClick}>
                            Altkategoriler
                        </Menu.Item>
                        <Menu.Item
                            name='Urunler'
                            active={activeItem === 'Urunler'}
                            onClick={this.handleItemClick}>
                            Ürünler
                        </Menu.Item>
                        <Menu.Item
                            name='Siparisler'
                            active={activeItem === 'Siparisler'}
                            onClick={this.handleItemClick}>
                            Siparişler
                        </Menu.Item>
                    </Menu>
                </Grid.Column>

                <Grid.Column stretched width={12}>
                    <Segment>{
                        (activeItem === 'Uyeler') ? <Uyeler /> :
                            (activeItem === 'Kategoriler') ? <Kategoriler /> :
                                (activeItem === 'Altkategoriler') ? <Altkategoriler /> :
                                    (activeItem === 'Urunler') ? <Urunler /> :
                                        <Siparisler />
                    }
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}
export default Admin;
