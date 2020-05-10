const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Word = new Schema({
    word: {
        type: String
    },
    punishment: {
        type: String
    }
});

module.exports = mongoose.model('Word', Word);
