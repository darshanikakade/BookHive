const express = require('express')
require('dotenv').config()
const sequelize = require('./config/database')
const app = express()
const port = process.env.PORT
const User = require('./db/models')


app.get("/", async (req, res) => {
    const jane = await User.create({ firstName: 'Jane', lastName: 'Doe' });
    console.log("Jane's auto-generated ID:", jane.id);
    res.send("Hello World..!")
})


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    app.listen(port, async () => {
        console.log('Server is running on port ', port);
    })
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});
