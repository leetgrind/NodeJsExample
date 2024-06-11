const express = require('express');
const bodyParser = require('body-parser');
const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const jwt_secret_key = process.env.SECRET_KEY

const router = express.Router();
const jsonParser = bodyParser.json();




router.post("/login", jsonParser, async (req, res) => {
    email = req.body.email;
    password = req.body.password;

    // query mongo db with email 
    const user = await userModel.findOne({email});

    if(!user) {
        res.status(401).send();
        return;
    }

    // match the password
    if(password != user.password) {
        res.status(401).send();
    }

  

    const token = jwt.sign({email, userid: "123456"},jwt_secret_key, {expiresIn: '1h'} );

    res.status(200).json(
        {token}
    );
});

router.post("/", jsonParser, async (req, res) => {

    console.log(req.body)
    
    if(!req.body.email) {
        res.status(400).send({
            "message": "Email is required"
        });
    }

    const newUser = new userModel({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
    });

    try {
        const newData = await newUser.save();
        res.status(201).json(newData)
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
});

router.delete("/:id", async(req, res) => {
    try{
        const id = req.params.id;
        const deletedUser = await userModel.findByIdAndDelete(id);
        console.log(`User with id: ${deletedUser.id} is deleted`);
        res.status(204).send()
    }
    catch(err) {
        res.status(500).json({message: err.message})
    }
});



router.get("/", async (req, res) => {
    try{
        const allUsers = await userModel.find();
        res.json(allUsers)
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
});

router.get("/:id", async (req, res) => {

    try{
        const id = req.params.id;
        const allUsers = await userModel.findById(id)
        
        if(allUsers.$isEmpty){
            res.status(404);
        }
        else {
            res.json(allUsers)
        }
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }

});

module.exports = router