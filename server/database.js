const {Pool} = require("pg")

const pool = new Pool({
    user: "postgres",
    passward: "krutika",
    host: "localhost",
    port: 5432,
    database: "Banking_UI",

});

{/*const createTblQry = `CREATE TABLE bank(
    user_id serial PRIMARY KEY,
    email_id VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) UNIQUE NOT NULL);`

pool
.query(createTblQry)
.then((Response)=>{
    console.log("database Created");
    console.log(Response);
})*/}

module.exports = pool;