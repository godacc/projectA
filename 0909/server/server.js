var server=require("express")();

var userin=require("./router/login");
var userlog=require("./router/logup");

server.use("/",(req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next();
})

server.use("/router",userin)
server.use("/router",userlog)
server.listen(3000);
