const controller = require ("../controller/treinoControllers");
const express = require("express")

const router = express.Router();
router.post("/add", controller.addTreino);
router.get("/all", controller.allTreinos);
router.get("/:id", controller.treinoId);

router.patch("/:id", controller.updateTreino);
router.delete("/:id", controller.deleteTreino);

module.exports = router;