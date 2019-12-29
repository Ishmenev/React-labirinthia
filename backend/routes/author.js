const express = require('express');
const router = express.Router();
const Author = require('../models/Author');
const { check, validationResult } = require('express-validator/check')

// @route POST api/author
// @desc  Add author
// @access Public





router.post('/', [
    check('firstName', 'Введите имя').not().isEmpty(),
    check('lastName', 'Введите фамилию').not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        const newAuthor = new Author({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            photoSmall: req.body.photoSmall || "",
            photoBig: req.body.photoBig || "" || "",
            slogan: req.body.slogan || "",
            about: req.body.about || [],
            story: req.body.story || [],
        })
        const author = await newAuthor.save()
        res.json(author)
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
    }
});



// @route GET api/author
// @desc  Get author
// @access Public

router.get('/', async (req, res) => {
    try {
        const author = await Author.find();
        res.json(author)
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
    }
});

module.exports = router;