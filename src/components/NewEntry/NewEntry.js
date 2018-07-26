import React, { Component } from "react";
// import "../css/bootstrap.css";

class NewEntry extends React.Component {

	render() {
		return (
			<section className = "card container text-center mx-auto">
                <div className ="card-body">
                <form>
                    <div className= "form-group">
                        <label for="inputTitle" className="form-text">
                            Title of your Listing
                        </label>
                        <div className="">
                            <input type="title" className="form-control text-center" id="inputTitle" placeholder="Title"/>
                        </div>
                    </div>
                    <div className= "form-group">
                        <label for="inputLoca" className="form-text">
                            Location for your Listing
                        </label>
                        <div className="">
                            <input type="title" className="form-control text-center" id="inputLoca" placeholder="Location"/>
                        </div>
                    </div>
                    <div className= "form-group">
                        <label for="inputTags" className="form-text">
                            Tags for your Listing
                        </label>
                        <div className="">
                            <input type="title" className="form-control text-center" id="inputTags" placeholder="Tags"/>
                        </div>
                    </div>
                    <div className= "form-group">
                        <label for="inputDesc" className="form-text">
                            Description
                        </label>
                        <div className="">
                            <textarea className="form-control text-center" id="inputDesc" placeholder="Description goes here"/>
                        </div>
                    </div>
                </form>
                </div>
			</section>
		);
	}
};

export default NewEntry;