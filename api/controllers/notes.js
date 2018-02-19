'use strict';

const mongoose = require('mongoose');

const Note = mongoose.model('Notes');

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

exports.updateNote = (req, res) => {
    Note.findOneAndUpdate({ _id: req.params.noteId }, req.body, { new: true }, (err, note) => {
        if (err) {
            res.send(err)
        }

        res.json(note);
    })
}

exports.deleteNote = (req, res) => {
    Note.remove({
        _id: req.params.noteId
    }, (err, note) => {
        if (err) {
            res.send(err);
        }

        res.json({ message: 'Note successfully deleted' });
    })
}