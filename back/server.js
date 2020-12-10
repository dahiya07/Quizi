const express = require('express');
const bodyParser = require('body-parser');
//const cors=require("cors");

const app = express();
// var corsOption={
//     origin:"http://localhost:8000"
// }

// app.use(cors(corsOption));

const db = require("../back/models");
db.sequelize.sync()

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require("../back/routes/user.routes")(app);
app.listen(port, () => console.log(`Listening on port ${port}`));