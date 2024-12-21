import express from "express";
import path from "path";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
import cors from 'cors';
require('dotenv').config();
import { updateNotificationOfCampaign } from './services/campaignService';

let db = require('./models');

let app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE',
}));
//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

viewEngine(app);
initWebRoutes(app);

db.sequelize.authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

updateNotificationOfCampaign();


let port = process.env.PORT || 6969;
//Port === undefined => port = 6969

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is runing on the port : " + port)
})