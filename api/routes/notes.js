'use strict';

module.exports = function (app) {
    var notes = require('../controllers/notes');

    // todoList Routes
    app.route('/notes')
        .get(notes.listNotes)
        .post(notes.createNote);


    // app.route('/notes/:taskId')
    //     .get(notes.read_a_task)
    //     .put(notes.update_a_task)
    //     .delete(notes.delete_a_task);
};