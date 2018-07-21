import axios from "axios";

export default {
 
  saveListing: function(listingData) {
      console.log('hit api', listingData);
    return axios.post("/api/listings", listingData);
  }
};
