import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import ProfileWidget from "../ProfileWidget";
import ProfileForm from "../ProfileForm";
import Wrapper from "../Wrapper";


class Profile extends Component {



  render() {
    return (
      <section>
        <Wrapper>
        <Container>
        <p>User Profile</p>

        <form action="/action_page.php">
          <input type="text" name="firstname" value="Mickey" />

          <input type="text" name="lastname" value="Mouse" />

          <input type="submit" value="Submit" />
        </form>

        {/* {this.state.loggedIn && <Route path="/browse" component={Browse} />} */}
        {/* {console.log("/messaging/" + this.props.username)} */}
        <a> <Link to={`/messaging/${this.props.username}`}>Messaging</Link></a>
        <Profile/>
        <ProfileForm/>
        </Container>
        </Wrapper>
      </section>
    );
  }
}

export default Profile;
