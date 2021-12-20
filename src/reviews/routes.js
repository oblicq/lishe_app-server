const {Router} = require ('express')
const controller = require('./controller')
const router = Router();


router.get("/", controller.getReviews)
router.post("/", controller.addReviews)
router.delete("/:id", controller.deleteReviews)
router.patch("/:id", controller.updateReviews)

module.exports = router