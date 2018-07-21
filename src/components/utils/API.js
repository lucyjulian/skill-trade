import axios from "axios";

export default {
  // Gets all books
  getUser: function(username) {
      console.log("here API")
    return axios.get("/user/" + username);
  },
  sendMessage: function(receiverData) {
      console.log("message API")
      return axios.post("/user", receiverData)
  }
};