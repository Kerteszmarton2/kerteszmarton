const express = require("express");
const router = express.Router();
const featuredPerfumeController = require("../controllers/featuredPerfumeController");

router.get("/", featuredPerfumeController.getAllFeaturedPerfumes);
router.get("/:id", featuredPerfumeController.getFeaturedPerfumeById);
router.post("/", featuredPerfumeController.createFeaturedPerfume);
router.put("/:id", featuredPerfumeController.updateFeaturedPerfume);
router.delete("/:id", featuredPerfumeController.deleteFeaturedPerfume);

module.exports = router;
