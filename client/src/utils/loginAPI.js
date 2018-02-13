import axios from "axios";

export default {
  // Gets all users
  getUser: function() {
    return axios.get("/api/login");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/login/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/login/" + id);
  },
  // logins a user to the database
  loginUser: function(userData) {
    return axios.post("/api/login", userData);
  }
};