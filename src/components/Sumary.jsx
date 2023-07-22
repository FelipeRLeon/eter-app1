import React from 'react'
import { useContext, useState } from "react";
import GrowerContext from "../context/GrowerContext";

const Sumary = () => {
    const { setStep } = useContext(GrowerContext);
    const persona = JSON.parse(localStorage.getItem("persona"));
  return (
    <main>
        <h3>Resumen</h3>
        <div className='card'>
        <p><span>Nombre de cultivador: </span>{persona.grower_name}</p>
        <p>Equipo del cultivador: {persona.grower_team}</p>
        <p>Ciudad del cultivador:{persona.grower_city}</p>
        <p>License of Grow: {persona.license}</p>
        <p>Entorno de Cultivo: {persona.environment}</p>
        <p>Tipo de Cultivo: {persona.grow_type}</p>
        <p>Genetica de la Planta: {persona.plant_strain}</p>
        <p>Banco de Semillas: {persona.plant_seedBank}</p>
        <p>Origen de laPlanta: {persona.plant_origin}</p>
        <p>Dominancia de la Planta: {persona.plant_dominance}</p>
        <p>Tipo de Nutrientes: {persona.nutrients_type}</p>
        <p>Marca de Nutrientes: {persona.nutrients_brand}</p>
        <p>Fungicida: {persona.nutrients_fungi}</p>
        <p>Insecticida: {persona.nutrients_insect}</p>
        <p>Lavado de Cogollos: {persona.buds_wash}</p>
        <p>Sabor de Cogollos: {persona.buds_flavor}</p>
        <p>Aroma de Cogollos:{persona.buds_smell}</p>
        <p>Tiempo de Floracion: {persona.buds_floration}</p>
        <p>Produccion Final: {persona.buds_production}</p>
        <div className='button-container'>
                <button className='button-x2' type='button' onClick={
                    () => {
                       setStep("buds");
                    }}>Preview</button>
                <button className='button-x2' type='buton'
                onClick={
                    () => {
                       setStep("grower");
                       const persona = {
                        grower_name: "",
                        grower_team: "",
                        grower_city: "",
                        license: "",
                        environment: "",
                        grow_type: "",
                        plant_strain: "",
                        plant_seedBank: "",
                        plant_origin: "",
                        plant_dominance: "",
                        nutrients_type: "",
                        nutrients_brand: "",
                        nutrients_fungi: "",
                        nutrients_insect: "",
                        buds_wash: "",
                        buds_flavor: "",
                        buds_smell: "",
                        buds_floration: "",
                        buds_production: "",
                      }

                      localStorage.setItem("persona", JSON.stringify(persona));
                      
                    }}>Next</button>
            </div>
        
        </div>

        
        
    </main>
  )
}

export default Sumary