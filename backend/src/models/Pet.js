const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Pet", PetSchema);