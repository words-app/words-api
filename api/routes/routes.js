'use strict';

module.exports = (app, passport) => {
    const login = require('../controllers/login');
    const notes = require('../controllers/notes');

    // TODO: complete this tutorial https://goo.gl/4zoui6
    // TODO: ensure this is the bes place for these declarations
    // app.post('/signup', passport.authenticate('local-signup', {
    //     failureRedirect: '/loginfailed',
    //     successRedirect: '/loginsuccess',
    //     failureFlash: true // allow flash messages
    // }));

    app.post('/login', passport.authenticate('local-login', {
        failureRedirect: '/loginfailed',
        successRedirect: '/loginsuccess',
        failureFlash: true // allow flash messages
    }));

    app.route('/loginfailed')
        .get(login.loginFail);

    app.route('/loginsuccess')
        .get(login.loginSuccess);

    app.route('/notes')
        .get(notes.listNotes)
        .post(notes.createNote);

    app.route('/notes/:noteId')
        .get(notes.readNote)
        .put(notes.updateNote)
        .delete(notes.deleteNote);
};
