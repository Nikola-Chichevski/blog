const express = require('express');
const cors = require('cors');
const db = require('./common/database/db.config');
const router = require('./common/const/router.const');


const app = express();

app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.listen(PORT, HOST, async () => {
    try{
        await db.sync();
        await db.authenticate();
        console.log('Connected to the database!')
    } catch (error) {
        console.log('Unable to connect to the database!', error)
    }

    console.log('Server running on http://localhost:3000')
})