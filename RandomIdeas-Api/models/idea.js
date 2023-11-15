const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    text: { type: String, required: true },
    tag: { type: String, required: true },
    username: { type: String, required: true },
    date: { type: Date, default: Date.now, required: true },
});

const Idea = mongoose.model('Idea', ideaSchema);

module.exports = Idea;
