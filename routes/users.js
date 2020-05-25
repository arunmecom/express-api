const express = require('express');
const router = express.Router();
const users = [
  {
    name: "Arun"
  },
  {
    name:"Shukla"
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  //res.send(users)
  res.json(users)
});

module.exports = router;