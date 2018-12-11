const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const bcrypt = require('bcrypt');
const { passport, sign } = require('./auth');

const { Course, Student, Instructor, User } = require('./models');
const PORT = 3001;
const app = express();

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
// the end_point should be customized not just users
app.post('/users/students', async (req, res) => {
  try {
    const userNameCheck= req.body.username;
    const usercheck = await User.find({where: { username: userNameCheck }});

    if(!usercheck){
        const user = await User.create(req.body);
        await Student.create({
          fullname: req.body.fullname,
          email: null,
          phone: null,
          user_id: user.dataValues.id
        });

        const { id, username } = user.dataValues;
        const token = sign({
          id,
          username,
        });
        res.json({user, token});
    }else{
        res.json("User taken");
        console.log('user taken');
      }

  } catch(e) {
    console.log(e);
    res.status(500).json({msg: e.message});
  }
});

app.post('/users/instructors', async (req, res) => {
  try {

    const userNameCheck= req.body.username;
    const usercheck = await User.find({where: { username: userNameCheck }});

    if(!usercheck){
        const user = await User.create(req.body);
        await Instructor.create({
          fullname: req.body.fullname,
          email: null,
          phone: null,
          title: null,
          user_id: user.dataValues.id
        });

        const { id, username } = user.dataValues;
        const token = sign({
          id,
          username,
        });
        res.json({user, token});
    }else{
        res.json("User taken");
        console.log('user taken');

    }
  } catch(e) {
    console.log(e);
    res.status(500).json({msg: e.message});
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.find({where: { username }});
    const passwordValid = await bcrypt.compare(password, user.password);
    const { id, auth_level } = user;
    if (passwordValid) {
      const token = sign({
        id,
        username,
        auth_level,
      });
      res.json({ token
       });
    } else {
      throw Error('Invalid credentials!');
    }
  } catch(e) {
    res.status(401).json({msg: e.message});
  }
});

app.get('/currentuser', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({msg: 'logged in', user: req.user });
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
