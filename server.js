const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public"), { extensions: ["html"] }));
app.get("/health", (_req, res) => res.send("ok"));

app.listen(PORT, "0.0.0.0", () => console.log("Web lagu jalan di port " + PORT));
