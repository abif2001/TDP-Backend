let nbs = require("express")
let server = nbs()

server.set("view engine", "ejs")

server.get("/trainer/shafeeq", function(req,res){
    res.render("trainer.ejs", {"tname":"Shafeeq", "taddress":"London"})
    res.end()
})

server.get("/trainer/tadas", function(req,res){
    res.render("trainer.ejs", {"tname":"Tadas", "taddress":"Manchester"})
})

server.listen(3000)