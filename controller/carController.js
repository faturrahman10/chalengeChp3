const fs = require("fs");
const car = require("../data/cars.json");

module.exports = {
    car: function (req, res) {
        let supir = req.query.supir === "true";
        let date = new Date(req.query.year);
        let year = date.getFullYear();
        let capacity = req.query.capacity;

        // const data = fs.readFileSync("data/cars.json");
        // const car = JSON.parse(data);

        if (supir && year && capacity) {
            let cars = car.filter(function (d) {
                if (supir === true) {
                    return d.available === true && d.year <= year && d.capacity <= capacity;
                } else {
                    return d.available === false && d.year <= year && d.capacity <= capacity;
                }
            });

            console.log(cars);
            return res.render("../public/views/searchCar", { cars: cars });
        }

        return res.render("../public/views/searchCar");
    },
};
