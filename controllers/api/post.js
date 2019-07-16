//Import Dependencies
const router = require("express").Router();
const db = require("../../models");

// Routes
//GET for all posts

router.get("/", function(req, res) {
  db.Post.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    }, 60000);
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
    category: request.body.category
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