const express=require('express');
require('dotenv').config();
const cors=require('cors');

const app=express();
const contactusRouter=require('../routes/contactus.jd');

app.use(cors());
app.use(express.json());

app.use(contactusRouter);

module.exports=app;
