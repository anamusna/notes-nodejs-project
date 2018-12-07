import React, { Component } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import List from './components/List';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedType: '',
			listNote: [],
			addNote: [],
			deleteNote: [],
			title: '',
			body: ''

		};
	}




	onTabSelected = (selectedType) => {
		switch (selectedType) {
			case 'adding':
				axios.get(`http://localhost:3001/api/notes/add?title=${this.state.title}&body=${this.state.body}`).then((response) => {
					this.setState({
						addNote: response.data.list,
						selectedType
					});
					console.log(selectedType, response.data.list);
				});
				break;
			default:
			case 'all_list':
				axios.get(`http://localhost:3001/api/notes/list?title=${this.state.title}&body=${this.state.body}`).then((response) => {
					this.setState({
						listNote: response.data.list,
						selectedType
					});
					console.log(selectedType, response.data.list);
				});
				break;

			case 'deletingNote':
				axios.get(`http://localhost:3001/api/notes/delete?title=${this.state.title}&body=${this.state.body}`)
					.then((response) => {
						this.setState({
							deleteNote: response.data.list,
							selectedType
						});
						console.log(selectedType, response.data.list);
					})
					.catch((e) => {
						console.log('xxxxxxx', e);
					});
		}
	};

	componentDidMount() {
		this.onTabSelected(this.state.selectedType);
	}
	render() {
		const { selectedType, listNote, addNote, deleteNote } = this.state;
		return (
			<div className="App">

				<Tabs selectedType={selectedType} onTabSelected={this.onTabSelected} />
				<div className="container">
					{selectedType === 'adding' && addNote && <List data={addNote} />}
					{selectedType === 'all_list' && listNote && <List data={listNote} />}
					{selectedType === 'deletingNote' && deleteNote && <List data={deleteNote} />}
				</div>

			</div>
		);
	}
}

export default App;
