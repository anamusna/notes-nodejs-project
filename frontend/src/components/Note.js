import React, { Component } from 'react';

class Note extends Component {
	render() {
		const { data } = this.props;
		//	console.log(data.title);
		if (!data) {
			return '';
		}

		return (
			<div style={{ textAlign: "left" }}>
				<hr />
				<p>Title: {data.title}</p>
				<p>Body: {data.body}</p>

				<hr />
			</div>
		);
	}
}

export default Note;
