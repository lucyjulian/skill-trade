const router = require("express").Router();
const userRoutes = require("./user");
const messageRoutes = require("./message")
// Book routes
router.use("/users", userRoutes);
router.use("/message", messageRoutes);

// module.exports = router;
