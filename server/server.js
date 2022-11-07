/**
 * File: server.js
 * Description: This file contains the server configuration.
 * Date: 06/11/2022
 * Author: Michel Andrade
 */

const express = require('express');
var cors = require('cors');

const app = express();
app.use(
	cors({ origin: ['http://localhost:3000', 'http://127.0.0.1:3000'] })
);

const port = process.env.PORT || 4000;

app.get('/test', (req, res) => {
	res.json({
		success: true,
		message: 'test',
	});
});

app.listen(port, () => {
	console.log('App is listening on port ' + port);
});
