import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [],
            title: '',
            body: ''
        };
        /*   this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);  */

    }

    componentDidMount() {
        axios.get(`http://localhost:3001/api/notes/list`).then(res => {

            console.log(res);

            this.setState({ list: res.data.list })
        })
        console.log(this.state.list);

    };





    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
        console.log(this.state);

    }

    handleBodyChange = (e) => {
        this.setState({ body: e.target.value });
        console.log(this.state);

    }

    removeNotes = (e) => {
        axios.get(`http://localhost:3001/api/notes/delete?title=${this.state.title}&body=${this.state.body}`).then(res => {

            console.log(res.data.list);
            if (res.data.error) {
                alert(res.data.error)
            } else {
                this.setState({ list: res.data.list })
            }
        })

    }


    addNote = () => {
        axios.get(`http://localhost:3001/api/notes/add?title=${this.state.title}&body=${this.state.body}`).then(res => {

            console.log(res.data.list);
            if (res.data.error) {
                alert(res.data.error)
            } else {
                this.setState({ list: res.data.list })
            }
        })

    }


    render() {



        return (
            <div>
                star
        <ul>
                    {this.state.list.map(dataList => <li>title: {dataList.title} body:  {dataList.body}<button onClick={this.removeNotes}>remove</button> </li>)}
                </ul>
                <input type="text" value={this.state.value} onChange={this.handleTitleChange} /> <br />
                <hr />
                <textarea value={this.state.value} onChange={this.handleBodyChange} cols="30" rows="3"></textarea>
                <hr />

                <button onClick={this.addNote}>add</button>


            </div>
        );
    }
}

export default App;