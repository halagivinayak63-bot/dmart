const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const products = [
        {
            ProductID: "P101",
            ProductName: "Pears Face Wash",
            ProductCost: 760,
            ProductQuantity: 50
        },
        {
            ProductID: "P102",
            ProductName: "Dove Soap",
            ProductCost: 85,
            ProductQuantity: 100
        },
        {
            ProductID: "P103",
            ProductName: "Lux Soap",
            ProductCost: 45,
            ProductQuantity: 120
        },
        {
            ProductID: "P104",
            ProductName: "Clinic Plus Shampoo",
            ProductCost: 210,
            ProductQuantity: 60
        }

        // Remaining products are not visible in the screenshot.
    ];

    res.json(products);
});

module.exports = router;