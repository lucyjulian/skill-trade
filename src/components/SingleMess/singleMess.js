import React, { Component } from "react";
// import "../css/bootstrap.css";

class SingleMess extends React.Component {

	render() {
		return (
			<section className = "card container text-center mx-auto">
                <div className ="card-body">
                    <div className="media">
                        <div className="media-body">
                            <h5 className="mt-0 mb-1">
                                Messages will append below in this form :
                            </h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                        </div>
                        <img className="ml-3" src="..." alt="placeholder"/>
                    </div>
                    <br/>
                    <form>
                        <div className= "form-group">
                            <label for="user" className="form-text">
                                Send Message to :
                            </label>
                            <div className="">
                                <input type="title" className="form-control text-center" id="user" placeholder="User"/>
                            </div>
                        </div>
                        <div className= "form-group">
                            <label for="message" className="form-text">
                                Type your Message Below
                            </label>
                            <div className="">
                                <textarea className="form-control text-center" id="description" placeholder="Message"/>
                            </div>
                        </div>
                    </form>
                </div>
			</section>
		);
	}
};

export default SingleMess;