let express = require("express")
let app = express()
let bodyParser = require("body-parser")
let friends = require("../data/friends")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

module.exports = function(app) {
    var scores = []
app.get("/api/friends", function (req, res) {
    return res.json(friends);
})

app.post("/api/friends", function(req, res) {
    friends.push(req.body);

  })
}



// for (var i = 0; i < arr.length; i++) {
//     newArr.push(Math.abs(arr2[i] - arr[i]))
    
    
//     }