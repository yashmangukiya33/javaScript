const { copyFileSync } = require("fs");
const http = require("http");

console.log(http);

const server = http.createServer((request, Response) => {

    Response.write("<h1>hello</h1>");
    Response.end();
    
});

server.listen(7878, () => {
    console.log("listing 7878");
});
 