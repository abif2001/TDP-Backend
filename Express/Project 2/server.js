let Express=require("express")
let server = Express()
let mySql = require ("mysql")

let db = mySql.createConnection({
    host: "localhost",
    user:"root",
    password:"root",
    database:"nbs"
})
db.connect()

server.get("/show", function(req, res){
        db.query("select * from employees", function(err, data){
            console.log(data)
        })
        res.write("Hello")
        res.end
})

server.listen(3000)