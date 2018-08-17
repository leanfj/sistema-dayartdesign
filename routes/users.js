const express = require("express");
const router = express.Router();

let users = [
  { id: 1, nome: "admin", email: "admin@admin.com" },
  { id: 2, nome: "dayana", email: "dayana@email.com" }
];

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json(users);
});

module.exports = router;
