import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Salas from "../Home/Salas";
import Sala1_2 from "../Salas/Sala1/Sala1_2";
import Sala1 from "../Salas/Sala1/Sala1";
import Sala2 from "../Salas/Sala2/Sala2";
import Sala3 from "../Salas/Sala3/Sala3";
import Sala4 from "../Salas/Sala4/Sala4";
import Sala4_2 from "../Salas/Sala4/Sala4_2";
import Sala5 from "../Salas/Sala5/Sala5";
import Sala6 from "../Salas/Sala6/Sala6";
import Sala7 from "../Salas/Sala7/Sala7";
import Sala7_2 from "../Salas/Sala7/Sala7_2";
import Faturamento from "../Faturamento/Faturamneto";





export default function Rotas() {
    return (
      <div className="rotas">
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Salas/>} /> 
            <Route path="/Sala1" element={<Sala1 />} /> 
            <Route path="/Sala1_2" element={<Sala1_2/>} /> 
            <Route path="/Sala2" element={<Sala2/>} /> 
            <Route path="/Sala3" element={<Sala3/>} /> 
            <Route path="/Sala4" element={<Sala4/>} /> 
            <Route path="/Sala4_2" element={<Sala4_2/>} /> 
            <Route path="/Sala5" element={<Sala5/>} /> 
            <Route path="/Sala6" element={<Sala6/>} /> 
            <Route path="/Sala7" element={<Sala7/>} /> 
            <Route path="/Sala7_2" element={<Sala7_2/>} /> 
            <Route path="/Faturamento" element={<Faturamento/>} /> 
          </Routes>
        </BrowserRouter>
      </div>
    )
}

// useEffect(() => {
//   if (botaoClicado === true) {         
//           axios.put("http://localhost:3006/Atulizar", {
//               id: id,
//               ingressodisp: ingressodisp,
//               ingressosvend: ingressosvend,
//               faturamento: faturamento,
//               cor: cor

//           }).then((response) => console.log(response))
          
//       if (ingressodisp < capacidade / 2) {
//           SetCor("orange")
//           SetCortexto("white")
//       }

//       if (ingressodisp === 0) {
//           console.log('teste')

//           SetIngressodips("Os ingressos esgotaram")
//           SetCor("red")
//           SetCortexto("white")
//       }
//       setBotao(false)
//   }

// }, [ingressodisp])