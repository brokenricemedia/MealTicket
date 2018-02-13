import axios from "axios";

export default {
  // Gets all users
  getFood: function() {
    return axios.get("/api/food");
  },
  // Gets the user with the given id
  getFood: function(id) {
    return axios.get("/api/food/" + id);
  },
  // Deletes the user with the given id
  deleteFood: function(id) {
    return axios.delete("/api/food/" + id);
  },
  // logins a user to the database
  saveFood: function(foodData) {
    return axios.post("/api/food", foodData);
  }
};