import React, { Component } from 'react';
import NewEntry from '../NewEntry/NewEntry';

class Profile extends Component {
	render() {
		return (
			<div>
				<p>User Profile</p>

				<NewEntry />

				<form action="/action_page.php">
					<input type="text" name="firstname" value="Mickey" />

					<input type="text" name="lastname" value="Mouse" />

					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Profile;
