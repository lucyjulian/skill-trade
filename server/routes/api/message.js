const express = require('express')
const router = express.Router()
// const User = require('../../database/models/User')
// const passport = require('../../passport')
const userController = require("./../../controllers/userController");

router.route("/:id").get(userController.getMesssageBody);

module.exports = router