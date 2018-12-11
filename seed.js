const { Course, Student, Instructor, User } = require('./models');
const moment = require('moment');

async function seed() {
  try {
    await Promise.all([
      Course.destroy({ where: {}}),
      Student.destroy({ where: {}}),
      Instructor.destroy({ where: {}})
    ]);

    await Instructor.bulkCreate(
      [{
      fullname: 'dima',
      email: 'dima@gmail.com',
      phone: '23123123',
      title: 'Lead'
    },
    {fullname: 'yan',
      email: 'yan@gmail.com',
      phone: '1111111',
      title: 'Lead'
  },
  ]);

    const coursePromise = await Course.bulkCreate([
      {
        title: 'Test 101',
        description:"101 cours",
        details:"more info about course",
        start_date: moment('2016-01-01'),
        end_date: moment('2016-01-01').add(2, 'week'),
        price: 500,
        capacity:5
      },
      {
        title: 'Test 201',
        description:"202 cours",
        details:"202 info about course",
        start_date: moment('2018-01-01'),
        end_date: moment('2018-01-01').add(12, 'week'),
        price: 1500,
        capacity:15
      }
    ]);


  }
  catch(e) {
    console.error(e);
  }
  process.exit();
}

seed();
