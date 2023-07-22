import React from 'react'
import { useContext } from "react";
import { useFormik } from 'formik';
import { nutrientsSchema } from '../schemas/nutrientsSchema';

import GrowerContext from "../context/GrowerContext";

const Nutrients = () => {
    const { setStep } = useContext(GrowerContext);

    const onSubmit = () => {
        console.log("Okok");
    }

    const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            nutrients_type: "",
            nutrients_brand: "",
            nutrients_fungi: "",
            nutrients_insect: "",
        },
        validationSchema: nutrientsSchema,
        onSubmit
        
    });
  return (
    <main>
    <h3>Nutrients</h3>
    <div className='card'>
        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
            <fieldset>
                <label htmlFor="nutrients_type">Tipo de nutrientes</label>
                <select 
                    id="nutrients_type"
                    value={values.nutrients_type}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    className={errors.nutrients_type ? "error-forgot-input" : ""}
                    >
                    <option value="">Seleccione los nutrientes empleados</option>
                    <option value="organic">Organico</option>
                    <option value="mineral">Mineral</option>
                    <option value="mix">Mixto</option>
                </select>
                <p className={errors.nutrients_type ? "error-message" : "error"}>Valid Name Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="nutrients_brand">Marca de nutrientes</label>
                <input 
                    type="text" 
                    id="nutrients_brand" 
                    value={values.nutrients_brand}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    className={errors.nutrients_brand ? "error-forgot-input" : ""}
                    autoFocus/>
                <p className={errors.nutrients_brand ? "error-message" : "error"}>Valid Strain Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="nutrients_fungi">Fungicida</label>
                <input 
                    type="text" 
                    id="nutrients_fungi"
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    className={errors.nutrients_fungi ? "error-forgot-input" : ""}
                    />
                <p className={errors.nutrients_fungi ? "error-message" : "error"}>Valid Name Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="nutrients_insect">Insecticida</label>
                <input 
                    type="text" 
                    id="nutrients_insect"
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    className={errors.nutrients_insect ? "error-forgot-input" : ""}
                    />
                <p className={errors.nutrients_insect ? "error-message" : "error"}>Valid Name Required</p>
            </fieldset>
            
            <div className='button-container'>
                <button className='button-x2' type='submit' onClick={
                    () => {
                       setStep("plantstrain");
                    }
                }>Preview</button>
                <button className='button-x2' type='submit' onClick={
                    () => {
                       setStep("buds");
                    }
                }>Next</button>
            </div>
        </form>
    </div>
  </main>
  )
}

export default Nutrients