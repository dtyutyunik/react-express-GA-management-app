const { Course, Student, Instructor, User } = require('./models');
const moment = require('moment');
const p = (dao) => console.log(JSON.stringify(dao, null, 2));

async function seed() {
  try {
    await Promise.all([
      Course.destroy({ where: {}}),
      Student.destroy({ where: {}}),
      Instructor.destroy({ where: {}}),
      User.destroy({ where: {}})
    ]);



    const courses = await Course.bulkCreate([
      {
        title: 'Web Development Immersive',
        description: 'Master the skills to become a job-ready full-stack developer',
        details: 'Position yourself as a job-ready full-stack software developer in our full-time Immersive course. Our proven, expert-designed curriculum is continually updated to keep pace with shifting employer demands. Leverage exclusive opportunities, launch collaborations, and form key connections as part of our global network of more than 40,000 part- and full-time alumni',
        start_date: moment('2016-01-01'),
        end_date: moment('2016-01-01').add(2, 'week'),
        price: 14950,
        capacity: 30,
      },
      {
        title: 'User Experience Design Immersive',
        description: '10-Week full-time career accelerator',
        details: 'The User Experience Design Immersive program is crafted by top practitioners in the field, with a specific focus on helping you transition into a UX design career.',
        start_date: moment('2016-01-01'),
        end_date: moment('2016-01-01').add(2, 'week'),
        price: 14950,
        capacity: 30
      },
      {

        title: 'Data Science Immersive',
        description: '12-Week full-time career accelerator',
        details: 'Learn the tools and techniques you need to make better decisions through data, and land a job in one of the most sought after fields in tech.',
        start_date: moment('2016-01-01'),
        end_date: moment('2016-01-01').add(2, 'week'),
        price: 15950,
        capacity: 30
      },
      {
        title: 'Digital Marketing Immersive',
        description: 'Be in demand. Master the skills to launch a career driving growth and customer acquisition',
        details: 'Join the high-growth world of digital marketing in our full-time Immersive course. Our expert-designed curriculum is continually updated to keep pace with shifting employer demands. Gain competitive skills, personalized career coaching, and access to resources to continually foster your professional potential.',
        start_date: moment('2016-01-01'),
        end_date: moment('2016-01-01').add(2, 'week'),
        price: 15950,
        capacity: 30

      }
    ]);

  }
  catch(e) {
    console.error(e);
  }
  process.exit();
}


async function createStudentUser(){

try{
  const dummyStudent1= await User.create({
    fullname: 'Shirely Stu',
    username: 'Shirley',
    password: 'Shirley',
    auth_level: 'student',
    student : {
      fullname: 'Shirely Stu',
      email: 'studentemail@gmail.com',
      phone: '(615)210-6655'
    }},
    {
      include: [{
        model: Student
      }]
    });

    const dummyStudent2= await User.create({
      fullname: 'Stu Davis',
      username: 'Stu',
      password: 'Stu',
      auth_level: 'student',
      student :   {
          fullname: 'Stu Davis',
          email: 'student@student.com',
          phone: '(775)310-0905'
        }},
      {
        include: [{
          model: Student
        }]
      });

      const dummyStudent3= await User.create({
        fullname: 'James Stu Kurt',
        username: 'James',
        password: 'James',
        auth_level: 'student',
        student :   {
            fullname: 'James Stu Kurt',
            email: 'stustu@gmail.com',
            phone: '(935)091-6675'
          }},
        {
          include: [{
            model: Student
          }]
        });

        const dummyStudent4= await User.create({
          fullname: 'Steven Studens',
          username: 'Steven',
          password: 'Steven',
          auth_level: 'student',
          student :       {
                fullname: 'Steven Studens',
                email: 'studens.stu@gmail.com',
                phone: '(995)330-2105'
              }},
          {
            include: [{
              model: Student
            }]
          });
}
catch(e){
  console.log(e);
}

process.exit();

}

async function createInstructorUser(){


try{

  const dummyInstructor1= await User.create({
    fullname: 'Maggie Reams',
    username: 'Maggie',
    password: 'Maggie',
    auth_level: 'instructor',
    instructor :     {
          fullname: 'Maggie Reams',
          email: 'maggie@mags.com',
          phone: '(775)501-6677',
          title: 'Lead Instructor'
        }},
    {
      include: [{
        model: Instructor
      }]
    });

    const dummyInstructor2= await User.create({
      fullname: 'Bob Hamm',
      username: 'Bob',
      password: 'Bob',
      auth_level: 'instructor',
      instructor :     {
          fullname: 'Bob Hamm',
          email: 'bobbyhammy@gmail.com',
          phone: '(775)601-6337',
          title: 'Lead Instructor'
        }},
      {
        include: [{
          model: Instructor
        }]
      });

      const dummyInstructor3= await User.create({
        fullname: 'Dylan Grant',
        username: 'Dylan',
        password: 'Dylan',
        auth_level: 'instructor',
        instructor :     {
            fullname: 'Dylan Grant',
            email: 'd.grant@comcast.net',
            phone: '(775)950-3732',
            title: 'Teaching Assistant'
          }},
        {
          include: [{
            model: Instructor
          }]
        });

        const dummyInstructor4= await User.create({
          fullname: 'John Michaels',
          username: 'John',
          password: 'John',
          auth_level: 'instructor',
          instructor :       {
             fullname: 'John Michaels',
             email: 'michael@gmail.com',
             phone: '(890)444-6677',
             title: 'Teaching Assistant'
           }},
          {
            include: [{
              model: Instructor
            }]
          });

}
catch(e){
  console.log(e);
}

  process.exit();

}


async function studentCourse(){
try{
  const students= await Student.findAll();

  const courses= await Course.findAll();

  await Promise.all(courses.map(async course=>{
    return await course.addStudent(students[course.id - 1]);
  }))

}
  catch(e){
    console.log(e);
  }
  process.exit();

}

async function instructorCourse(){
  try{
    const instructors= await Instructor.findAll();
    const courses= await Course.findAll();

  await Promise.all(instructors.map(async instructor=>{
    return await instructor.setCourse(courses[instructor.id-1])
  }))

  }catch(e){
    console.log(e);
  }
  process.exit();
}



async function instructorUser(){
  try{
    const instructors= await Instructor.findAll();

    const instrcutorC=await User.bulkCreate(
      instructors.map((e) => {
        return {fullname: e.dataValues.fullname,
        username: e.dataValues.fullname,
        password: 'la',
        auth_level: 'instructor'}
      })
      );

    const userInfo= await User.findAll({where: {'auth_level': 'instructor'}});

    await Promise.all(userInfo.map((e,index)=>{
      return e.addInstructor(instructors[index]);
    }));

  }catch(e){
    console.log(e);
  }
  process.exit();
}

async function studentUser(){
  try{
    const students= await Student.findAll();

    const studentSeed= await User.bulkCreate(
      students.map((e)=>{
        return {fullname: e.dataValues.fullname,
          username: e.dataValues.fullname,
          password: 'no',
          auth_level: 'student'}
      })
    );

    const userInfo= await User.findAll({where: {'auth_level': 'student'}});

  await Promise.all(userInfo.map((e,index)=>{
    return e.addStudent(students[index]);
  }));

  }catch(e){
    console.log(e);
  }
  process.exit();
}


// for mainRunner run each line one at a time
function mainRunner(){
  // seed();
  // createStudentUser();
  // createInstructorUser();

  // studentCourse();
//
  // instructorCourse();




}

mainRunner();
