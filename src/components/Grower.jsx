import React from 'react'
import { useContext, useState } from "react";
import { useFormik } from 'formik';
import { growerSchema } from '../schemas/growerSchema';

import GrowerContext from "../context/GrowerContext";

const Grower = () => {
    const { setStep } = useContext(GrowerContext);

    const onSubmit = () => {
        console.log("Okok");
    }

    const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            grower_name: "",
            grower_team: "",
            grower_city: "",
        },
        validationSchema: growerSchema,
        onSubmit
        
    });

  return (
    <main>
    <h3>Grower Data</h3>
    <div className='card'>
        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
            <fieldset>
                <label htmlFor="grower_name">Grower</label>
                <input 
                    type="text" 
                    id="grower_name" 
                    autoFocus 
                    required
                    value={values.grower_name}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    className={errors.grower_name ? "error-forgot-input" : ""}
                    />
                <p className={errors.grower_name ? "error-message" : "error"}>Valid Name Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="grower_team">Team</label>
                <input 
                    type="text" 
                    id="grower_team"
                    required
                    value={values.grower_team}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    className={errors.grower_team ? "error-forgot-input" : ""}
                    />
                <p className={errors.grower_team ? "error-message" : "error"}>Valid Name Required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="grower_city">City</label>
                <input 
                    type="text" 
                    id="grower_city"
                    required
                    value={values.grower_city}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    className={errors.grower_city ? "error-forgot-input" : ""}
                    />
                <p className={errors.grower_city ? "error-message" : "error"}>Valid Name Required</p>
            </fieldset>
            <div className='button-container'>
                <button type='submit' 
                >Next</button>
            </div>
        </form>
    </div>
  </main>
  )
}

export default Grower;