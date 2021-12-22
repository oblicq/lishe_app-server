const {Router} = require ('express')
const controller = require('./controller')
const router = Router();


router.get("/", controller.getQuestions)
router.post("/", controller.addQuestions)
router.delete("/:id", controller.deleteQuestions)
router.put("/:id", controller.updateQuestions)

module.exports = router