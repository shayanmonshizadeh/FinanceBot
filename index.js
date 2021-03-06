const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config({ path: 'variables.env' });
const app = express();
const mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000
const pool = mysql.createPool ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

exports.pool = pool;

app.listen(port, () => console.log('Webhook server is listening, port ' + port));

const verificationController = require('./controllers/verification');
const messageWebhookController = require('./controllers/messageWebhook');
app.get('/', verificationController);
app.post('/', messageWebhookController);
















/* const mysql = require('mysql');
const mysqlx = require('@mysql/xdevapi');

const config = {
    password: 'supernova7',
    user: 'fb',
    host: 'localhost'
};

mysqlx
    .getSession(config)
    .then(session => {
        console.log(session.inspect());
        // { user: 'root', host: 'localhost', port: 33060 }
        return session.sql('use financebot')
            .execute()
            .then(() => {
                return session.sql('INSERT INTO expenses VALUES (NULL, "12-08-19 16:43:13", "food", 12.2, "LAK", 1)')
                    .execute(row => {
                        console.log("tf")
                        console.log(row)
                    });
    })
    
    })
    .catch(err => {
        console.log(err);
    });
    */