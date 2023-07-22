import React from 'react'
import { useContext } from "react";
import { useFormik } from 'formik';
import { plantStrainSchema } from '../schemas/plantStrainSchema';
import GrowerContext from "../context/GrowerContext";

const PlantStrain = () => {
    const { setStep } = useContext(GrowerContext);

    const onSubmit = () => {
        console.log("Okok");
    }

    const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
            initialValues: {
                plant_strain: "",
                plant_seedBank: "",
                plant_origin: "",
                plant_dominance: "",
            },
            validationSchema: plantStrainSchema,
            onSubmit
            
        });

        console.log(errors)
  return (
    <main>
    <h3>Plant Strain</h3>
    <div className='card'>
        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
            <fieldset>
                <label htmlFor="plant_strain">Nombre de la genetica</label>
                <input 
                    type="text" 
                    id="plant_strain"
                    value={values.plant_strain}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    autoFocus
                    className={errors.plant_strain ? "error-forgot-input" : ""}
                />
                <p className={errors.plant_strain ? "error-message" : "error"}>Valid Strain Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="plant_seedBank">Banco de semillas</label>
                <input 
                    type="text" 
                    id="plant_seedBank"
                    value={values.plant_seedBank}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    className={errors.plant_seedBank ? "error-forgot-input" : ""}
                />
                <p className={errors.plant_seedBank ? "error-message" : "error"}>Valid Bank Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="plant_origin">Origen de la planta</label>
                <input 
                    type="text" 
                    id="plant_origin"
                    value={values.plant_origin}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    className={errors.plant_origin ? "error-forgot-input" : ""}
                />
                <p className={errors.plant_origin ? "error-message" : "error"}>Valid Origin Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="plant_dominance">Dominancia de la planta</label>
                <select 
                    id="plant_dominance"
                    value={values.plant_dominance}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    className={errors.plant_dominance ? "error-forgot-input" : ""}
                >
                    <option value="">Seleccione la dominancia</option>
                    <option value="indica">Indica</option>
                    <option value="sativa">Sativa</option>
                    <option value="hybrid">Hibrida</option>
                </select>
                <p className={errors.plant_dominance ? "error-message" : "error"}>Valid Domiance Required</p>
  </fieldset>
            <div className='button-container'>
                <button className='button-x2' type='submit' >Preview</button>
                <button className='button-x2' type='button'>Next</button>
            </div>
        </form>
    </div>
  </main>
  )
}

export default PlantStrain