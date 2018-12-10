const { sequelize } = require('./models');

const run = async () => {
  await sequelize.sync({force: true});
  process.exit();
};

run();
