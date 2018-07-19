import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router-dom';


class Profile extends Component {
	render() {
		return (
			<div>
				<p>User Profile</p>

				<form action="/action_page.php">
					<input type="text" name="firstname" value="Mickey" />

					<input type="text" name="lastname" value="Mouse" />

					<input type="submit" value="Submit" />
					
				</form>
				{console.log("/messaging/")}
				<a> <Link to={`/messaging/${this.props.username}`}>Messaging</Link></a>
			</div>
		);
	}
}

export default Profile;
