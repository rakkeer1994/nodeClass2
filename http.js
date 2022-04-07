const http = require("http");
http.createServer(function(request, response){
    // response.write("hellovin the world of nodejs")
    


    // response.write("<h1>this is h1 tag </h1>")
    const user = {name:"rakesh", class:"obc"}
    response.write(JSON.stringify(user))
    response.end();
}).listen(3000)

// this is only for single api and its route is given by / 

// if we want combine child routes or all the routes to single route then we use express framework