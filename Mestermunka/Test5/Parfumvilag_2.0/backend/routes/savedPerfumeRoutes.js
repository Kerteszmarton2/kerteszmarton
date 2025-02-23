const express = require("express");
const router = express.Router();
const savedPerfumeController = require("../controllers/savedPerfumeController");

router.get("/", savedPerfumeController.getAllSavedPerfumes);
router.get("/:id", savedPerfumeController.getSavedPerfumeById);
router.post("/", savedPerfumeController.createSavedPerfume);
router.delete("/:id", savedPerfumeController.deleteSavedPerfume);

module.exports = router;
