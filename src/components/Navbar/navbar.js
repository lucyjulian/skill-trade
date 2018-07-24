import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "../../App.css";
import axios from "axios";
// import "../css/bootstrap.css";


class Navbar extends React.Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
        }
      })
      .catch(error => {
        console.log("Logout error");
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);

    return (
      <div className = "bg-dark">
        <header className = "header mx-auto text-center">
          <nav className="container navbar navbar-expand-md text-center mx-auto navbar-dark">
          {loggedIn ? (
            <div className="bg-info">
              <section className="navbar-section">
                <Link
                  to="#"
                  id="navText"
                  className="btn btn-link"
                  onClick={this.logout}
                >
                  <span>logout</span>
                </Link>
              </section>
            </div>
          ) : (
            <div>
            <div className = "justify-content-end">
              {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav"> */}
                <div className = "navbar-nav float-left">
                  <Link to="/" className="nav-item">
                    <span id="navText" className="nav-link">Home</span>
                  </Link>
                  <Link to="/login" className="nav-item">
                    <span id="navText" className="nav-link">Login</span>
                  </Link>
                  <Link to="/signup" className="nav-item">
                    <span id="navText" className="nav-link">Sign Up</span>
                  </Link>
                </div>
              </div>
            </div>
          // </div>
          )}
            <div className = "col">
              <p className = "h3 navbar-brand">
                Branding
              </p>
            </div>
            <div>
              {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                <div className = "navbar-nav float-right">
                  <Link to="/browse" className="nav-item ">
                    <span id="navText" className="nav-link">Browse</span>
                  </Link>
                  <Link to="/topcont" className="nav-item ">
                    <span id="navText" className="nav-link">Top Users</span>
                  </Link>
                  <Link to="/profile" className="nav-item">
                    <span id="navText" className="nav-link">Profile</span>
                  </Link>
                </div>
              {/* </div> */}
            </div>
          </nav>
        </header>
      </div>

      // <div>
      //   <header className="navbar App-header" id="nav-container">
      //     <div className="col-4">
      //       {loggedIn ? (
      //         <section className="navbar-section">
      //           <Link
      //             to="#"
      //             id="navText"
      //             className="btn btn-link text-secondary"
      //             onClick={this.logout}
      //           >
      //             <span className="text-secondary">logout</span>
      //           </Link>
      //         </section>
      //       ) : (
              
      //         <section className="navbar-section">
      //           <Link to="/" className="btn btn-link text-secondary">
      //             <span id="navText" className="text-secondary">home</span>
      //           </Link>
      //           <Link to="/login" className="btn btn-link text-secondary">
      //             <span id="navText" className="text-secondary">login</span>
      //           </Link>
      //           <Link to="/signup" className="btn btn-link">
      //             <span id="navText" className="text-secondary">sign up</span>
      //           </Link>
      //         </section>    
      //       )}
      //     </div>
      //     <section className="navbar-section rightside">
      //           <Link to="/browse" className="btn btn-link text-secondary">
      //             <span id="navText" className="text-secondary">browse</span>
      //           </Link>
      //           <Link to="/topcont" className="btn btn-link text-secondary">
      //             <span id="navText" className="text-secondary">top contributors</span>
      //           </Link>
      //           <Link to="/profile" className="btn btn-link">
      //             <span id="navText" className="text-secondary">Profile</span>
      //           </Link>
      //         </section>
      //   </header>
      // </div>
    );
  }
}

export default Navbar;
