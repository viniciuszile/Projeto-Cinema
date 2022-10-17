import "../../Estilo_Global/style.css"
import React,{ useState,useEffect } from 'react';
import axios from "axios";

export default function Sala7(){

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
            console.log(response[8])
            SetSala(response[8]["NUMERO_SALA"])
            SetCapacidade(response[8]["CAPACIDADE"])
            SetHorario(response[8]["HORARIO"])

        })
    },[])

    useEffect(() =>{
        axios.get("http://localhost:3006/Filmes")
        .then((response) => response.data)
        .then((response) =>{
            console.log(response[8])
            SetProgramacao(response[8]["FILME"])
            SetDuracao(response[8]["DURACAO"])
            
        })
    },[])

    useEffect(() =>{
        axios.get("http://localhost:3006/Ingresso")
        .then((response) => response.data)
        .then((response) =>{
            console.log(response[8])
            SetIngressodips(response[8]["INGRESSOSDISP"])
            SetIngressosvend(response[8]["INGRESSOSVEND"])
            SetValor(response[8]["VALOR"])            
        })
    },[])



    const ingressos = () =>{

        SetIngressodips(ingressodisp - 1)
        SetIngressosvend(ingressosvend + 1)
        SetFaturamento(ingressosvend * valor)

        if(ingressodisp == 8){
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