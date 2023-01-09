//CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const data = require("./names");
const sayhi = require("./utils");
addition_function = require("./function_module");

sayhi(data.person.name);
sayhi(data.person.surname);
sayhi(data.berk);
sayhi(data.mirac);
sayhi("Suzan");


