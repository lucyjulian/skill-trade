import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import PageSelect from "../PageSelect";
import Wrapper from '../Wrapper'

class Home extends Component {
  
// if (loggedIn) {
  render() {
    return (
      <section>
        <Wrapper>
          <Container>
            <PageSelect/>
              <h1>
                HOME PAGE (not logged in)
              </h1>
          </Container>
        </Wrapper>
      </section>
    );
  }
// }
}

export default Home;
