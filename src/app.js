const express = require('express')
const { Sequelize } = require('sequelize');
require('dotenv').config()

const app = express()
const port = process.env.PORT

const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST


app.get("/", (req, res) => {
    res.send("Hello World..!")
})


const sequelize = new Sequelize(
    dbName,
    dbUser,
    dbPassword,
    {
        host: dbHost,
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    app.listen(port, async () => {
        console.log('Server is running on port ', port);
    })
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});
