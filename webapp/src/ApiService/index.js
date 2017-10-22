import axios from "axios";
import openSocket from "socket.io-client";
const url = "http://192.168.19.93:3001/api";
const socket = openSocket("http://localhost:8000");

export default class ApiService {
  GET = endpoint => {
    return axios.get(url + endpoint).then(response => response.data);
  };
  subscribeToTimer = cb => {
    socket.on("fetchAccident", cb);
  };
}
