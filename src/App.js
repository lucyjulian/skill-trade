import React, { Component } from "react";
import axios from "axios";
import { Route} from "react-router-dom";
// components
import Signup from './components/sign-up';
import LoginForm from './components/login-form';
import Navbar from './components/Navbar';
import Home from './components/pages/home';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import NewEntry from './components/NewEntry';
import SingleMess from './components/SingleMess';
import ProfileForm from './components/ProfileForm';
import Browse from './components/pages/browse';
import Profile from './components/pages/profile';
import Ranking from './components/pages/topusers';

//import Router from ReactRouter.Route;
//import Switch from ReactRouter.Switch;



class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({ 
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  render() { 
    return (
      <div>
        <div>
          <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          {/* greet user if logged in: */}
          {this.state.loggedIn && (
            <p>WELCOME, {this.state.username.toUpperCase()} TO THE HOMEPAGE </p>
          )}
          
          {/* Routes to different components */}
          {!this.state.loggedIn && <Route exact path="/" component={Home} />}

          {!this.state.loggedIn && (
            <Route
              path="/login"
              render={() => <LoginForm updateUser={this.updateUser} />}
            />
          )}
          {!this.state.loggedIn && (
            <Route
              path="/signup"
              render={() => <Signup signup={this.signup} />}
            />
          )}
          {!this.state.loggedIn && (
            <Route 
              path="/browse"
              component={Browse}
            />
          )}
          {!this.state.loggedIn && (
            <Route 
              path="/profile"
              component={Profile}
            />
          )}
          {!this.state.loggedIn && (
            <Route 
              path="/topusers"
              component={Ranking}
            />
          )}
        </div>
        <Wrapper>
          <Header />
          <NewEntry />
          <ProfileForm />
          <SingleMess />
        </Wrapper>
      </div>
    );
  }
};

export default App;
