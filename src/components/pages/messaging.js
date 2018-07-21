import React, { Component } from "react";
import API from "./../utils/API";

class Messaging extends Component {
    state = {
          user: {}
      };
      componentDidMount() {
        //   console.log(this.props.username)
          this.getUser(this.props.username)
      };
      getUser = username => {
          API.getUser(username)
          .then(res => {
              console.log(res);
              this.setState({
                  user: res.data
              })
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
      <div>
        <p>User Inbox</p>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">From</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input className="input" type="text" placeholder="Name" />
                <span className="icon is-small is-left">
                  <i className="fas fa-user" />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded has-icons-left has-icons-right">
                <input
                  className="input is-success"
                  type="email"
                  placeholder="Email"
                  value="alex@smith.com"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check" />
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label" />
          <div className="field-body">
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control">
                  <a className="button is-static">+44</a>
                </p>
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="tel"
                    placeholder="Your phone number"
                  />
                </p>
              </div>
              <p className="help">Do not enter the first zero</p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Department</label>
          </div>
          <div className="field-body">
            <div className="field is-narrow">
              <div className="control">
                <div className="select is-fullwidth">
                  <select>
                    <option>Business development</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label">
            <label className="label">Already a member?</label>
          </div>
          <div className="field-body">
            <div className="field is-narrow">
              <div className="control">
                <label className="radio">
                  <input type="radio" name="member" />
                  Yes
                </label>
                <label className="radio">
                  <input type="radio" name="member" />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Subject</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  className="input is-danger"
                  type="text"
                  placeholder="e.g. Partnership opportunity"
                />
              </div>
              <p className="help is-danger">This field is required</p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Question</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Explain how we can help you"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label" />
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className="button is-primary">Send message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Messaging;