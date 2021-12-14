const { Router } = require("express");
const controller = require("./controller");
const router = Router();

router.get("/", controller.getAccounts);
router.post("/", controller.addAccount);
router.get("/:id", controller.getAccountByID);
router.put("/:id", controller.updateAccount);
router.delete("/:id", controller.deleteAccount);

module.exports = router;
