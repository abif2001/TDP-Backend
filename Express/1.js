let nbs = require("express")
let server=nbs()

function doSomething(request,response){
    response.send("Hello my friends")
}

function manchester(x,y){
    y.send("It is very hot today")
}

server.get("/nbs", doSomething)
server.get("/qa", manchester)

server.listen(3000)