const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const jwt = require('jsonwebtoken');
//const bcrypt = require('bcrypt');
const bookshelf = require('bookshelf');
const securePassword = require('bookshelf-secure-password');
const knex = require('knex');
const knexDb = knex({ client: 'pg', connection: 'postgres://localhost/bootcamp_startup_db'})
const db = bookshelf(knexDb);
db.plugin(securePassword);

const { Course, Student, Instructor, User } = require('./models');
const PORT = process.env.PORT || 3001;
const app = express();

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_OR_KEY
}
// whenever I get a webtoken, i will get a user by this way
const strategy = new JwtStrategy(opts, (payload, next) => {
  // TODO: fetch user from Database
  User.forge({ id: payload.id }).fetch().then(
    res => {
      next(null, res);
    });
});
passport.use(strategy);
app.use(passport.initialize());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());


app.get('/', async (req, res) => {
try{
  res.json({msg: 'Welcome to the BS API!'});
}catch(e){
  console.log(e);
}
});
app.post('/seedUser', async(req, res) => {
  if(!req.body.email || !req.body.password) {
    return res.state(401).send('no fields');
  }
  const user = new User({
    email: req.body.email,
    password: req.body.password
  });
  user.save().then(() => {res.send('OK');});
});

app.post('/getToken', (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(401).send('email or password not sent');
  }
  User.forge({ email: req.body.email }).fetch().then(result => {
    if(!result) {
      return res.status(400).send('user not found');
    }
    result.authenticate(req.body.password).then(user => {
      const payload = {id: user.id};
      const token = jwt.sign(payload, process.env.SECRET_OR_KEY);
      res.send(token);
    }).catch(err => {
      return res.status(401).send({ err: err });
    });
  });
});

app.get('/protected', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.send('under protection');
});

app.get('/students', async(req,res) => {
  try{
    const studentList = await Student.findAll({});
    res.json(studentList);

  }
  catch(e){
    console.log(e);
  }
});


app.get('/instructors', async(req,res) => {
  try{
    const instructorList = await Instructor.findAll({});
    res.json(instructorList);
  }
  catch(e){
    console.log(e);
  }
});


app.get('/courses', async(req,res) => {
  try{
    const courseList = await Course.findAll({});
    res.json(courseList);
  }
  catch(e){
    console.log(e);
  }
});
// post routes

app.post('/students', async (req,res) => {
try{
const studentpost = await Student.create(req.body);
  res.json(studentsput);
}catch (e){
  console.log(e);
  res.status(500).json({msg:e.message});
  }
});

app.post('/instructors', async (req,res) => {
try{
const instructorpost = await Instructor.create(req.body);
  res.json(instructorpost);
}catch (e){
  console.log(e);
  res.status(500).json({msg:e.message});
  }
});


app.post('/courses', async (req,res) => {
try{
const coursepost = await Course.create(req.body);
  res.json(coursepost);
}catch (e){
  console.log(e);
  res.status(500).json({msg:e.message});
  }
});


//delete routes

app.delete('/students/:id', async (req,res) => {
  try{
    const id = req.params.id;
    const destroystu = await Student.destroy({
      where:{
        id: id
      }
    })
    res.json(destroystu);
  }catch (e){
      console.log(e);
      res.status(500).json({msg:e.message});
  }
});

app.delete('/instructors/:id', async (req,res) => {
  try{
    const id = req.params.id;
    const destroyinst = await Instructor.destroy({
      where:{
        id: id
      }
    })
    res.json(destroyinst);
  }catch (e){
      console.log(e);
      res.status(500).json({msg:e.message});
  }
});

app.delete('/courses/:id', async (req,res) => {
  try{
    const id = req.params.id;
    const destroycour = await Course.destroy({
      where:{
        id: id
      }
    })
    res.json(destroycour);
  }catch (e){
      console.log(e);
      res.status(500).json({msg:e.message});
  }
});

//put routes
app.put('/students/:id', async(req,res)=>{
  try{

    let stuinfo= await Student.findByPk(req.params.id);

    stuinfo.email=req.body.email;
    stuinfo.save();
    res.json(stuinfo);

  }catch(e){
    res.status(500).json({message:e.message});
  }

});



app.listen(PORT, () => {
  console.log('up and ATOM!!')
});
