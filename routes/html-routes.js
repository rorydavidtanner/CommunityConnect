const path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("/index", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("/post", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/post.html"));
    });
    app.get("/browse", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/browse.html"));
    });
};
