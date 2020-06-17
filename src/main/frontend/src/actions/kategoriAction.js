import axiosConfig from '../common/axiosConfig';

export function createKategori(kategoriObject) {
    axiosConfig.post('/kategori',kategoriObject)
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
}