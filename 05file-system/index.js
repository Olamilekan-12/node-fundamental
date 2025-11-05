const fs = require("fs")
const path = require("path")


const dataFolder = path.join(__dirname, "data")

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder)
    console.log("Created", dataFolder)
}

const filePath = path.join(dataFolder, "example.txt")
//sync way of creating a file
fs.writeFileSync(filePath, "Hello from node js")
console.log("file created")

const readContentFromFile = fs.readFileSync(filePath, "utf8")
console.log("file content", readContentFromFile)

fs.appendFileSync(filePath, "\nThis is a new line")

console.log("new file content added")

//async way of creating a file
const asyncFilePath = path.join(dataFolder,"async-example.txt");

fs.writeFile(asyncFilePath,"Hello async from nodejs",(err) => {
    if(err){
        throw err
    }
console.log("asnyc file created successfully")
})