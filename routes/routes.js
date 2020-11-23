// routes for CC
const express = require("express");
const router = express.Router();

// Import the model XXX to use its database functions.
const index = require("../models/index.js");
const task = require("../models/task.js");
const user = require("../models/user.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    index.all(function (data) {
        const hbsObject = {
            index: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Create a route to handle users
router.post("/api/user", function (req, res) {
    user.create([
        "owner_id", "assignee_id", "category", "title", "details"
    ], [
        req.body.owner_id, req.body.assignee_id, req.body.category, req.body.title, req.body.details
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

// Create a route to handle tasks
router.post("/api/task", function (req, res) {
    user.create([
        "email", "first_name", "last_name", "phone", "address"
    ], [
        req.body.email, req.body.first_name, req.body.last_name, req.body.phone, req.body.address
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/user/:id", function (req, res) {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);
    console.log(req.body);
    user.update({
        assigned: req.body.assigned
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/task/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
