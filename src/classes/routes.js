const {Router} = require ('express')
const controller = require('./controller')
const router = Router();


router.get("/", controller.getClasses)
router.post("/", controller.addClasses)
router.delete("/:id", controller.deleteClasses)
router.patch("/:id", controller.updateClasses)

module.exports = router