import express from 'express';

import dotenv from 'dotenv'
dotenv.config();

import  Connection  from './database/db.js';

import Router from './routes/route.js';

const app = express();

app.use('/', Router);

const PORT = 8000;

app.listen(PORT, () => console.log("Server is running on PORT number 8000"));


const username_db = process.env.DB_username;
const pass_db = process.env.DB_password;
Connection(username_db,pass_db);