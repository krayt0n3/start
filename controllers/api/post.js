//Import Dependencies
const router = require("express").Router();
const db = require("../../models");

// Routes
//GET for all posts
router.get("/", (request, response) => {
  db.Post.findAll({}).then(posts => response.json(posts));
  response.end();
});

//GET Route for specific post
router.get("/:attribute/:value", (request, response) => {
  //Note that attribute can be firstname, lastname, phonenumber, etc.
  db.Post.findAll({
    where: {
      [request.params.attribute]: request.params.value
    }
  }).then(posts => response.json(posts));
  response.end();
});

// POST/Create a post
router.post("/create", (request, response) => {
  db.Post.create({
    title: request.body.title,
    author: request.body.author,
    image: request.body.image,
    body: request.body.body
  }).then(newPost => {
    console.log(newPost);
    response.json(newPost);
  });
  response.end();
});

// PUT/Update
router.put("/:attribute/:value", (request, response) => {
  //Here we update a specific post
  db.Post.update(request.body, {
    where: {
      [request.params.attribute]: request.params.value
    }
  }).then(updatedPost => response.json(updatedPost));
  response.end();
});

// DELETE/Delete
router.delete("/:attribute/:value", (request, response) => {
  db.Post.destroy({
    where: {
      [request.params.attribute]: request.params.value
    }
  }).then(destroyedPost => response.json(destroyedPost));
  response.end();
});

module.exports = router;