const express = require("express");

const PORT = process.env.PORT || 4000;
const app = express();

app.use("/", (req, res) => {
  res.send("Este es un backend de prueba para ser dockerizado");
});

app.listen(PORT, () => {
  console.log("server listen on port ", PORT);
});
