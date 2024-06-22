let server=require("http")
const { json } = require("stream/consumers")
server.createServer((req,resp)=>{
resp.writeHead(200,{'content-type':'application\json'})
resp.write(JSON.stringify({name:"rupesh gupta",course:"mca",roll_no:35,email:"rupeshgupta00001@gmail.com"}))
resp.end()
}).listen(5000)