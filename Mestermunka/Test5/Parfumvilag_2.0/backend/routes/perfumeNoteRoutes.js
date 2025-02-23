const express = require("express");
const router = express.Router();
const perfumeNoteController = require("../controllers/perfumeNoteController");

router.get("/", perfumeNoteController.getAllPerfumeNotes);
router.get("/:id", perfumeNoteController.getPerfumeNoteById);
router.post("/", perfumeNoteController.createPerfumeNote);
router.put("/:id", perfumeNoteController.updatePerfumeNote);
router.delete("/:id", perfumeNoteController.deletePerfumeNote);

module.exports = router;
