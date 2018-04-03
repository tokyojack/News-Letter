var router = require("express").Router();
var flashUtils = require('../../utils/flashUtils');

var redirectLocation = "/";

// URL: "/"
module.exports = function (pool) {

    //Selects the amount of subbmited emails and inserts itself with EJS in "index.ejs"
    router.get("/", function (req, res) {

        pool.getConnection(function (err, connection) {
            if (flashUtils.isDatabaseError(req, res, redirectLocation, err))
                return;

            var selectTotalAmountOfEmails = require('./queries/selectTotalAmountOfEmails.sql');

            connection.query(selectTotalAmountOfEmails, function (err, row) {
                connection.release();

                if (flashUtils.isDatabaseError(req, res, redirectLocation, err))
                    return;

                res.render("index/index.ejs", {
                    amount: row[0].amount
                });
            });
        });
    });

    //Selects the amount of subbmited emails and inserts itself with EJS in "index.ejs"
    router.post("/", function (req, res) {

        pool.getConnection(function (err, connection) {
            if (flashUtils.isDatabaseError(req, res, redirectLocation, err))
                return;

            var insertEmail = require('./queries/insertEmail.sql');


            connection.query(insertEmail, [req.body.email], function (err, row) {
                connection.release();

                if (flashUtils.errorMessageif(req, res, '/', err.code === 'ER_DUP_ENTRY', 'Your email is already submitted.'))
                    return;


                if (flashUtils.isDatabaseError(req, res, redirectLocation, err))
                    return;

                flashUtils.successMessage(req, res, '/', 'You have successfully added your email!');
            });
        });
    });

    return router;
};