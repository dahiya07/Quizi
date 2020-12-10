module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      Name: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.BOOLEAN
      },
      Quiz_1: {
        type: Sequelize.FLOAT
      },
      Quiz_2: {
        type: Sequelize.FLOAT
      }      
    });
  
    return User;
  };