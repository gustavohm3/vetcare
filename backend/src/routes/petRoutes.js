/**
 * @swagger
 * tags:
 *   name: Pets
 *   description: Gerenciamento de pets
 */

/**
 * @swagger
 * /pets:
 *   get:
 *     summary: Lista todos os pets
 *     tags: [Pets]
 *     responses:
 *       200:
 *         description: Lista de pets
 */

/**
 * @swagger
 * /pets:
 *   post:
 *     summary: Cria um pet
 *     tags: [Pets]
 *     responses:
 *       201:
 *         description: Pet criado
 */

const express = require("express");
const router = express.Router();

const petController = require("../controllers/petController");

router.post("/", petController.createPet);
router.get("/", petController.getPets);
router.get("/:id", petController.getPetById);
router.put("/:id", petController.updatePet);
router.delete("/:id", petController.deletePet);

module.exports = router;