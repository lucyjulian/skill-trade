import axios from "axios";

export default {
  // Gets all books
  getUser: function(username) {
    return axios.get("/api/users/messaging/" + username);
  }
};