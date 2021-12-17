const {Router} = require ('express')
const controller = require('./controller')
const router = Router();


router.get("/", controller.getConsultations)
router.post("/", controller.addConsultations)
router.delete("/:id", controller.deleteConsultations)
router.patch("/:id", controller.updateConsultations)

module.exports = router