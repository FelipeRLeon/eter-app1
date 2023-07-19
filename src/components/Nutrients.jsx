import React from 'react'

const Nutrients = () => {
  return (
    <main>
    <h3>Nutrients</h3>
    <div className='card'>
        <form autoComplete="off">
            <fieldset>
                <label htmlFor="nutrients_type">Tipo de nutrientes</label>
                <select id="nutrients_type">
                    <option value="">Seleccione los nutrientes empleados</option>
                    <option value="organic">Organico</option>
                    <option value="mineral">Mineral</option>
                    <option value="mix">Mixto</option>
                </select>
                <p className="error">Valid Name Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="nutrients_brand">Marca de nutrientes</label>
                <input type="text" id="nutrients_brand" autoFocus/>
                <p className="error">Valid Strain Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="nutrients_fungi">Fungicida</label>
                <input type="text" id="nutrients_fungi"/>
                <p className="error">Valid Name Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="nutrients_insect">Insecticida</label>
                <input type="text" id="nutrients_insect"/>
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

export default Nutrients