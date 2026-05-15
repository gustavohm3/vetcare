const Pet = require("../models/Pet");

exports.createPet = async (req, res) => {
  try {
    const pet = await Pet.create(req.body);
    res.status(201).json(pet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPets = async (req, res) => {
  try {
    const pets = await Pet.find().populate("ownerId");
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id).populate("ownerId");

    if (!pet) {
      return res.status(404).json({ message: "Pet não encontrado" });
    }

    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    if (!pet) {
      return res.status(404).json({ message: "Pet não encontrado" });
    }

    res.status(200).json(pet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);

    if (!pet) {
      return res.status(404).json({ message: "Pet não encontrado" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};