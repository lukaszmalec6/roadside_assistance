import axios from "axios";

const url = "http://192.168.19.93:3001/api";

export default class ApiService {
  GET = endpoint => {
    return axios.get(url + endpoint).then(response => response.data);
  };
}
