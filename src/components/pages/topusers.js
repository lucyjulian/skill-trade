import React, { Component } from 'react';

class Ranking extends Component {
	render() {

		let usersRanked = [ 'John', 'Jacob', 'Jingle', 'Heimer', 'Schmidt' ];

		return (
			<div>
				<ul className="userRanking">
					{usersRanked.map(function(user) {
						return <li key={user}>{user}</li>;
					}, this)}
				</ul>
			</div>
		);
	}
}

export default Ranking;
