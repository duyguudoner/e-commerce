import axiosConfig from '../common/axiosConfig';
import authHeader from '../helper/authHeader'

export function fetchKategori() {
    axiosConfig.get('/kategori',
        { headers: authHeader() })
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        })
}

export function createKategori(kategoriObject) {
    axiosConfig.post('/kategori', kategoriObject)
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
}