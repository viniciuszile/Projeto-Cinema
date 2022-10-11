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

                        <p className="horarios">Horario das 15:00</p>
                        <Link to="/Sala1"><button className="botao">
                            <p className="2">Informações</p></button></Link>
                            
                        <p className="horarios">Horario das 18:00</p>
                        <Link to="/Sala1"><button className="botao">
                            <p className="2">Informações</p></button></Link>
                    </div>

                    <div className="salas">

                        <h1 className="texto"> Sala 2 </h1>

                        <p className="horarios">Horario das 17:00</p>
                        <Link to="/Sala2"><button className="botao">
                            <p className="text_botao">Informações</p></button></Link>
                    </div>

                    <div className="salas">

                        <h1 className="texto"> Sala 3 </h1>

                        <p className="horarios">Horario das 22:00</p>
                        <Link to="/Sala3"><button className="botao">
                            <p className="text_botao">Informações</p></button></Link>
                    </div>
                </div>

                <div className="row-2">

                    <div className="salas_menor">

                        <h1 className="texto_menor"> Sala 4 </h1>

                        <p className="horarios">Horario das 16:00</p>
                        <Link to="/Sala4"><button className="botao_menor">
                            <p className="text_botao_menor">Informações</p></button></Link>

                        <p className="horarios">Horario das 20:00</p>
                        <Link to="/Sala4"><button className="botao_menor">
                            <p className="text_botao_menor">Informações</p></button></Link>
                    </div>

                    <div className="salas">

                        <h1 className="texto"> Sala 5 </h1>

                        <p className="horarios">Horario das 18:00</p>
                        <Link to="/Sala5"><button className="botao">
                            <p className="text_botao">Informações</p></button></Link>
                    </div>

                    <div className="salas_menor">

                        <h1 className="texto_menor"> Sala 6 </h1>

                        <p className="horarios">Horario das 21:00</p>
                        <Link to="/Sala6"><button className="botao_menor">
                            <p className="text_botao_menor">Informações</p></button></Link>
                    </div>

            

                    <div className="salas_grande">

                        <h1 className="texto"> Sala 7 </h1>

                        <p className="horarios">Horario das 15:00</p>
                        <Link to="/Sala7"><button className="botao">
                            <p className="text_botao">Informações</p></button></Link>

                        <p className="horarios">Horario das 20:30</p>
                        <Link to="/Sala7"><button className="botao">
                            <p className="text_botao">Informações</p></button></Link>
                    </div>

                </div>


            </div>

        </div>
    )
};