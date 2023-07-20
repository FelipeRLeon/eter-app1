import React from 'react'
import { useContext } from "react";

import GrowerContext from "../context/GrowerContext";

const Buds = () => {
    const { setStep } = useContext(GrowerContext);
  return (
    <main>
    <h3>Buds</h3>
    <div className='card'>
        <form autoComplete="off">
            <fieldset>
                <label htmlFor="buds_wash">Lavado de raices</label>
                <select id="buds_wash">
                    <option value="">Seleccione si empleo lavado de raices</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <p className="error">Valid Name Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="buds_flavor">Sabor</label>
                <input type="text" id="buds_flavor" autoFocus/>
                <p className="error">Valid Strain Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="buds_smell">Aroma</label>
                <input type="text" id="buds_smell"/>
                <p className="error">Valid Name Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="buds_floration">Tiempo de floracion</label>
                <input type="number" id="buds_floration"/>
                <p className="error">Valid Name Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="buds_production">Produccion</label>
                <input type="number" id="buds_production"/>
                <p className="error">Valid Name Required</p>
            </fieldset>
            
            <div className='button-container'>
                <button className='button-x2' type='submit' onClick={
                    () => {
                       setStep("nutrients");
                    }
                }>Preview</button>
                <button className='button-x2' type='submit' onClick={
                    () => {
                       setStep("grower");
                    }
                }>Finish</button>
            </div>
        </form>
    </div>
  </main>
  )
}

export default Buds