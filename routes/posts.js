const express = require("express");
const router = express.Router();

const { body, validationResult } = require("express-validator");

// import database connection
const connection = require("../config/database");

/**
 * @route   GET api/posts
 * INDEX POSTS
 */
router.get("/", function (req, res) {
    // definisikan 1 route baru dengan method GET
    //query sql untuk menampilkan data posts
    connection.query(
        "SELECT * FROM posts ORDER BY id desc",
        function (error, rows) {
            if (error) {
                return res.status(500).json({
                    message: "Internal Server Error",
                });
            } else {
                return res.status(200).json({
                    status: true,
                    message: "List Data Posts",
                    data: rows,
                });
            }
        }
    );
});

/**
 * STORE POST
 */
router.post(
    "/store",
    [
        // validation
        body("title").notEmpty(),
        body("content").notEmpty(),
    ],
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
            });
        }

        // define formData
        let formData = {
            title: req.body.title,
            content: req.body.content,
        };

        // insert query
        connection.query(
            "INSERT INTO posts SET ?",
            formData,
            function (error, rows) {
                //if(err) throw err
                if (error) {
                    return res.status(500).json({
                        status: false,
                        message: "Internal Server Error",
                    });
                } else {
                    return res.status(201).json({
                        status: true,
                        message: "Insert Data Successfully",
                        data: rows[0],
                    });
                }
            }
        );
    }
);

module.exports = router;
