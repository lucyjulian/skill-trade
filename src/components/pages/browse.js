import React, { Component } from "react";
import PageSelect from '../Header/PageSelect';

class Browse extends Component {

  render() {
    return (
      <section>  
      <div class = "container text-center mx-auto">
        <p>Browse Lessons</p>
        <PageSelect />
      </div>
      </section>
    );
  }

}

export default Browse;
