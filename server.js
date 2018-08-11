let express = require("express")
let app = express()
let bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

let PORT = process.env.PORT || 8080;



app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});