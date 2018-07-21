import React from 'react';
<<<<<<< HEAD
//import PropTypes from 'prop-types';
import '../../App.css';
=======
import PropTypes from 'prop-types';
// import "../../App.css";
import "../css/bootstrap.css"

// function SelectPage(props) {
// 	var pages = [ 'All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python' ];
// 	return (
// 		<ul className="pages">
// 			{pages.map(function(page) {
// 				return (
// 					<li
// 						style={page === props.selectedPage ? { color: '#d0021b' } : null}
// 						onClick={props.onSelect.bind(null, page)}
// 						key={page}
// 					>
// 						{page}
// 					</li>
// 				);
// 			})}
// 		</ul>
// 	);
// }


>>>>>>> master

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedPage: 'All'
		};

		this.updatePage = this.updatePage.bind(this);
	}

	updatePage(page) {
		this.setState(function() {
			return {
				selectedPage: page
			};
		});
	}

	render() {
		var pages = [ 'Page 1', 'Page 2', 'Page 3', 'Page4' ];
		return (
			<div>
				<ul className="pages">
					{pages.map(function(page) {
						return (
							<li
								key={page}
								style={page === this.state.selectedPage ? { color: '#d0021b' } : null}
								onClick={this.updatePage}
							>
								{page}
							</li>
						);
					}, this)}
				</ul>
			</div>
		);
	}
}

export default Header;
