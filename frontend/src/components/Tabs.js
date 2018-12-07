import React, { Component } from 'react';

class Tabs extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			body: ''
		};


	}

	titleChange = (e) => {
		this.setState({ title: e.target.value });

	}

	bodyChange = (e) => {
		this.setState({ body: e.target.value });

	}
	onTabChange = (selectedType) => {
		this.props.onTabSelected(selectedType);
	};

	render() {
		return (

			<div className="center container"><br />
				<h1>React frontend Notes</h1>
				<button
					className={`btn btn-outline-primary ${this.props.selectedType === 'listNote' ? 'selected' : ''}`}
					onClick={() => this.onTabChange('all_list')}>
					LIST OF NOTES
				</button>
				<br /><br />
				<div className="form-inline justify-content-center">
					<input type="text" className="form-control mb-2 mr-sm-4 mb-sm-0" value={this.state.value} onChange={this.titleChange}></input>
					<input type="text" className="form-control mb-2 mr-sm-4 mb-sm-0" value={this.state.value} onChange={this.bodyChange}></input>
					<button
						className={`btn btn-secondary ${this.props.selectedType === 'addNote' ? 'selected' : ''}`}
						onClick={() => this.onTabChange('adding')} >
						Add a note
				</button>

				</div>
				<br />
				<button
					className={`btn btn-outline-secondary ${this.props.selectedType === 'deleteNote' ? 'selected' : ''}`}
					onClick={() => this.onTabChange('deletingNote')}>
					Delete
				</button>
			</div>
		);
	}
}

export default Tabs;
