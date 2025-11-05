const path = require("path")

console.log("directory name", path.dirname(__filename))
console.log("file name", path.basename(__filename))

console.log("file extention", path.extname(__filename))

const joinedPath = path.join("/user","document","node","projects")
console.log("Joined path", joinedPath)

const resolvePath = path.resolve("/user","document","node","projects")
console.log("resolve path", resolvePath)

