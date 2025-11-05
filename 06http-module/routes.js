const http = require("http")


const server = http.createServer((req,res)=> {
const url = req.url
if(url === "/"){
    res.writeHead(200,{
        "Content-Type" : "text/plain"
    })

    res.end("This is home page")
}else{
     res.writeHead(404,{
        "Content-Type" : "text/plain"
    })

    res.end("Not found!!!")
}
})

const port = 3000

server.listen(port,()=> {
    console.log(`server running on port ${port}`)
})
