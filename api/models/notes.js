'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoteSchema = new Schema({
    name: {
        type: String,
        required: 'Don\'t you want to give this note a name?'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String
    }
});

module.exports = mongoose.model('Notes', NoteSchema);