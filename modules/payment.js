const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const payments = [
        { BillNo: "B101", BillAmount: 1560, BillDate: "01-07-2026", PaymentMode: "UPI" },
        { BillNo: "B102", BillAmount: 980, BillDate: "02-07-2026", PaymentMode: "Cash" },
        { BillNo: "B103", BillAmount: 1200, BillDate: "03-07-2026", PaymentMode: "Card" },
        { BillNo: "B104", BillAmount: 1450, BillDate: "04-07-2026", PaymentMode: "UPI" },
        { BillNo: "B105", BillAmount: 860, BillDate: "05-07-2026", PaymentMode: "Cash" },
        { BillNo: "B106", BillAmount: 2500, BillDate: "06-07-2026", PaymentMode: "Card" },
        { BillNo: "B107", BillAmount: 1340, BillDate: "07-07-2026", PaymentMode: "UPI" },
        { BillNo: "B108", BillAmount: 760, BillDate: "08-07-2026", PaymentMode: "Cash" },
        { BillNo: "B109", BillAmount: 1890, BillDate: "09-07-2026", PaymentMode: "Card" },
        { BillNo: "B110", BillAmount: 950, BillDate: "10-07-2026", PaymentMode: "UPI" }
    ];

    res.json(payments);
});

module.exports = router;