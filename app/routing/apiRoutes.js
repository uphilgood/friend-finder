let express = require("express")
let app = express()
let bodyParser = require("body-parser")
let friends = require("../data/friends")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

module.exports = function(app) {
app.get("/api/friends", function (req, res) {
    return res.json(friends);
})

app.post("/api/friends", function(req, res) {
    friends.push(req.body);

  })
}



