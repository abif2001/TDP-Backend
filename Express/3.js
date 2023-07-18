let nbs = require("express")
let server=nbs()

function addition(req, res){
    let num1=parseInt(req.params.A)
    let num2=parseInt(req.params.B)
    let result=num1+num2
    res.send("The result is "+result)
}

server.get("/add/:A/:B", addition)

server.listen(3000)