require("dotenv").config();

const { swaggerUi, specs } = require("./config/swagger");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const clientRoutes = require("./routes/clientRoutes");
const petRoutes = require("./routes/petRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/clients", clientRoutes);
app.use("/pets", petRoutes);
app.use("/auth", authRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("/", (req, res) => {
  res.status(200).json({
    status: "online",
    message: "VetCare API funcionando"
  });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB conectado com sucesso");

    app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando na porta ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar no MongoDB:", error);
  });