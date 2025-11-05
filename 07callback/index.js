function person(name, callbackFn){
    console.log(`Hello ${name}`)
    callbackFn("Lagos...")
}

function address(address){
    console.log(address)
}

person("Olamilekan", address)