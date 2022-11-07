/**
 * File: server.js
 * Description: This file contains the server configuration.
 * Date: 06/11/2022
 * Author: Michel Andrade
 */

const express = require('express');
const cors = require('cors');
const upload = require('express-fileupload');

const app = express();
app.use(
	cors({ origin: ['http://localhost:3000', 'http://127.0.0.1:3000'] })
);

const port = process.env.PORT || 4000;
app.use(upload());
app.get('/test', (req, res) => {
	res.json({
		success: true,
		message: 'test',
	});
});

//recibe file and read it
app.post('/upload', (req, res) => {
	if (req.files) {
		const room = [];
		let file = req.files.file;
		//valiodate file type txt
		if (file.mimetype === 'text/plain') {
			let content = file.data.toString('utf8');
			let lines = content.split('\r\n');
			let room_width = 0;
			let room_height = lines.length;
			let validation = true;
			lines.forEach((line) => {
				if(line.length > 0)	{
					if (room_width !== 0 && line.length !== room_width) {
						validation = false;
					}
					room_width = line.length;
					let data = line.split('');
					room.push(data);
				}
			});
			if (validation) {
				console.log(room, room_width, room_height, validation);
				res.status(200).json({
					success: true,
					message: 'upload complete',
				});
			}else{
				res.status(500).json({
					success: false,
					message: 'Error: The room is not valid',
				});
			}
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
