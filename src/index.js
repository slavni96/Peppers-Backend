const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");

var peppersRoute = require('./routes/peppers');

app.use('/peppers', peppersRoute);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/", (req, res) => res.json({ message: "Welcome to peppers API!" }));

app.listen(PORT, () => console.log(`Server started on port ${PORT}…`));