import React from 'react'
import { useContext } from "react";
import { useFormik } from 'formik';
import { budsSchema } from '../schemas/budsSchema';

import GrowerContext from "../context/GrowerContext";

const Buds = () => {
    const { setStep } = useContext(GrowerContext);

    const onSubmit = () => {
        console.log("Okok");
    }

    const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            buds_wash: "",
            buds_flavor: "",
            buds_smell: "",
            buds_floration: "",
            buds_production: "",
        },
        validationSchema: budsSchema,
        onSubmit
        
    });
  return (
    <main>
    <h3>Buds</h3>
    <div className='card'>
        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
            <fieldset>
                <label htmlFor="buds_wash">Lavado de raices</label>
                <select 
                    id="buds_wash"
                    value={values.buds_wash}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    className={errors.buds_wash ? "error-forgot-input" : ""}
                    >
                    <option value="">Seleccione si empleo lavado de raices</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <p className={errors.buds_wash ? "error-message" : "error"}>Valid Name Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="buds_flavor">Sabor</label>
                <input 
                    type="text" 
                    id="buds_flavor" 
                    value={values.buds_flavor}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    className={errors.buds_flavor ? "error-forgot-input" : ""}
                    autoFocus/>
                <p className={errors.buds_flavor ? "error-message" : "error"}>Valid Strain Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="buds_smell">Aroma</label>
                <input 
                    type="text" 
                    id="buds_smell"
                    value={values.buds_smell}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    className={errors.buds_smell ? "error-forgot-input" : ""}
                    />
                <p className={errors.buds_smell ? "error-message" : "error"}>Valid Name Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="buds_floration">Tiempo de floracion</label>
                <input 
                    type="number" 
                    id="buds_floration"
                    value={values.buds_floration}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    className={errors.buds_floration ? "error-forgot-input" : ""}
                    />
                <p className={errors.buds_floration ? "error-message" : "error"}>Valid Name Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="buds_production">Produccion</label>
                <input 
                    type="number" 
                    id="buds_production"
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    className={errors.buds_production ? "error-forgot-input" : ""}
                    />
                <p className={errors.buds_production ? "error-message" : "error"}>Valid Name Required</p>
            </fieldset>
            
            <div className='button-container'>
                <button className='button-x2' type='submit' 
                >Preview</button>
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