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


app.put('/Atulizar', (req,res) => {
        const id = req.body.id
        
        let update = `UPDATE salas s INNER JOIN ingresso i ON s.IDSALAS = i.ID_SALAS_INGRESSOS set i.INGRESSOSDISP = (i.ingressosdisp -1), i.INGRESSOSVEND  = (i.INGRESSOSVEND +1) where s.IDSALAS = ${id};`
        let update2 = `UPDATE salas s INNER JOIN ingresso i ON s.IDSALAS = i.ID_SALAS_INGRESSOS set s.FATURAMENTO = (i.ingressosvend * i.valor) where s.IDSALAS = ${id};`
        let select = `select s.FATURAMENTO,i.INGRESSOSDISP,i.INGRESSOSVEND,s.Cor,s.Capacidade  from salas s INNER JOIN ingresso i ON s.IDSALAS = i.ID_SALAS_INGRESSOS INNER JOIN Filmes f on s.IDSALAS = f.ID_SALAS_FILMES where s.IDSALAS = ${id};`

        db.query(update, function (err, result) {
            console.log(result)

            db.query(update2, function (err, result) {
                console.log(result)
            })

            db.query(select, function (err, result) {
                if (result[0].INGRESSOSVEND > 1 && result[0].INGRESSOSVEND <= 99) {
                    db.query(`UPDATE salas s set s.Cor = "#6495ED" where s.IDSALAS = ${id}; `,function(err,result){
                        console.log(result)
                    })
                }
                if (result[0].INGRESSOSVEND === result[0].Capacidade) {
                    db.query(`UPDATE salas s set s.Cor = "red" where s.IDSALAS = ${id}; `,function(err,result){
                        console.log(result)
                    })
                }
            })
        })
})


app.listen(3006, () => {
    console.log("rodando na porta 3001")
})

