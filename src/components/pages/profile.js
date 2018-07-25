import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import ProfileForm from "../ProfileForm/profileForm";


class Profile extends Component {



  render() {
    return (
      <div>
        <p>User Profile</p>

        <ProfileForm />

        {/* {this.state.loggedIn && <Route path="/browse" component={Browse} />} */}
        {/* {console.log("/messaging/" + this.props.username)} */}
        <div> <Link to={`/messaging/${this.props.username}`}>Messaging</Link></div>
      </div>
    );
  }
}

export default Profile;
