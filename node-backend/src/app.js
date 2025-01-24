const express = require("express");
const cors = require("cors");
const itemsRoutes = require("./routes/items");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/items", itemsRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));