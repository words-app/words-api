'use strict';

var mongoose = require('mongoose'),
    Note = mongoose.model('Notes');

exports.listNotes = function (req, res) {
    Note.find({}, function (err, note) {
        if (err)
            res.send(err);
        res.json(note);
    });
};

exports.createNote = function (req, res) {
    var newNote = new Note(req.body);
    newNote.save(function (err, note) {
        if (err)
            res.send(err);
        res.json(note);
    });
};