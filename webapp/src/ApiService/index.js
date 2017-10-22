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
  deleteIncident = id => {
    return axios
      .delete(url + "/incidents/" + id)
      .then(response => response.data);
  };
  markIncidentAsRead = id => {
    return axios.put(url + "/incidents/" + id).then(response => response.data);
  };
}
