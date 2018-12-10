const { Class, Student, Instructor, User } = require('./models');
const moment = require('moment');

async function seed() {
  try {
    await Promise.all([
      Class.destroy({ where: {}}),
      Student.destroy({ where: {}}),
      Instructor.destroy({ where: {}})
    ]);

    const studentPromise = Student.bulkCreate([
      {
        name: 'Test Student',
        email: 'teststudent@test.com',
        phone: '(615)210-6655'
      }
    ]);

    const classPromise = Class.bulkCreate([
      {
        title: 'Test 101'
        description:
        details:
        start_date:
        end_date:
        price:
        capacity:
      }
    ])

    const instructorPromise = Instructor.bulkCreate([
      {
        name: 'Not A Teacher',
        email: 'hellothere',
        phone: '(775)501-6677',
        title: 'Lead'
      }
    ]);

  }
  catch(e) {
    console.error(e);
  }
  process.exit();
}

seed();
