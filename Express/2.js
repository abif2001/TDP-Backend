let nbs = require("express")
let server=nbs()

function qaFunction(x,y){
    y.send("It is very hot today")
}

// This function will not be able to be accessed from outside of the server.get
server.get("/nbs", function (request,response){
    response.send("Hello my friends")
})

server.get("/qa1", qaFunction)
server.get("/qa2", qaFunction)

server.listen(3000)