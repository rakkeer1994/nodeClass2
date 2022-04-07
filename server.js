const express=require("express");
const server=express();

const middleware1 =(request, response, next)=>{
    console.log("hello this is middleware")
    next() //block the flow and take it back to the requested route
}
// server.use(middleware1);

const middleware2=(req, res, next)=>{
    console.log("hello from middleware2")
    next()
}
server.use(middleware2);

server.get("/",(request,response)=>{
    response.send("hello express world")
})

server.get("/user",(request,response)=>{
    response.send("hello user")
})

server.get("/obj",middleware1,(request,response)=>{
    response.send({name:"rakesh",age:"28"})
})
server.listen(3000, ()=>{console.log("server is running at port 3000")})


// http method 
// get post update delete 

//middlewares :: 
// it is a function ,
// this function takes 3 parameters
// req, res, next
// we can create multiple middleware

// why middleware:::
// just like in hoc in react
// middleware is something wgich will be executed 
// first before any route being executed