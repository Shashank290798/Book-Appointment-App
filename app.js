const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const cors =require('cors');

const bookRoutes = require('./routes/bookopen');

const sequelize = require('./util/database');

const bookdata = require('./models/bookdata')

app.use(bodyParser.json())

app.use(cors())
app.use('/bookopen',bookRoutes);

sequelize
.sync()
//.sync({force:true})
.then(results => {
    app.listen(3000);
})
.catch(err => {
    console.log(err);
})