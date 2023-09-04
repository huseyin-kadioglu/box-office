import axios from "axios";

const baseURL = "http://localhost:8080/users";

const Axios = (params) => {
    axios.get(baseURL, params).then(response => console.log(response.data));
};
export default Axios;