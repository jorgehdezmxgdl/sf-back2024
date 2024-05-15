// sequelize-auto -h 127.0.0.1 -x -d safav3 -u root -o modelos -cm p --sg 
const { Sequelize } = require('sequelize');

const sequelize  = new Sequelize('safav3', 'root', '12345678', {
<<<<<<< Updated upstream
  host: '127.0.0.1',
=======
  host: 'localhost',
>>>>>>> Stashed changes
  dialect: 'mysql',  
  define: {
    timestamps: true,
  },
  pool: {
    max: 50,
    min: 5,
    idle: 10000
  }
});

module.exports = {sequelize}
