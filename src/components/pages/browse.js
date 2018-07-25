import React, { Component } from "react";
<<<<<<< HEAD
import PageSelect from '../Header/PageSelect';
=======
import { Container, Row, Col } from 'reactstrap';
import Header from '../Header/header';
import Navbar from '../Navbar';
import Wrapper from "../Wrapper";

>>>>>>> skeleton

class Browse extends Component {

  render() {
    return (
<<<<<<< HEAD
      <section>  
      <div class = "container text-center mx-auto">
        <p>Browse Lessons</p>
        <PageSelect />
      </div>
=======
      <section>
        <Wrapper>
          <Container>
            <p>Browse Lessons</p>
            <Header />
            <Navbar/>
          </Container>
        </Wrapper>  
>>>>>>> skeleton
      </section>
    );
  }

}

export default Browse;
