const {Router} = require ('express')
const controller = require('./controller')
const router = Router();


router.get("/", controller.getUsers)
router.post("/", controller.addUsers)
router.delete("/:id", controller.deleteUsers)
router.patch("/:id", controller.updateUsers)

module.exports = router