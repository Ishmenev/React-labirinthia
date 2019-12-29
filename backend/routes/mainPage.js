const express = require('express');
const router = express.Router();
const MainPage = require('../models/Main');


// @route POST api/main
// @desc  Add author
// @access Public


router.get('/', async (req, res) => {
    
    try {
        const main = await MainPage.find();
        
        res.json(main)
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
    }
});

module.exports = router;