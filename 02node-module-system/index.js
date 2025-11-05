// module.exports -> export
// require -> import

const firstModule = require("./first-module")

console.log(firstModule.add(10,20));

try {
    console.log("trying to divide by 0");
    let result = firstModule.divide(0,0)
    console.log(result);
    
    
} catch (error) {
    console.log("caught an error", error.message);
    
}


//module wrapper

// (
//     function(exports, require, module, __filename,__dirname){
//         // your module code goes in here
//     }
// )
