const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MainSchema = new Schema({
    properties: [
        {
            id: {
                type: String
            },
            title: {
                type: String
            },
            text: {
                type: String
            }
        }
    ],
    levels: [
        {
            id: {
                type: String
            },
            type: {
                type: String
            },
            description: {
                type: String
            }
        }
    ]
});

module.exports = Main = mongoose.model('main', MainSchema)