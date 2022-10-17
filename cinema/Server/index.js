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

app.put("/", (req, res) => {
    console.log("foi")
    const { IDFILME } = 1;
    const { FILME } = "TESTE1";
    // const { cost } = req.body;
    // const { category } = req.body;
    let mysql = "UPDATE FILMES SET FILME = teste,  WHERE IDFILME = 1";
    db.query(mysql, [FILME, IDFILME], (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });



app.listen(3006, () => {
    console.log("rodando na porta 3001")
})

