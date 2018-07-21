import axios from "axios";

export default {
  // Gets all books
  getUser: function(username) {
      console.log("here API")
    return axios.get("/user/api/" + username);
  }
};