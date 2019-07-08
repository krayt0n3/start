//Import Dependencies
const router = require("express").Router();
const db = require("../../models");

// Routes
//GET for all posts
router.get("/api/posts/", (request, response) => {
  db.Post.findAll({}).then(posts => response.json(posts));
    
});

//Get route for returning posts of a specific category
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
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    body: req.body.body,
    category1: req.body.category1,
    category2: req.body.category2,
    category3: req.body.category3,
    tag1: req.body.tag1,
    tag2: req.body.tag2,
    tag3: req.body.tag3
  })
    .then(dbPost => {
      console.log(dbPost);
      res.json(dbPost);
    });
});

// PUT/Update
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