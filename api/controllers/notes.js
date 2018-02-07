'use strict';

var mongoose = require('mongoose'),
    Note = mongoose.model('Notes');

exports.listNotes = (req, res) => {
    Note.find({}, (err, note) => {
        if (err) {
            res.send(err);
        }

        res.json(note);
    });
};

exports.createNote = (req, res) => {
    let newNote = new Note(req.body);

    newNote.save((err, note) => {
        if (err) {
            res.send(err);
        }

        res.json(note);
    });
};

exports.readNote = (req, res) => {
    Note.findById(req.params.noteId, (err, note) => {
        if (err) {
            res.send(err);
        }

        res.json(note);
    });
}