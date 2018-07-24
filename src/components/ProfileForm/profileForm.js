import React, { Component } from "react";
// import "../css/bootstrap.css";

class ProfileForm extends React.Component {

	render() {
		return (
			<section className = "card container text-center mx-auto">
                <div className ="card-body">
                <form>
                    <div className= "form-group">
                        <label for="display" className="form-text">
                            What is your Display Name?
                        </label>
                        <div className="">
                            <input type="title" className="form-control text-center" id="display" placeholder="Display Name"/>
                        </div>
                    </div>
                    <div className= "form-group">
                        <label for="location" className="form-text">
                            Where are you located?
                        </label>
                        <div className="">
                            <input type="title" className="form-control text-center" id="location" placeholder="Location"/>
                        </div>
                    </div>
                    <div className= "form-group">
                        <label for="description" className="form-text">
                            Description of your Skills
                        </label>
                        <div className="">
                            <textarea className="form-control text-center" id="description" placeholder="Description of your Skills go here"/>
                        </div>
                    </div>
                </form>
                </div>
			</section>
		);
	}
};

export default ProfileForm;