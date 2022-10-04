
import axios from "axios"

const journalApi = axios.create({
    baseURL:'https://vue-proyectos-dd3c9-default-rtdb.firebaseio.com'
})


export default journalApi