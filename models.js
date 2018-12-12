const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = new Sequelize({
  database: 'bootcamp_startup_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true,
  }
});

const Course = sequelize.define('course', {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  details: Sequelize.TEXT,
  start_date: Sequelize.DATEONLY,
  end_date: Sequelize.DATEONLY,
  price: Sequelize.INTEGER,
  capacity: Sequelize.INTEGER
});

const Student = sequelize.define('student', {
  fullname: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING
});

const Instructor = sequelize.define('instructor', {
  fullname: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING,
  title: Sequelize.STRING
});

const User = sequelize.define('user', {
  fullname: Sequelize.STRING,
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  auth_level: Sequelize.STRING
});

User.beforeCreate((user, options) => {
  const password_digest = bcrypt.hashSync(user.password, 10);
  user.password = password_digest;
});


Student.belongsTo(Course);
Course.hasMany(Student);

Course.belongsTo(Instructor);
Instructor.hasOne(Course);

User.hasOne(Instructor);
User.hasOne(Student);
Instructor.belongsTo(User);
Student.belongsTo(User);


module.exports = {
  sequelize,
  Course,
  Student,
  Instructor,
  User
};
