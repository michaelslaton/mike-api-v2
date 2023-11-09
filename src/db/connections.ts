const env = process.env.NODE_ENV || "development";
const config = require("./knexFile")[env];
const knex = require("knex")(config);
 
export default knex;