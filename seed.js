const { Course, Student, Instructor, User } = require('./models');
const moment = require('moment');

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
    //pulls course info so we can attach it later
    const cs = await Course.findAll();

    const students = await Student.bulkCreate([
      {
        fullname: 'Shirely Stu',
        email: 'studentemail@gmail.com',
        phone: '(615)210-6655',
        course_id: cs[1].id

      },
      {
        fullname: 'Stu Davis',
        email: 'student@student.com',
        phone: '(775)310-0905',
        course_id: cs[2].id
      },
      {
        fullname: 'James Stu Kurt',
        email: 'stustu@gmail.com',
        phone: '(935)091-6675',
        course_id: cs[2].id
      },
      {
        fullname: 'Steven Studens',
        email: 'studens.stu@gmail.com',
        phone: '(995)330-2105',
        course_id: cs[3].id
      }
    ]);


    const instructors = await Instructor.bulkCreate([
      {
        fullname: 'Maggie Reams',
        email: 'maggie@mags.com',
        phone: '(775)501-6677',
        title: 'Lead Instructor',
        course_id: cs[0].id
      },
      {
        fullname: 'Bob Hamm',
        email: 'bobbyhammy@gmail.com',
        phone: '(775)601-6337',
        title: 'Lead Instructor',
        course_id: cs[1].id
      },
      {
        fullname: 'Dylan Grant',
        email: 'd.grant@comcast.net',
        phone: '(775)950-3732',
        title: 'Teaching Assistant',
        course_id: cs[2].id
      },
      {
        fullname: 'John Michaels',
        email: 'michael@gmail.com',
        phone: '(890)444-6677',
        title: 'Teaching Assistant',
        course_id: cs[3].id
      }
    ]);




  }
  catch(e) {
    console.error(e);
  }
  process.exit();
}

async function InstructorLinkCourse(locations){
try{
  let pull=await Instructor.findByPk(1);

  console.log(pull.dataValues);
  // let coursepull= await Course.findByPk(1);
  // console.log(coursepull.dataValues);

  // Instructor.addCourse(coursepull);
}
  catch(e){
    console.log(e);
  }
  process.exit();

}

seed();
// InstructorLinkCourse(1);
