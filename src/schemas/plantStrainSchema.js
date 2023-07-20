import React from 'react'
import * as Yup from 'yup';




export const plantStrainSchema = Yup.object().shape({
    plant_strain: Yup.string().required("Ingrese la genetica de la planta"),
    plant_seedBank: Yup.string().required("Ingrese la genetica de la planta"),
    plant_origin: Yup.string().required("Ingrese la genetica de la planta"),
    plant_dominance: Yup.string()
        .oneOf(["indica", "sativa", "hybrid"])
        .required("Seleccione dominancia de la planta"),

});