import React from "react";
import './main.css'
import { useState } from 'react';

function Formulario() {

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState(null);
    const [status, setStatus] = useState('');
    const [erro, setErro] = useState('');

    function calcularIMC(e) {
        e.preventDefault();

        if (!peso || !altura || peso <= 0 || altura <= 0) {
        setErro("Por favor, digite valores válidos maiores que zero.");
        setResultado(null);
        return;
        }   else if (peso > 0 && altura > 0){

                setErro("");
                const imc = peso / (altura * altura);
                setResultado(imc);
                console.log("Seu IMC é:", imc);

                if (imc < 18.5) {
                    setStatus("Abaixo do peso (Magreza)");
                } else if (imc < 25) {
                    setStatus("Peso normal");
                } else if (imc < 30) {
                    setStatus("Sobrepeso");
                } else if (imc < 35) {
                    setStatus("Obesidade Grau I");
                } else if (imc < 40) {
                    setStatus("Obesidade Grau II (Severa)");
                } else {
                    setStatus("Obesidade Grau III (Mórbida)");
                }
            }
    }

    return (
        <>
        <div className= "container">
            <form className="formulario" onSubmit={calcularIMC}>
                <div className="form-group">
                    <label htmlFor="peso">Peso (kg):</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="peso" 
                        placeholder="Digite seu peso" 
                        value={peso}
                        onChange={(e) => setPeso(parseFloat(e.target.value))}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="altura">Altura (m):</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="altura" 
                        placeholder="Digite sua altura" 
                        value={altura}
                        onChange={(e) => setAltura(parseFloat(e.target.value))}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Calcular IMC</button>
            </form>
            {erro && (
                <div className="alert alert-danger mt-3 text-center" role="alert">
                    {erro}
                </div>
            )}
            {resultado && !erro && (
                <div className="alert alert-success mt-3 text-center" role="alert">
                    <p className="mb-1">Seu IMC é: <strong>{resultado.toFixed(2)}</strong></p>
                    <p className="mb-0">Classificação: <strong>{status}</strong></p>
                </div>
)}
        </div>
        </>
    );
}

export default Formulario;