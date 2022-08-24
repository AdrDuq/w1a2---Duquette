let myhttp = require("http");

let myserver = myhttp.createServer(

  function(myrequest, myresponse){
    console.log(myrequest.url);

    myresponse.writeHead(200, {"Content-Type": "text/plain"});

    myresponse.end("oh dang oh jeez");
  }
);

myserver.listen(8080, "0.0.0.0");

console.log("server has started");