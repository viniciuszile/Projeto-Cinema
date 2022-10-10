import "./Sala1.css"
import React,{ useState,useEffect } from 'react';
import Axios from "axios";






export default function Sala1 (){

    const [ingressodisp, SetIngressodips] =  useState(100)
    const [ingressosvend, SetIngressosvend] = useState(0)
    
    const ingressos = () =>{
        SetIngressodips(ingressodisp - 1)
        SetIngressosvend(ingressosvend + 1)
    }



    return(
        <div className="container-sala1">
            <div className="infos">

                <h1 className="sala1-sala1">Sala 1 </h1>
    
                <p>Ingressos Disponiveis : {ingressodisp}</p>
                <p>Ingressos vendidos : {ingressosvend}</p>

                <button  className="botao-sala1" onClick={ingressos}>Comprar Ingresso</button>
            </div>
        </div>
    )
}