var router = require("express").Router();

var flashUtils = require('../../utils/flashUtils');
var emailUtils = require('../../utils/emailUtils');

var redirectLocation = "/home";

// URL: "/"
module.exports = function (pool) {

    // "sendEmail.ejs" page
    router.get("/", (req, res) => res.render("adminPanel/sendEmail.ejs"));

    // Send's the email when posted back
    router.post("/", function (req, res) {

        pool.getConnection(function (err, connection) {
            if (flashUtils.isDatabaseError(req, res, redirectLocation, err))
                return;

            var selectAllEmails = require('./queries/selectAllEmails.sql');

            connection.query(selectAllEmails, [req.body.email], function (err, emails) {
                connection.release();

                if (flashUtils.isDatabaseError(req, res, redirectLocation, err))
                    return;

                emails.forEach(function (email) {
                    emailUtils.sendEmail(req.body.title, req.body.content, email.email);
                });

                flashUtils.successMessage(req, res, '/home', "You have successfully sent out a new's letter!");
            });
        });
    });



    return router;
};