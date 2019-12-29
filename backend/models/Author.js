const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    // Имя
    firstName: {
        type: String,
        required: true
    },

    // Фамилия
    lastName: {
        type: String,
        required: true
    },

    // Маленькая фотография на главную
    photoSmall: {
        type: String
    },

    // Большая фотография в раздел об авторе
    photoBig: {
        type: String
    },

    // Краткая фраза для главной
    slogan: {
        type: String,
    },

    // Описания на главной
    about: [{
        // Картинка для блока
        image: {
            type: String
        },
        // Описание блока
        text: {
            type: String
        }
    }],

    // Об авторе
    story: {
        type: [String]
    }

})

module.exports = Author = mongoose.model('author', AuthorSchema)