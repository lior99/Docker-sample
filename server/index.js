const express = require('express');
const app = express();
const data = require('./mockData.json');
const bodyParser = require('body-parser');
require('dotenv').load();

const PORT = process.env.PORT || 7777;

app.use(bodyParser.json());

app.get('/api/mock', (req, res) => {
	res.status(200).json(data);
});

app.post('/api/mock/user', (req, res) => {
	const user = req.body.user;
	const newUser = {
		id: data.length + 1,
		...user
	}

	data.push(newUser);

	res
		.status(200)
		.json(data);

})

app.listen(PORT, () => {
	console.log(`listening on port: ${PORT}`);
});
