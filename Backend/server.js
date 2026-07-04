const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express() //You are turning the express app on to use it

app.use(express.json()) //Every app.get/post route will now have the ability to receive information that is already parsed or converted into json, so we dont need to parse it every time we receive the request object we just write this one line here at the very top of all the routes and we are good to go.

app.get("/", function(req, res){
    res.sendFile("C:/Users/mihir/OneDrive/Desktop/Classes/Pranessh Web Dev Classes/Basic Backend Study/Frontend/index.html")
})

//This is the most important route/endpoint of any website because this is the home page.

app.get("/about", function(req, res){
    // res.sendFile("C:/Users/mihir/OneDrive/Desktop/Classes/Pranessh Web Dev Classes/Basic Backend Study/Frontend/about.html")
})

app.get("/ourFirstApi", function(req, res){
    res.json({
        "name" : "pranessh",
        "age" : 15
    })
})

app.post("/ourFirstPost", function(req, res){
    var obj = req.body
    console.log(obj)
})

app.listen(2530, function(){
    console.log("Server has started")
})

// We are doing app.get because we want to give data to our home page which is / and the viewer would be able to see something in our homepage and by viewing it means they are actually receiving the data and since they are receiving the data someone must be sending the data and that someone is our backend's server

// request and response are the two objects that are filled by the app.get function and these objects are responsible for various things.
// The request object input have a lot of functions that are responsible to receive data from some frontend and the response object is responsible to give data to some frontend.

//If you want to stop your server just do Ctrl+C