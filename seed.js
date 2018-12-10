const { Course, Student, Instructor, User } = require('./models');
const moment = require('moment');

async function seed() {
  try {
    await Promise.all([
      Course.destroy({ where: {}}),
      Student.destroy({ where: {}}),
      Instructor.destroy({ where: {}})
    ]);

    const studentPromise = await Student.bulkCreate([
      {
        name: 'Test Student',
        email: 'teststudent@test.com',
        phone: '(615)210-6655'
      }
    ]);

    const instructorPromise = await Instructor.bulkCreate([
      {
        name: 'Not A Teacher',
        email: 'hellothere',
        phone: '(775)501-6677',
        title: 'Lead'
      }
    ]);

    const coursePromise = await Course.bulkCreate([
      {
        title: 'Test 101',
        description:"sjkdhfksjdfhskdjhfksdjhf",
        details:"sjdhkjshdkfjhsdkjfhsdkjfhskjdhfkjsdhfkjsd",
        start_date: moment('2016-01-01'),
        end_date: moment('2016-01-01').add(2, 'week'),
        price: 500,
        capacity:5
      }
    ]);



  }
  catch(e) {
    console.error(e);
  }
  process.exit();
}

seed();
