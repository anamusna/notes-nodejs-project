import React, { Component } from 'react';
import Note from './Note';

class List extends Component {
	render() {
		return (
			<div>

				{this.props.data.map((data) => {
					return <Note data={data.title} key={data.title} />;
				})}
			</div>
		);
	}
}

export default List;
