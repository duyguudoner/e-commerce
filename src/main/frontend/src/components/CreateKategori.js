import React, { Component } from 'react'
import { Button, Modal, Input, TextArea } from 'semantic-ui-react'
import { createKategori } from '../actions/kategoriAction'

class CreateKategori extends Component {
    state = {
        open: false,
        kategori_adi: "",
        kategori_aciklama: ""
    }

    show = (dimmer) => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })
    handleKategoriAdi = (event) => {
        this.setState({ kategori_adi: event.target.value })
    }
    handleKategoriAciklama = (event) => {
        this.setState({ kategori_aciklama: event.target.value })
    }
    handleSubmit = async () => {
        const { kategori_adi, kategori_aciklama } = this.state
        if (kategori_adi !== "" && kategori_aciklama !== "") {
            var kategoriObject = {}
            kategoriObject.kategori_adi = kategori_adi;
            kategoriObject.kategori_aciklama = kategori_aciklama;
            await createKategori(kategoriObject);
            this.setState({ open: false, kategori_adi: "", kategori_aciklama: "" })
        }
    }

    render() {
        const { open, dimmer, kategori_adi, kategori_aciklama } = this.state

        return (
            <div>
                <Button onClick={this.show(true)} className="adminCreateButton">Kategori Ekle</Button>

                <Modal dimmer={dimmer} open={open} onClose={this.close}>
                    <Modal.Header>Kategori Ekle</Modal.Header>
                    <Modal.Content >
                        <Modal.Description>
                            <Input value={kategori_adi} onChange={this.handleKategoriAdi} placeholder="Kategori Adı" />
                            <TextArea value={kategori_aciklama} onChange={this.handleKategoriAciklama} placeholder="Kategori Açıklama" />
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.close}>
                            İptal
                        </Button>
                        <Button
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content="Ekle"
                            onClick={this.handleSubmit}
                        />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default CreateKategori;
