let Express=require("express")
let server = Express()
let mySql = require ("mysql")

let db = mySql.createConnection({
    host: "localhost",
    user:"root",
    password:"root",
    database:"nbs2"
})
db.connect()

server.get("/", function(req,res){
    res.render("homepage.ejs")
    res.end()
})

server.get("/allemployeeslist", function(req,res){
    db.query("select * from employees"), function(err, records){
        res.render("employeeslist.ejs", {employees:records})
        res.end()
    }
})

server.get("/departments", function(req,res){
    db.query("select distinct department from employees"), function(err, records){
        res.render("departments.ejs", {deptName:records})
        res.end()
    }
})

server.listen(3000)

server.get("/show", function(req, res){
        db.query("select * from employees", function(err, data){
            console.log(data)
        })
        res.write("Hello")
        res.end
})

server.listen(3000)