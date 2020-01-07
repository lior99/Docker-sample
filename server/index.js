const express = require('express');
const app = express();
const data = require('./mockData.json');
require('dotenv').load();

const PORT = process.env.PORT || 5000;

app.get('/api/mock', (req, res) => {
	res.status(200).json(data);
});

app.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`);
});
