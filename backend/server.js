const http = require('http');
const port = 3001;
const hostname = 'localhost';
const url = require('url');
const notes = require('./notes');
const querystring = require('querystring');

const server = http.createServer((request, response) => {
	const urlObject = url.parse(request.url);
	const data = querystring.parse(urlObject.query);
	let payload = {};

	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	response.setHeader('Content-Type', 'application/json');

	switch (urlObject.pathname) {
		case '/api/notes/list':
			payload = {
				endpoint: 'list',
				description: 'List all notes',
				list: notes.fetchNotes()
			};

			break;
		case '/api/notes/add':
			payload = {
				endpoint: 'add',
				description: 'Add a note',
				list: notes.addNote()
			};

			if (data.title) {
				let note = notes.addNote(data.title, data.body);
				if (note) {
					payload['note'] = note;
				} else {
					payload['error'] = 'Note title already taken';
				}
			}
			break;
		case '/api/notes/delete':
			payload = {
				endpoint: 'delete',
				description: 'Delete a note',
				list: notes.removeNote()
			};
			break;
		default:
			payload = {
				api: 'Notes 0.0.1',
				endpoints: 'add, list, delete'
			};
	}

	response.end(JSON.stringify(payload));
	//console.log(payload);
});
server.listen(port, hostname, () => {
	console.log(`starting app at ${hostname}:${port}`);
});
