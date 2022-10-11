import "./Sala3.css"
import React,{ useState,useEffect } from 'react';

export default function Sala1 (){


    const [ingressodisp, SetIngressodips] =  useState(110)
    const [ingressosvend, SetIngressosvend] = useState(0)
    const [faturamento, SetFaturamento] = useState(0)
    const [programacao, SetProgramacao] = useState("O telefone preto")
    const [duracao, SetDuracao] = useState("103 Minutos")
    const [capacidade, SetCapacidade] = useState(110)


    const ingressos = () =>{

        SetIngressodips(ingressodisp - 1)
        SetIngressosvend(ingressosvend + 1)
        SetFaturamento(ingressosvend * 10)
    }
    



    return(
        
        <div>

            <div className="header-sala1">
                    <h1>Cine-Zile</h1>
                </div>

            <div className="container-sala1">

                <div className="infos-sala1">

                    <h1 className="texto_nome-sala1">Sala 3 </h1>

                    
                    <p className="texto_infos">Programação : {programacao}</p>
                    <p className="texto_infos">Duração Do Filme : {duracao}</p>
                    {/* <p>faturamento Sala : {faturamento}</p> */}
                    <p className="texto_infos">Capacidade : {capacidade}</p>
                    <p className="texto_infos">Ingressos Disponiveis : {ingressodisp}</p>
                    <p className="texto_infos">Ingressos vendidos : {ingressosvend}</p>
                    
                    <button  className="botao-sala1" onClick={ingressos}>Comprar Ingresso</button>
                    
                </div>
            </div>
        </div>
    )
}