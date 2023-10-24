const express = require('express');
const app = express();
const path= reqquire('path');

app.get('/searchpagesearch', (req, res) => {
	res.sendFile(__dirname + '/search.html');
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
