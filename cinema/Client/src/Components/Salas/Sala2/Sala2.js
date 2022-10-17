import "../../Estilo_Global/style.css"
import React,{ useState,useEffect } from 'react';
import axios from "axios";

export default function Sala2 (){

    const [sala, SetSala] = useState([])
    const [capacidade, SetCapacidade] = useState()
    const [faturamento, SetFaturamento] = useState()
    const [horario, SetHorario] = useState()

    const [programacao, SetProgramacao] = useState("")
    const [duracao, SetDuracao] = useState("")

    const [ingressodisp, SetIngressodips] =  useState()
    const [ingressosvend, SetIngressosvend] = useState()
    const [valor, SetValor] = useState()
    
    const [desativar, SetDesativar] = useState("")
    const [cor, SetCor] = useState("")
    const [cortexto, SetCortexto] = useState("")

    useEffect(() =>{
        axios.get("http://localhost:3006/")
        .then((response) => response.data)
        .then((response) =>{
            console.log(response[2])
            SetSala(response[2]["NUMERO_SALA"])
            SetCapacidade(response[2]["CAPACIDADE"])
            SetHorario(response[2]["HORARIO"])

        })
    },[])

    useEffect(() =>{
        axios.get("http://localhost:3006/Filmes")
        .then((response) => response.data)
        .then((response) =>{
            console.log(response[2])
            SetProgramacao(response[2]["FILME"])
            SetDuracao(response[2]["DURACAO"])
            
        })
    },[])

    useEffect(() =>{
        axios.get("http://localhost:3006/Ingresso")
        .then((response) => response.data)
        .then((response) =>{
            console.log(response[2])
            SetIngressodips(response[2]["INGRESSOSDISP"])
            SetIngressosvend(response[2]["INGRESSOSVEND"])
            SetValor(response[2]["VALOR"])            
        })
    },[])



    const ingressos = () =>{

        SetIngressodips(ingressodisp - 1)
        SetIngressosvend(ingressosvend + 1)
        SetFaturamento(ingressosvend * valor)

        if(ingressodisp == 52){
            SetCor("orange")
            SetCortexto("white")
        }

        if(ingressodisp == 1){
            SetDesativar("desabled")
            SetIngressodips("Os ingressos esgotaram")
            SetCor("red")
            SetCortexto("white")
        }
    }
    



    return(
        
        <div>

            <div className="header-sala1">
                    <h1>Cine-Zile</h1>
                </div>

            <div className="container-sala1"  >

                <div className="infos-sala1" style={{backgroundColor: cor }}>

                    <h1 style={{color: cortexto }} className="texto_nome-sala1">{sala}</h1>

                    
                    <p  style={{color: cortexto }} className="texto_infos">Programação : {programacao}</p>
                    <p style={{color: cortexto }} className="texto_infos">Duração Do Filme : {duracao}</p>
                    <p style={{color: cortexto }} className="texto_infos">Horario Da Sessão : {horario}</p>
                    <p  style={{color: cortexto }} className="texto_infos">Capacidade : {capacidade}</p>
                    <p style={{color: cortexto }} className="texto_infos">Ingressos Disponiveis : {ingressodisp}</p>
                    <p  style={{color: cortexto }} className="texto_infos">Ingressos vendidos : {ingressosvend}</p>
                    
                    <button  disabled={desativar} className="botao-sala1" onClick={ingressos}>Comprar Ingresso</button>
                    <p className="texto_infos">faturamento Total : {faturamento} </p>
                </div>
            </div>
        </div>
    )
}