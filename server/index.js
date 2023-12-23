const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user.modal');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mern');

app.post('/api/register', async (req, res) => {
    
    try{

        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({status : 'ok'})
    }catch(err){
        res.json({status : 'error' , error: 'Duplicate email'})
    }
});

app.post('/api/login', async (req, res) => {

        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        })
        
        if(user){
            return res.json({status : 'ok', user: true})
        }else{
            return res.json({status : 'error', user: false})
        }
});

app.listen(1338, () => {
    console.log("Server initialized!");
});
