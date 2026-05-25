require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const clientRoutes = require("./routes/clientRoutes");
const petRoutes = require("./routes/petRoutes");
const authRoutes = require("./routes/authRoutes");
const { swaggerUi, specs } = require("./config/swagger");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/clients", clientRoutes);
app.use("/pets", petRoutes);
app.use("/auth", authRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});