import "../../Estilo_Global/style.css"
import React,{ useState,useEffect } from 'react';
import axios from "axios";

export default function Sala3 (){

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
            console.log(response[3])
            SetSala(response[3]["NUMERO_SALA"])
            SetCapacidade(response[3]["CAPACIDADE"])
            SetHorario(response[3]["HORARIO"])

        })
    },[])

    useEffect(() =>{
        axios.get("http://localhost:3006/Filmes")
        .then((response) => response.data)
        .then((response) =>{
            console.log(response[3])
            SetProgramacao(response[3]["FILME"])
            SetDuracao(response[3]["DURACAO"])
            
        })
    },[])

    useEffect(() =>{
        axios.get("http://localhost:3006/Ingresso")
        .then((response) => response.data)
        .then((response) =>{
            console.log(response[3])
            SetIngressodips(response[3]["INGRESSOSDISP"])
            SetIngressosvend(response[3]["INGRESSOSVEND"])
            SetValor(response[3]["VALOR"])            
        })
    },[])



    const ingressos = () =>{

        SetIngressodips(ingressodisp - 1)
        SetIngressosvend(ingressosvend + 1)
        SetFaturamento(ingressosvend * valor)

        if(ingressodisp == 53){
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