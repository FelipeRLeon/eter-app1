import React from 'react'
import { useContext } from "react";
import { useFormik } from 'formik';
import { growTypeSchema } from '../schemas/growTypeSchema';
import GrowerContext from "../context/GrowerContext";

const GrowType = () => {
    const { setStep } = useContext(GrowerContext);

    const persona = JSON.parse(localStorage.getItem("persona"));

    function onSubmit() {
        persona.license = license.value;
        persona.environment= environment.value;
        persona.grow_type = grow_type.value;
        console.log(persona);
        localStorage.setItem("persona", JSON.stringify(persona));
        setTimeout(() => {
            console.log("1 Segundo esperado")
          }, 1000);
        setStep("plantstrain");
        
        console.log(persona);
    }

    const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
            initialValues: {
                license: persona.license,
                environment: persona.environment,
                grow_type: persona.grow_type,
            },
            validationSchema: growTypeSchema,
            onSubmit
            
        });
  return (
    <main>
        <h3>Grow Type</h3>
        <div className="card">
            <form onSubmit={handleSubmit} autoComplete='off' noValidate>
            <fieldset>
                <label htmlFor="licence">Tipo de licencia</label>
                <select 
                    id="license"
                    value={values.license}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    className={errors.license ? "error-forgot-input" : ""}
                    placeholder={persona.license}
                    >
                    <option value="">Seleccione el tipo de licencia</option>
                    <option value="seeds">Produccion de semillas</option>
                    <option value="medicinal">Uso medicinal</option>
                    <option value="recreativo">Uso recreativo</option>
                    <option value="cientific">Uso cientifico</option>
                    <option value="autocultivo">Autocultivo</option>
                </select>
                <p className={errors.license ? "error-message" : "error"}>Valid growing licence Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="environment">Entorno de cultivo</label>
                <select 
                    id="environment"
                    value={values.environment}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    className={errors.environment ? "error-forgot-input" : ""}
                    placeholder={persona.environment}
                    >
                    <option value="">Seleccione el entorno de cultivo</option>
                    <option value="indoor">Indoor</option>
                    <option value="outdoor">Outdoor</option>
                </select>
                <p className={errors.environment ? "error-message" : "error"}>Valid growing environment Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="grow_type">Tipo de cultivo</label>
                <select 
                    id="grow_type"
                    value={values.grow_type}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    className={errors.grow_type ? "error-forgot-input" : ""}>
                        placeholder={persona.grow_type}
                    <option value="">Seleccione el tipo de cultivo</option>
                    <option value="soil">Sustrato</option>
                    <option value="hydoponic">Hidroponia</option>
                    <option value="aeroponic">Aeroponia</option>
                    <option value="aquaponic">Acuaponia</option>
                </select>
                <p className={errors.grow_type ? "error-message" : "error"}>Valid grow type Required</p>
            </fieldset>
            <div className='button-container'>
                <button className='button-x2'type='button' onClick={
                    () => {
                       setStep("grower");
                    }
                }>Preview</button>
                <button className='button-x2' type='submit' 
                >Next</button>
            </div>
            </form>
        </div>
    </main>
  )
}

export default GrowType;