import React, { Component } from "react";
// import "../css/bootstrap.css";
import API from '../../utils/API';
// import axios from "axios";


class ProfileForm extends React.Component {
    
    state = {
        userID: "",
        profile: [],
        firstName: "",
        lastName: "",
        email: "",
        imageLink: "",
        birthdate: "",
        location: "",
        skills: ""
    };

    // getUser() {
	// 	axios.get('/user/').then((response) => {
			
	// 		this.setState({
	// 			userID: response.data.user._id
	// 		})
			
    //     });
    // };
    
    // componentWillMount() {
    //     this.getUser();
    // };
    componentDidMount() {
        this.loadProfile();
    };
    
    loadProfile = () => {
        API.getProfile()
        .then(res =>
            this.setState({ profile: res.data, _id: "", firstName: "", lastName: "", email: "", imageLink: "", birthdate: "", location: "", skills: "" })
        )
        .catch(err => console.log(err));
    };
    
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.email) {
          API.saveProfile({
            _id: this.state._id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            imageLink: this.state.imageLink,
            birthdate: this.state.birthdate,
            location: this.state.location,
            skills: this.state.skills
          })
            .then(res => this.loadProfile())
            .catch(err => console.log(err));
        }
    };
    

	render() {
		return (
			<section className = "card container text-center mx-auto">
                <div className ="card-body">
                <h1>_id: {this.state.userID}</h1>
                <form>
                    <div className= "form-group">
                        <label for="firstName" className="form-text">
                            First Name?
                        </label>
                        <div className="">
                            <input type="title" className="form-control text-center" id="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className= "form-group">
                        <label for="lastName" className="form-text">
                            Last Name?
                        </label>
                        <div className="">
                            <input type="title" className="form-control text-center" id="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className= "form-group">
                        <label for="email" className="form-text">
                            Email?
                        </label>
                        <div className="">
                            <input type="title" className="form-control text-center" id="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className= "form-group">
                        <label for="imageLink" className="form-text">
                            Image Link?
                        </label>
                        <div className="">
                            <input type="title" className="form-control text-center" id="imageLink" placeholder="Image Link" value={this.state.imageLink} onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className= "form-group">
                        <label for="birthdate" className="form-text">
                            Birthday (mm/dd/yy)?
                        </label>
                        <div className="">
                            <input type="title" className="form-control text-center" id="birthdate" placeholder="Birthday" value={this.state.birthdate} onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className= "form-group">
                        <label for="location" className="form-text">
                            Where are you located?
                        </label>
                        <div className="">
                            <input type="title" className="form-control text-center" id="location" placeholder="Location" value={this.state.location} onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className= "form-group">
                        <label for="skills" className="form-text">
                            Description of your Skills
                        </label>
                        <div className="">
                            <textarea className="form-control text-center" id="skills" placeholder="Description of your Skills go here" value={this.state.skills} onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <button onClick={this.handleFormSubmit}>Update Profile</button>
                </form>
                </div>
			</section>
		);
	}
};

export default ProfileForm;