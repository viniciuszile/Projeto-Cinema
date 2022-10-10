import React from "react";
import "./Salas.css"
import { Link } from "react-router-dom";





export default function Salas() {


    return (

        <div>

            <div className="header">
                <h1></h1>
                <h1>Cine-Zile</h1>
                <h1>Faturamento</h1>
            </div>

            <div className="container">

                <div className="row-1">

                    <div className="salas">
                        <h1 className="texto"> Sala 1 </h1>
                        <Link to="/Sala1"><button className="botao">
                            <p className="2">Informações</p></button></Link>
                    </div>

                    <div className="salas">
                        <h1 className="texto"> Sala 2 </h1>
                        <Link to="/Sala2"><button className="botao">
                            <p className="text_botao">Informações</p></button></Link>
                    </div>

                    <div className="salas_grande">
                        <h1 className="texto"> Sala 3 </h1>
                        <Link to="/Sala2"><button className="botao">
                            <p className="text_botao">Informações</p></button></Link>
                    </div>
                </div>

                <div className="row-2">

                    <div className="salas">
                        <h1 className="texto"> Sala 4 </h1>
                        <Link to="/Sala4"><button className="botao">
                            <p className="text_botao">Informações</p></button></Link>
                    </div>

                    <div className="salas_menor">
                        <h1 className="texto_menor"> Sala 5 </h1>
                        <Link to="/Sala5"><button className="botao_menor">
                            <p className="text_botao_menor">Informações</p></button></Link>
                    </div>

                    <div className="salas_menor">
                        <h1 className="texto_menor"> Sala 6 </h1>
                        <Link to="/Sala6"><button className="botao_menor">
                            <p className="text_botao_menor">Informações</p></button></Link>
                    </div>

            

                    <div className="salas">
                        <h1 className="texto"> Sala 2 </h1>
                        <Link to="/Sala2"><button className="botao">
                            <p className="text_botao">Informações</p></button></Link>
                    </div>

                </div>


            </div>

        </div>
    )
};