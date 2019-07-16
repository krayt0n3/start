//Import Dependencies
const router = require("express").Router();
const db = require("../../models");

// Routes
//GET for all posts

router.get("/api/posts/", function(req, res) {
  db.Post.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
});

// Get route for returning posts of a specific category
router.get("/api/posts/category/:category", function(req, res) {
  db.Post.findAll({
    where: {
      category: req.params.category
    }
  })
    .then(function(dbPost) {
      res.json(dbPost);
    });
});


// Get route for retrieving a single post
router.get("/api/posts/:id", function(req, res) {
  db.Post.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(function(dbPost) {
      res.json(dbPost);
    });
});

// POST/Create a post
router.post("/create", (request, response) => {
  db.Post.create({
    title: request.body.title,
    author: request.body.author,
    image: request.body.image,
    body: request.body.body,
    category: request.body.category
  }).then(newPost => {
    console.log(newPost);
    response.json(newPost);
  });
  
});


// PUT route for updating posts
router.put("/api/posts", function(req, res) {
  db.Post.update(req.body,
    {
      where: {
        id: req.body.id
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
});

// DELETE/Delete
router.delete("/api/posts/:id", function(req, res) {
  db.Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function(dbPost) {
      res.json(dbPost);
    });
});

module.exports = router;