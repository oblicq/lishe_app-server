const {Router} = require ('express')
const controller = require('./controller')
const router = Router();


router.get("/", controller.getAgents)
router.post("/", controller.addAgent)
router.delete("/:id", controller.deleteAgent)
router.patch("/:id", controller.updateAgent)

module.exports = router