const express = require("express");
const app = express();
const mysql = require("mysql")
const cors = require("cors")

app.use(cors());
app.use(express.json);

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "cinema"
})



app.get('/', (req,res) =>{
    console.log("teste")
    let SQL = 
    "insert into filmes (sinopse, duracao, nomefilme) values ('teste2','teste2','teste2') "
    db.query(SQL, (err, result) =>{
    console.log(err)
    })
})


app.get("/getSalas",(req,res) =>{
    let SQL = 
      "select * from filmes";
      db.query(SQL, (err, result) =>{
         if (err) console.log(err);
         else res.send(result)
        })
    
})



app.listen(3001, () => {
    console.log("rodando na porta 3001")
})

