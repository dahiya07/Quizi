module.exports = (sequelize, Sequelize) => {
    const Quiz2 = sequelize.define("Quiz_2", {
      Question: {
        type: Sequelize.STRING
      },
      Ans_1: {
        type: Sequelize.STRING
      },
      Ans_2: {
        type: Sequelize.STRING
      },
      Ans_3: {
        type: Sequelize.STRING
      },
      Ans_4: {
        type: Sequelize.STRING
      },
      Correct:{
          type:Sequelize.INTEGER
      }     
    });
    return Quiz2;
};