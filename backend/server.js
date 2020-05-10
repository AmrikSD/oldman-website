const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const wordRoutes = express.Router();
const PORT = 4000;

let Word = require('./bannedWord.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/words', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

wordRoutes.route('/').get(function(req, res) {
    Word.find(function(err, words) {
        if (err) {
            console.log(err);
        } else {
            res.json(words);
        }
    });
});

wordRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Word.findById(id, function(err, word) {
        res.json(word);
    });
});

wordRoutes.route('/update/:id').post(function(req, res) {
    Word.findById(req.params.id, function(err, word) {
        if (!word)
            res.status(404).send("data is not found");
        else
            word.word = req.body.word;
            word.punishment = req.body.punishment;


            word.save().then(word => {
                res.json('Word updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

wordRoutes.route('/update/:id').delete(function(req, res) {
    Word.findById(req.params.id, function(err, word) {
        if (!word)
            res.status(404).send("data is not found");
        else
            word.delete().then(word => {
                res.json('Word deleted!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});


wordRoutes.route('/add').post(function(req, res) {
    let word = new Word(req.body);
    word.save()
        .then(word => {
            res.status(200).json({'word': 'word added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new word failed');
        });
});

app.use('/words', wordRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
