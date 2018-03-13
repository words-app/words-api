'use strict';

exports.loginFail = (req, res) => {
    const response = {
        message: "login failed"
    };

    res.json(response);
}

exports.loginSuccess = (req, res) => {
    const response = {
        message: "login success"
    };

    res.json(response);
}
