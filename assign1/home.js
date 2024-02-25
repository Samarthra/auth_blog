require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser());
const databaseURL =process.env.MONGODB_URL;

console.log(databaseURL);
mongoose.connect(databaseURL, {
    useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const authroutes = require('./routes/auth');
const blogroutes = require('./routes/blogs');

app.use("/auth",authroutes)
app.use("/blogs",blogroutes)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

