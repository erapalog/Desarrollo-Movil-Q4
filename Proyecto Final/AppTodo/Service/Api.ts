import axios from "axios";

const Api = axios.create({
    baseURL:'http://190.107.150.60:1510/task/'
})

export default Api;