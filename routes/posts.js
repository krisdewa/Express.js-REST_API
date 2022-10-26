const express = require("express");
const router = express.Router();

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

module.exports = router;