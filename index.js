const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/router')
dotenv.config();
const  {databaseConnection} = require('./db/db');
const port = process.env.PORT;
const app = express();

app.use(express.json());

app.use('/api/v1', router);

databaseConnection();

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})