const express = require("express");
const router = express.Router();

/**
 * @route   GET api/posts
 * INDEX POSTS
 */
router.get("/", function (req, res) {
    res.send([
        {
            Welcome: "Welcome to the API",
        },
        {
            GetPosts: "http://localhost:3000/api/posts", // http://localhost:3000/api/posts,
            GetPostsById: "http://localhost:3000/api/posts/:id", // http://localhost:3000/api/posts/1,
            AddPosts: "http://localhost:3000/api/posts/store", // http://localhost:3000/api/posts/1,
            UpdatePosts: "http://localhost:3000/api/posts/update/:id", // http://localhost:3000/api/posts/update/1,
            DeletePosts: "http://localhost:3000/api/posts/delete/:id", // http://localhost:3000/api/posts/delete/1,
        },
    ]);
});

module.exports = router;
