const express = require('express');
const router = express.Router();
const Main = require('../models/Main');
const { check, validationResult } = require('express-validator/check')

// @route POST api/main
// @desc  Add main
// @access Public

router.post('/', async (req, res) => {

    try {
        const newMain = new Main({
            properties: req.body.properties,
            levels: req.body.levels
        })
        const main = await newMain.save()
        res.json(main)
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
    }
});



router.get('/', async (req, res) => {
    
    try {
        const main = await Main.find();
        
        res.json(main)
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
    }
});

module.exports = router;