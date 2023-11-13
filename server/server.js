const express = require("express");
const cors = require("cors");
const pool =require("./database");
const app = express()
app.use(express.json())
app.use(cors())

app.get("/login",cors(),(req,res)=>{

})

app.post("/login", (req,res) =>{
    const email_id = req.body["email_id"]
    const password = req.body["password"]

    console.log("email_id: " + email_id);
    console.log("password: " + password);

    const insertSTMT = `INSERT INTO accounts (email_id,password) VALUES ('${email_id}','${password}');`
    pool
        .query(insertSTMT)
        .then((response) => {
        console.log("Data Saved");
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
    console.log(req.body)
    res.send("Response Received: " +req.body);
});

app.listen(3000, () => console.log("Server on localhost:3000"));