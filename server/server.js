/**
 * File: server.js
 * Description: This file contains the server configuration.
 * Date: 06/11/2022
 * Author: Michel Andrade
 */

const express = require('express');
const cors = require('cors');
const upload = require('express-fileupload');
const iluminated_room = require('./controller/illuminated_room');
const app = express();
app.use(
	cors({ origin: ['http://localhost:3000', 'http://127.0.0.1:3000'] })
);

const port = process.env.PORT || 4000;
app.use(upload());

/* This is the route that will receive the file from the client. */
app.post('/upload', (req, res) => {
	if (req.files) {
		const room = [];
		let file = req.files.file;
		//valiodate file type txt
		if (file.mimetype === 'text/plain') {
			let content = file.data.toString('utf8');
			let result = iluminated_room.main({content});
			res.status(result.status_code).json(result);
		} else {
			res.status(500).json({
				success: false,
				message: 'File type not supported',
			});
		}
		
	}
});

app.listen(port, () => {
	console.log('App is listening on port ' + port);
});
