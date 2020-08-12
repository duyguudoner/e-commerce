import axiosConfig from '../common/axiosConfig';

export function login(loginObject) {
    return axiosConfig.post('/auth/signin', loginObject)
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        }, (error) => {
            console.log(error);
        });
}

export function register(registerObject) {
    return axiosConfig.post('/auth/signup', registerObject)
        .then((response) => {
            return response;
        }, (error) => {
            console.log(error);
        });
}

export function logout() {
    localStorage.removeItem("user");
}



export function getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
}