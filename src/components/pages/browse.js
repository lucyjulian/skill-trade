import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Header from '../Header/header';
import Navbar from '../Navbar';
import Wrapper from "../Wrapper";


class Browse extends Component {

  render() {
    return (
      <section>
        <Wrapper>
          <Container>
            <p>Browse Lessons</p>
            <Header />
            <Navbar/>
          </Container>
        </Wrapper>  
      </section>
    );
  }

}

export default Browse;
