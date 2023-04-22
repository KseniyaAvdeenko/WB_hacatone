import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/'
})

export const baseAPI = {


    async createUser(user) {
    	return axios.post('http://localhost:8000/auth/users/', user).then(response => response)
    },
    async getTokens(username, password) {
        return await axios.post('http://localhost:8000/api/token/create', {username: username, password: password}).then(response => response)
    },
    async refreshToken(refresh) {
        console.log('api refresh')
        return await instance.post('token/refresh/', {refresh: refresh}).then(response => response);
    }
}
