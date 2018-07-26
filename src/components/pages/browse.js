import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import PageSelect from '../PageSelect';
import Navbar from '../Navbar';
import Wrapper from "../Wrapper";


class Browse extends Component {

  render() {
    return (
      <section>
        <Wrapper>
          <Container>
            <p>Browse Lessons</p>
            <PageSelect/>
            <Navbar/>
          </Container>
        </Wrapper>  
      </section>
    );
  }

}

export default Browse;
