const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const userRoutes = require('../routes/userRoutes');
const connectDb = require('../database/mongoose');
require('dotenv').config();

connectDb();

const app = express();
const port = process.env.PORT || 2300;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, authorization');

	next();
});

app.use('/api', userRoutes);

app.listen(port, () => {
	console.log(`Server is running at port ${port}`);
});
