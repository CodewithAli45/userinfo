const mongooose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const db_url = process.env.DB_URL;

async function databaseConnection(){
    await mongooose.connect(db_url).then(() => {
        console.log("connected to mongodb database.");
    }).catch((err) => {
        console.log("error in connecting wrong ", err);
    })
}

module.exports = {
    databaseConnection,
}