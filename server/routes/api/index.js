const router = require("express").Router();
const userRoutes = require("./users");
const listingRoutes = require("./Listing");
const profileRoutes = require("./Profile");
const reviewRoutes = require("./Review");
const userRoutes = require("./user");
const messageRoutes = require("./message")
// Book routes
router.use("/users", userRoutes);
router.use("/message", messageRoutes);

return router;
// module.exports = router;


router.use("/user", userRoutes);


router.use("/listings", listingRoutes);

router.use("/profiles", profileRoutes);

router.use("/reviews", reviewRoutes);

module.exports = router;

