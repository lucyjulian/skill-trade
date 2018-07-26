import React, { Component } from "react";
import API from "./../utils/API";
import { Button, Form, FormGroup, Label, Input  } from "reactstrap";
import { MessageListItem, MessageList } from "./../Message";
import { Container, Row, Col } from 'reactstrap';
import Wrapper from "../Wrapper";

class Messaging extends Component {
  arr = [];
  state = {
    messages: [],
    messageBody: [],
    receiver: "",
    body: ""
  };
  componentDidMount() {
    //   console.log(this.props.username)
    this.getUser(this.props.username);

  }
  getUser = username => {
    API.getUser(username).then(res => {
      console.log(res);
      this.setState({
        messages: res.data.message
      });
      this.state.messages.map(id => {
        this.getMessageBody(id)
      })
      console.log(this.state.messageBody);
      // this.getMessageBody(this.state.messages[0])
    });
  };
  getMessageBody = id => {
    console.log(id)
    API.getMessageBody(id).then(res => {
      // this.setState(state => ({
      //   messageBody: [...state.messageBody, res]
      // }))
      this.state.messageBody.push(res)
      // this.setState(
      //   this.state
      // )
      // this.state
      console.log(res.data[0].body+"@2222222");
      // console.log(this.state.messageBody[0].data[0].body + "@#####33");
      return res.data[0].body; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    })
  }
  

  displayMessages = () => {

    // event.preventDefault();
  this.state.messageBody.map(message => {
      return (
        <MessageListItem id="center" >
          <strong>
            <h1>{console.log(message.data[0].body)}</h1>
          </strong>
        </MessageListItem>
        
      );
    })

  }
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.receiver && this.state.body) {
      API.sendMessage({
        receiver: this.state.receiver,
        body: this.state.body,
      })
        // .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  provideMessages = () => {
    this.state.messageBody.map(message => {
      console.log(message.body)
    })
  }
  //   // When this component mounts, grab the book with the _id of this.props.match.params.id
  //   // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  //   componentDidMount() {
  //     API.getBook(this.props.match.params.id)
  //       .then(res => this.setState({ book: res.data }))
  //       .catch(err => console.log(err));
  // //   }
  // componentDidMount() {
  //     API.getUser()
  // }

  render() {
    return (
      <section>
        <Wrapper>
        <Container>
        <div>
          <h1>Send Message</h1>
          <Form>
          <FormGroup>
              <Label for="exampleText">Message</Label>
              <Input
                type="textarea"
                name="body"
                id="exampleText"
                onChange={this.handleInputChange}
                value={this.state.body}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">User</Label>
              <Input
                type="textarea"
                name="receiver"
                id="exampleEmail"
                onChange={this.handleInputChange}
                value={this.state.receiver}
              />
            </FormGroup>
            <MessageList>
              {this.state.messages.map(message => {
                return (
                  <MessageListItem id="center" key={message._id}>
                    <strong>
                      <h1>{`Message ID: ${message}`}</h1>
                      {/* <a href={article.web_url}>{article.web_url}</a> */}
                      {/* <h3>{new Date(article.pub_date).toLocaleDateString('en-US', options)}</h3> */}
                    </strong>
                  </MessageListItem>
                  
                );
              })}
            </MessageList>
            {/* <FormGroup>
              <Label for="exampleEmail">To (username):</Label>
              <Input
                type="textarea"
                name="body"
                id="exampleText"
                onChange={this.handleInputChange}
                value={this.state.body}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">User</Label>
              <Input
                type="textarea"
                name="receiver"
              <Label for="exampleEmail">To (username):</Label>
              <Input
                type="textarea"
                name="reveiver"
                id="exampleEmail"
                onChange={this.handleInputChange}
                value={this.state.receiver}
              />
            </FormGroup>
                        <Button
            </FormGroup> */}

            <Button
                disabled={!(this.state.receiver && this.state.body)}
                onClick={this.handleFormSubmit}
              >
                Send Message
              </Button>
            <MessageList>
            <button onClick={this.displayMessages()}>View Messages</button>
            {/* {this.state.messageBody.map(message => {
                return (
                  <MessageListItem id="center" >
                    <strong>
                      <h1>{console.log(message.data[0].body)}</h1>
                    </strong>
                  </MessageListItem>
                  
                ); */}
              {/* })} */}

                  {/* <MessageListItem id="center" key={message.id}> 
                  <strong>
                    <h1>{message.body}</h1>
                    <h1>{message.data.body}</h1>
                  </strong>
                  </MessageListItem>
                                )
              })} */}
              
            </MessageList>
            {/* <FormGroup>
              <Label for="exampleEmail">To (username):</Label>
              <Input
                type="textarea"
                name="reveiver"
                id="exampleEmail"
                onChange={this.handleInputChange}
                value={this.state.receiver}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">To (username):</Label>
              <Input
                type="textarea"
                name="reveiver"
                id="exampleEmail"
                onChange={this.handleInputChange}
                value={this.state.receiver}
              />
            </FormGroup> */}


          </Form>

        </div>
        <div>
          <h1>Inbox</h1>
          {/* <p>{this.state.user}</p> */}
        </div>
        </Container>
        </Wrapper>
      </section>
    );
  }
}

export default Messaging;
