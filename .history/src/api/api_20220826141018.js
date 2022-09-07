import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3001/'
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?_page=${currentPage}&_limit=${pageSize}`).then(response => response.data)
    },
    getAuth() {
        return instance.get('auth?id=1').then(response => {
            console.log(response.data, 5);
            response.data})
    }
}


