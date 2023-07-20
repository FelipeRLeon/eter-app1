import React from 'react'
import { useContext } from "react";

import GrowerContext from "../context/GrowerContext";

const GrowType = () => {
    const { setStep } = useContext(GrowerContext);
  return (
    <main>
        <h3>Grow Type</h3>
        <div className="card">
            <form autoComplete='off'>
            <fieldset>
                <label htmlFor="licence">Tipo de licencia</label>
                <select id="license">
                    <option value="">Seleccione el tipo de licencia</option>
                    <option value="seeds">Produccion de semillas</option>
                    <option value="medicinal">Uso medicinal</option>
                    <option value="recreativo">Uso recreativo</option>
                    <option value="cientific">Uso cientifico</option>
                    <option value="autocultivo">Autocultivo</option>
                </select>
                <p className="error">Valid growing environment Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="environment">Entorno de cultivo</label>
                <select id="environment">
                    <option value="">Seleccione el entorno de cultivo</option>
                    <option value="indoor">Indoor</option>
                    <option value="outdoor">Outdoor</option>
                </select>
                <p className="error">Valid growing environment Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="grow_type">Tipo de cultivo</label>
                <select id="grow_type">
                    <option value="">Seleccione el tipo de cultivo</option>
                    <option value="soil">Sustrato</option>
                    <option value="hydoponic">Hidroponia</option>
                    <option value="aeroponic">Aeroponia</option>
                    <option value="aquaponic">Acuaponia</option>
                </select>
                <p className="error">Valid grow type Required</p>
            </fieldset>
            <div className='button-container'>
                <button className='button-x2'type='submit' onClick={
                    () => {
                       setStep("grower");
                    }
                }>Preview</button>
                <button className='button-x2' type='submit' onClick={
                    () => {
                       setStep("plantstrain");
                    }
                }>Next</button>
            </div>
            </form>
        </div>
    </main>
  )
}

export default GrowType;