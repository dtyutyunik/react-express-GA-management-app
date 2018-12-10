const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
//const bcrypt = require('bcrypt');


const { Class, Student, Instructor, User } = require('./models');
const PORT = 3001;
const app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {

  res.json({msg: 'Welcome to BS  API!'});
});




app.listen(PORT, () => {
  console.log('up and ATOM!!')
});
