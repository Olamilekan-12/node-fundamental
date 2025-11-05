const lodash = require("lodash")

const names = ["bello", "olamilekan", "john","terry","jerry"]

const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize)