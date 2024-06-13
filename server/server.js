const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
const userRoute = require('./routes/user');

const app = express();
const port = 3000;
dotenv.config({ path: '.env' });

app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URI);

app.get('/', (req, res) => {
	res.send('text from server');
});

// app.post('/api/auth/signup', (req, res) => {
// 	console.log(req.body);
// })

app.use('/', userRoute);

app.listen(port, () => { 
	console.log(`Listening on ${port}`) 
});
