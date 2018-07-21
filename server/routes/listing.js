const router = require("express").Router();
const listingController = require("../controllers/listingcont");


router.route('/api/listings')
.put(listingController.update)

router.route('/browse')
.get(listingController.findAll)
.post(listingController.create);

module.exports = router; 