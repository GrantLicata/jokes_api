const { default: mongoose, model } = require('mongoose');

// Create a schema
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String
    },
    punchLine: {
        type: String
    }
});

// Use schema to create a colleciton in the database
const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
