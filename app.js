var express = require("express");
var path = require("path");

var routes = require("./routes");

var app = express();

app.set("port", process.env.PORT || 8080);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.set("Application_Name", process.env.Application_Name || "demo")
app.set("Application_Password", process.env.Application_Password || "demo")
app.set("Application_Environment", process.env.Application_Environment || "demo")
app.set("Application_ConnectionString", process.env.Application_ConnectionString || "demo")

app.use(routes);

app.listen(app.get("port"), function(){
    console.log("Server started on port " + app.get("port"));
    console.log("Application_Name : "+ app.get("Application_Name"))
    console.log("Application_Password : "+ app.get("Application_Password"))
    console.log("Application_Environment : "+ app.get("Application_Environment"))
    console.log("Application_ConnectionString : "+ app.get("Application_ConnectionString"))
    
})
