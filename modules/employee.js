const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const employees = [
        { EmployeeID: "E101", EmployeeName: "Pooja", EmployeeAddress: "Jayanagar", EmployeePhone: "56565433" },
        { EmployeeID: "E102", EmployeeName: "Ramesh", EmployeeAddress: "KR Puram", EmployeePhone: "9876543211" },
        { EmployeeID: "E103", EmployeeName: "Suresh", EmployeeAddress: "Whitefield", EmployeePhone: "9988776654" },
        { EmployeeID: "E104", EmployeeName: "Kavya", EmployeeAddress: "BTM Layout", EmployeePhone: "9123456700" },
        { EmployeeID: "E105", EmployeeName: "Deepak", EmployeeAddress: "Indiranagar", EmployeePhone: "9876500001" },
        { EmployeeID: "E106", EmployeeName: "Nisha", EmployeeAddress: "Electronic City", EmployeePhone: "9988112233" },
        { EmployeeID: "E107", EmployeeName: "Harish", EmployeeAddress: "Hebbal", EmployeePhone: "9001122334" },
        { EmployeeID: "E108", EmployeeName: "Anita", EmployeeAddress: "Yelahanka", EmployeePhone: "9887766554" },
        { EmployeeID: "E109", EmployeeName: "Vinay", EmployeeAddress: "Marathahalli", EmployeePhone: "9877001122" },
        { EmployeeID: "E110", EmployeeName: "Neha", EmployeeAddress: "Malleshwaram", EmployeePhone: "9988990011" }
    ];

    res.json(employees);
});

module.exports = router;