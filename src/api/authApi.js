
import axios from "axios"

const authApi = axios.create({
    baseURL:'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyCtqjlYsn7-_5MkDSS-fH7P60BfsREfbl8'
    }
})


export default authApi