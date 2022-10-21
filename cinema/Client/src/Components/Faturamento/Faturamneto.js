import React,{ useState,useEffect } from 'react';
import "./Faturamento.css"
import axios from "axios";
import { Link } from "react-router-dom";


export default function Faturamento() {

    const [faturamento1,SetFaturamento1] = useState()
    const [faturamento1_2,SetFaturamento1_2] = useState()
    const [faturamento2,SetFaturamento2] = useState()
    const [faturamento3,SetFaturamento3] = useState()
    const [faturamento4,SetFaturamento4] = useState()
    const [faturamento4_2,SetFaturamento4_2] = useState()
    const [faturamento5,SetFaturamento5] = useState()
    const [faturamento6,SetFaturamento6] = useState()
    const [faturamento7_2,SetFaturamento7_2] = useState()
    const [faturamento7,SetFaturamento7] = useState()

    useEffect(() =>{
        axios.get("http://localhost:3006/")
        .then((response) => response.data)
        .then((response) =>{
            SetFaturamento1(response[0]["FATURAMENTO"])
            SetFaturamento1_2(response[1]["FATURAMENTO"])
            SetFaturamento2(response[2]["FATURAMENTO"])
            SetFaturamento3(response[3]["FATURAMENTO"])
            SetFaturamento4(response[4]["FATURAMENTO"])
            SetFaturamento4_2(response[5]["FATURAMENTO"])
            SetFaturamento5(response[6]["FATURAMENTO"])
            SetFaturamento6(response[7]["FATURAMENTO"]) 
            SetFaturamento7(response[8]["FATURAMENTO"])
            SetFaturamento7_2(response[9]["FATURAMENTO"])

        })
    },[])


    return (

        // <div className='container_faturamento'>

                
        //         <div className="header_faturamento">
        //             <Link to="/" className='link_faturamento'><h1>Voltar</h1></Link>
        //             <h1>Cine-Zile</h1>
        //             <Link to="/Faturamento" className='link_faturamento'><h1>Faturamento</h1></Link>
                    
        //         </div>
                    
        //         <div className="faturamento">

        //             <h1 className="texto_faturamento"> Faturamento </h1>
                        


        //         </div>

        // </div>

        <div>

        <div className="header-faturamento">
                <h1>Cine-Zile</h1>
            </div>

        <div className="container-faturamento"  >

            <div className="infos-faturamento">

                        <h2>Sala 1 sessão 1 :{faturamento1} R$</h2>
                        <h2>Sala 1 sessão 2 :{faturamento1_2} R$</h2>
                        <h2>Sala 2 sessão 1  :{faturamento2} R$</h2>
                        <h2>Sala 3 sessão 1  :{faturamento3} R$</h2>
                        <h2>Sala 4 sessão 1  :{faturamento4} R$</h2>
                        <h2>Sala 4 sessão 2  :{faturamento4_2} R$</h2>
                        <h2>Sala 5 sessão 1 :{faturamento5} R$</h2>
                        <h2>Sala 6 sessão 1 :{faturamento6} R$</h2>
                        <h2>Sala 7 sessão 1 :{faturamento7} R$</h2>
                        <h2>Sala 7 sessão 2:{faturamento7_2} R$</h2>
            </div>
        </div>
    </div>

    )
};

