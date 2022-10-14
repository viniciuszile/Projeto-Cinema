const express = require("express");
const app = express();
const mysql = require("mysql")
const cors = require("cors")

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "Cinema"
})



app.get('/', (req,res) =>{
    console.log("teste")
    let SQL = ("select * from Salas")
    db.query(SQL, (err, result) =>{
    console.log(result)
    res.status(200).json(result)
    })
})


app.get('/Filmes', (req,res) =>{
    console.log("teste")
    let SQL = ("select * from Filmes")
    db.query(SQL, (err, result) =>{
    console.log(result)
    res.status(200).json(result)
    })
})

app.get('/Ingresso', (req,res) =>{
    console.log("teste")
    let SQL = ("select * from Ingresso")
    db.query(SQL, (err, result) =>{
    console.log(result)
    res.status(200).json(result)
    })
})



app.listen(3006, () => {
    console.log("rodando na porta 3001")
})

