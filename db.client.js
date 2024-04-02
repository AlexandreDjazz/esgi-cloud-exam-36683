const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgres://fakeurl', // TODO
  '', // Database name
  '', // User
  '', // Password
  {
    host: 'dpg-co5te1cf7o1s73a79g0g-a', // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;