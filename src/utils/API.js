import axios from "axios";

export default {

  importUserID: function() {

  },
 
  saveListing: function(listingData) {
      console.log('hit api', listingData);
    return axios.post("/api/listings", listingData);
  },

  getProfile: function(id) {
    return axios.get("/api/profiles/" + id);
  },

  saveProfile: function(profileData) {
    return axios.put("/api/profiles/"+ profileData._id, profileData);
  }
};
