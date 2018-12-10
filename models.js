const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'bootcamp_startup_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true,
  }
});

const Class = sequelize.define('class', {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  details: Sequelize.TEXT,
  start_date: Sequelize.DATEONLY,
  end_date: Sequelize.DATEONLY,
  price: Sequelize.INTEGER,
  capacity: Sequelize.INTEGER
});

const Student = sequelize.define('student', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING
});

const Instructor = sequelize.define('instructor', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING,
  title: Sequelize.STRING
});

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  auth_level: Sequelize.STRING
});


Class.hasMany(Student);
Instructor.belongsTo(Class);
Instructor.hasMany(Student);



module.exports = {
  sequelize,
  Class,
  Student,
  Instructor,
  User
};
