import axiosConfig from '../common/axiosConfig';

export function login(loginObject) {
    axiosConfig.post('/auth/signin', loginObject)
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        }, (error) => {
            console.log(error);
        });
}

export function logout() {
    localStorage.removeItem("user");
}

export function register(registerObject) {
    axiosConfig.post('/auth/signup', registerObject)
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
}

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
}