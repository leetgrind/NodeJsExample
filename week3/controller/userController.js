const express = require('express');
const bodyParser = require('body-parser');
const userModel = require("../models/user");

const router = express.Router();
const jsonParser = bodyParser.json();

router.post("/", jsonParser, async (req, res) => {

    console.log(req.body)

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