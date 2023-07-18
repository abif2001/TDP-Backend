let nbs = require("express")
let server=nbs()

function homePage(req,res){
    res.write("<h1> <centre> Welcome to my home page </centre> </h1>")
    res.write("<b> List of departments </b> <br> <br>")
    res.write("<A href='http://127.0.0.1:3000/department/101'> Human Resource Department </a> <br>")
    res.write("<A href='http://127.0.0.1:3000/department/102'> IT Department </a> <br>")
    res.write("<A href='http://127.0.0.1:3000/department/103'> Sales Department </a> <br>")
}

function employeesList(req,res){
    let departmentName=""
    if (req.params.dept==101){
        departmentName= "Human Resouce Department"
    }
    if (req.params.dept==102){
        departmentName= "IT Department"
    }
    if (req.params.dept==103){
        departmentName= "Sales Department"
    }

    res.write("<h1> <center>")
    res.write(departmentName)
    res.write("</center> </h1>")
}

server.get("/", homePage)
server.get("/department/:dept", employeesList)

server.listen(3000)