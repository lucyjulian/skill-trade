import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../Form";




class Listing extends Component {
  state = {
    title: [],
    description: "",
    duration: "",
    datesAvailable: "",
    tags: ""
  };


render() {
    return (
        <div >
            <form className='list-container'>
            <Input
            className='listing-text'
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title"
              />
              <Input
              className='listing-text'
                value={this.state.datesAvailable}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Dates Available"
              />
              <TextArea
              className='listing-text desc-box'             
                value={this.state.description}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Description"
              />
              <Input
              className='listing-text'
                value={this.state.Duration}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Duration"
              />
              <Input
              className='listing-text'
                value={this.state.tags}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Tags"
              />
                </form>
            </div>
    )
}

}

export default Listing;
