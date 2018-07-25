import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Header from "../Header";
import Wrapper from '../Wrapper'

class Home extends Component {
  
// if (loggedIn) {
  render() {
    return (
      <section>
        <Wrapper>
          <Container>
            <Header/>
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
