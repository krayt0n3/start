//Import Dependencies
const router = require("express").Router();
const db = require("../../models");

// Routes
//GET for all posts

router.get("/", function(req, res) {
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


// POST/Create a post
router.post("/create", (request, response) => {
  db.Post.create({
    title: request.body.title,
    author: request.body.author,
    image: request.body.image,
    body: request.body.body,
    category1: request.body.category1,
    category2: request.body.category2,
    category3: request.body.category3,
    tag1: request.body.tag1,
    tag2: request.body.tag2,
    tag3: request.body.tag3
  }).then(newPost => {
    console.log(newPost);
    response.json(newPost);
  });
  
});

// PUT/Update
router.put("/:attribute/:value", (request, response) => {
  //Here we update a specific post
  db.Post.update(request.body, {
    where: {
      [request.params.attribute]: request.params.value
    }
  }).then(updatedPost => response.json(updatedPost));
 
});

// DELETE/Delete
router.delete("/:attribute/:value", (request, response) => {
  db.Post.destroy({
    where: {
      [request.params.attribute]: request.params.value
    }
  }).then(destroyedPost => response.json(destroyedPost));
  
});

module.exports = router;