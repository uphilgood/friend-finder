let express = require("express")
let app = express()
let bodyParser = require("body-parser")
let path = require("path")

module.exports = function(app) {
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
})

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
})
}
