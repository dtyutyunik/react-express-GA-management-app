const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
//const bcrypt = require('bcrypt');


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
