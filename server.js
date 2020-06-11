const express = require ('express');

const app = express();

app.get('/', (req, res)=> {
	const user {
		name: 'Sally',
		hobby:'soccer'
	}
	res.send(user);
});

app.get('/',(req,res) => {
	res.send("AHAHAH!");
});

app.listen(3000);