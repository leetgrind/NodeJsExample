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

module.exports = router