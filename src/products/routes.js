const {Router} = require ('express')
const controller = require('./controller')
const router = Router();


router.get("/", controller.getProducts)
router.post("/", controller.addProducts)
router.delete("/:id", controller.deleteProducts)
router.patch("/:id", controller.updateProducts)

module.exports = router