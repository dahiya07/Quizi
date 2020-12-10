const db = require("../models");
const User = db.users;
const Quiz1=db.quiz1;
const Quiz2=db.quiz2;
const Op = db.Sequelize.Op;

exports.create=(req,res)=>{
    //Validate request
    if (!req.body.Name) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }

    var user={
        Name:req.body.Name,
        Password:req.body.Password,
        Email:req.body.Email,
        Quiz_1:req.body.Quiz_1,
        Quiz_2:req.body.Quiz_2
    };
    console.log(user);
    User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });
};

exports.findOne = (req, res) => {
    const name = req.query.name;
    var condition = name ? { Name: { [Op.like]: `%${name}%` } } : null;

    User.findAll({where:condition})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving user" 
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "user was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating user with id=" + id
        });
      });
};

exports.findAll=(req,res)=>{
    Quiz1.findAll()
    .then(data=>(res.send(data)))
    .catch(err => {
        res.status(500).send({message:err.message||"Something wrong"});
    });
}

exports.findAll2=(req,res)=>{
  Quiz2.findAll()
  .then(data=>(res.send(data)))
  .catch(err => {
      res.status(500).send({message:err.message||"Something wrong"});
  });
}