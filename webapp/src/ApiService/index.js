import axios from "axios";
import openSocket from "socket.io-client";
const url = "http://localhost:3001/api/";
const socket = openSocket("http://localhost:8000");

const ApiService = {};
ApiService.login = user => {
  return axios.post(url + "login", user).then(response => response.data);
};
ApiService.get = endpoint => {
  return axios.get(url + endpoint).then(response => response.data);
};
ApiService.subscribeToSocket = cb => {
  socket.on("fetchAccident", cb);
};
ApiService.deleteIncident = id => {
  return axios.delete(url + "/incidents/" + id).then(response => response.data);
};
ApiService.markIncidentAsRead = id => {
  return axios.put(url + "/incidents/" + id).then(response => response.data);
};
export default ApiService;
