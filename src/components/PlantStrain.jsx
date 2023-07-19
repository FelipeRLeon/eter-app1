import React from 'react'

const PlantStrain = () => {
  return (
    <main>
    <h3>Plant Strain</h3>
    <div className='card'>
        <form autoComplete="off">
            <fieldset>
                <label htmlFor="plant_strain">Nombre de la genetica</label>
                <input type="text" id="plant_strain" autoFocus/>
                <p className="error">Valid Strain Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="plant_seedBank">Banco de semillas</label>
                <input type="text" id="plant_seedBank"/>
                <p className="error">Valid Name Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="plant_origin">Origen de la planta</label>
                <input type="text" id="plant_origin"/>
                <p className="error">Valid Name Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="plant_dominance">Dominancia de la planta</label>
                <select id="plant_dominance">
                    <option value="">Seleccione la dominancia de la planta</option>
                    <option value="indica">Indica</option>
                    <option value="sativa">Sativa</option>
                    <option value="hybrid">Hibrida</option>
                </select>
                <p className="error">Valid Name Required</p>
            </fieldset>
            <div className='button-container'>
                <button className='button-x2' type='submit'>Preview</button>
                <button className='button-x2' type='submit'>Next</button>
            </div>
            <div className='option'>Option</div>
        </form>
    </div>
  </main>
  )
}

export default PlantStrain