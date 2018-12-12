const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const bcrypt = require('bcrypt');
const { passport, sign } = require('./auth');
const Sequelize = require('sequelize');


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

    let stock;
    if (passwordValid) {

      try{
        if(user['auth_level'] === 'student'){
            stock = await user.getStudent();
    }

    else if(user['auth_level'] === 'instructor'){
        stock = await user.getInstructor();
      }

    }catch(e){
      console.log(e);
    }


      const token = sign({
        id,
        username,
        auth_level,
      });

      res.json({ token,
                 stock,
                 auth_level
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

app.get('/students',  async(req,res) => {
  try{
    const studentList = await Student.findAll({});
    res.json(studentList);

  }
  catch(e){
    console.log(e);
  }
});

//reflects all info about instructors
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

//get singles
app.get('/students/:id',  async(req,res) => {
  try{
    const studentone = await Student.findByPk(req.params.id);
    res.json(studentone);
  }
  catch(e){
    console.log(e);
  }
});

//one instrcuctor info
app.get('/instructors/:id',  async(req,res) => {
  try{
    const instone = await Instructor.findByPk(req.params.id);
    res.json(instone);
  }
  catch(e){
    console.log(e);
  }
});

app.get('/courses/:id',  async(req,res) => {
  try{
    const coursone = await Course.findByPk(req.params.id);
    res.json(coursone);
  }
  catch(e){
    console.log(e);
  }
});

// post routes
// Will be used for admin purposes if implemented post mvp

// app.post('/instructors', async (req,res) => {
// try{
// const instructorpost = await Instructor.create(req.body);
//   res.json(instructorpost);
// }catch (e){
//   console.log(e);
//   res.status(500).json({msg:e.message});
//   }
// });



//not needed
// app.post('/students', async (req,res) => {
// try{
//
// const studentpost = await Student.create(req.body);
//   res.json(studentsput);
// }catch (e){
//   console.log(e);
//   res.status(500).json({msg:e.message});
//   }
// });
///////////////



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

    const students = await Student.findOne({
      where:{
        id:id
      },
       include: [
         {
           model: User,
           required: true, // only include users where there is an associated student
         }
       ]
     });


  User.destroy({where: {id: students.user.id}});
  Student.destroy({where: {id: id}});

  res.json(students);



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


// will be used for admin purposes post mvp
app.delete('/instructors/:id', async (req,res) => {


  try{
    const id = req.params.id;

    const instructor = await Instructor.findOne({
      where:{
        id:id
      },
       include: [
         {
           model: User,
           required: true, // only include users where there is an associated student
         }
       ]
     });


  User.destroy({where: {id: instructor.user.id}});
  Instructor.destroy({where: {id: id}});

  res.json(instructor);

  }catch (e){
      console.log(e);
      res.status(500).json({msg:e.message});
  }
});



//put routes
app.put('/students/:id', async(req,res)=>{
  try{

    const stuinfo= await Student.findByPk(req.params.id);

    const userFullNameUpdate= await User.findOne({where:{fullname: stuinfo.fullname}});
    stuinfo.fullname=req.body.fullname;
    stuinfo.phone?stuinfo.phone=req.body.phone:stuinfo.phone=stuinfo.phone;
    stuinfo.email?stuinfo.email=req.body.email:stuinfo.email=stuinfo.email;
    userFullNameUpdate.fullname=stuinfo.fullname;
    userFullNameUpdate.save();
    stuinfo.save();
    res.json(stuinfo);

  }catch(e){
    res.status(500).json({message:e.message});
  }

});

app.put('/instructors/:id', async(req,res)=>{
  try{

    const instinfo= await Instructor.findByPk(req.params.id);
    const userFullNameUpdate= await User.findOne({where:{fullname: instinfo.fullname}});
    instinfo.fullname=req.body.fullname;
    instinfo.phone?instinfo.phone=req.body.phone:instinfo.phone=instinfo.phone;
    instinfo.email?instinfo.email=req.body.email:instinfo.email=instinfo.email;
    userFullNameUpdate.fullname=instinfo.fullname;
    userFullNameUpdate.save();
    instinfo.save();

    res.json(instinfo);

  }catch(e){
    res.status(500).json({message:e.message});
  }

});

//gets courses that instructor teaches
app.get('/instructors/:id/courses',async(req,res)=>{
    try{
        const id = req.params.id;
      const courseTeach= await Instructor.findOne({
        where:{id: id},
        include:[{
          model:Course,
          required:true,
        }]
      });
      res.json(courseTeach.course);
    }catch(e){
      res.status(500).json({e:e.message});
    }
    process.exit();
});

//gets students that instructor teaches
app.get('/instructors/:id/students',async(req,res)=>{
  try{
    const id = req.params.id;
    const getinststu= await Instructor.findOne({
      where:{id:id},
      include:[{
        model:Course,
        required:true,
      }]
    });
      // const studentTeach= await Course.findOne(
      //   {where:{instructor_id: req.params.id}},
      // include: getStudents);
      // res.json(studentTeach);
      const finalstu = await Course.findOne({
        where:{id:getinststu.course.id},
        include:[{
          model:Student,
          required:true,
        }]
      });



      res.json(finalstu.students);
  }catch(e){
    res.status(500).json({e:e.message});
  }
  process.exit();
});

app.put('/courses/:id', async(req,res)=>{
  try{

    const courinfo= await Course.findByPk(req.params.id);
    courinfo.details=req.body.details;
    courinfo.title=req.body.title;
    courinfo.description=req.body.description;
    courinfo.price=req.body.price;
    courinfo.capacity=req.body.capacity;
    courinfo.save();
    res.json(courinfo);

  }catch(e){
    res.status(500).json({message:e.message});
  }

});


app.listen(PORT, () => {
  console.log('up and ATOM!!')
});
