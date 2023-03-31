const express = require("express");
const app = express();
const port = 3000;

const carController = require("../controller/carController");

// gunakan ejs
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("../public/views/indeks");
});

// app.get("/cars", (req, res) => {
//     // res.render("../public/views/searchCar");
// });

app.get("/cars", carController.car);

app.listen(port, () => {
    console.log(`server running on ${port}`);
});

