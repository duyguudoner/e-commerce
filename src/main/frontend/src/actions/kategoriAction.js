const axios = require('axios');

function createKategori(kategoriObject) {
    axios.post('http://localhost:8080/kategori',kategoriObject)
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
}

module.exports = {
    createKategori
}