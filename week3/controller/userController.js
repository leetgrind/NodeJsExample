const express = require('express');
const userModel = require("../models/user");

const router = express.Router();

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