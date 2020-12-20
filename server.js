const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes)
app.use("/", htmlRoutes)

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`))