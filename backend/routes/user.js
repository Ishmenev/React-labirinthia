const express = require('express');
const router = express.Router();
const Login = require('../models/Login');


// @route POST api/main
// @desc  Login user
// @access Public

router.post('/login/', async (req, res) => {
    const data = req.body;

    let userData = {};

    if (data.type === 'vk') {
        userData = {
            userId: data.user.id,
            firstName: data.user.first_name,
            secondName: data.user.last_name,
        }
    }
    try {
        const newUser = new Login(userData)
        const user = await newUser.save()
        res.json({
            status: true
        })
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
    }
});







module.exports = router;