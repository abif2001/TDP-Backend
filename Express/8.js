let nbs = require("express")
let server = nbs()

server.set("view engine", "ejs")

server.get("/results/shafeeq", function(req,res){
    res.render("results.ejs", {"sname":"Shafeeq", "phy":90, "chem":90, "bio":92})
    res.end()
})

server.get("/results/James", function(req,res){
    res.render("results.ejs", {"sname":"James", "phy":10, "chem":50, "bio":0})
    res.end()
})


server.listen(3000)