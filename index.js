const express = require('express');
const app = express();
const cors = require("cors");
const uploadRoutes = require("./routes/api/uploads");

app.use("*", cors());
app.use(express.json());

app.use(uploadRoutes);

app.listen(8000);