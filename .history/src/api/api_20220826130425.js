import axios from 'axios';

export const getUsers = () => {
    return axios.get(`http://localhost:3001/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`)
}
