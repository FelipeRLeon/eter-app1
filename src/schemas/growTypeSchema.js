import React from 'react'
import * as Yup from 'yup';




export const growTypeSchema = Yup.object().shape({
    license: Yup.string()
        .oneOf(["seeds", "medicinal", "recreativo", "cientific", "autocultivo"])
        .required("Seleccione licencia de cultivo"),
    environment: Yup.string()
        .oneOf(["indoor", "outdoor"])
        .required("Seleccione entorno de cultivo"),
    grow_type: Yup.string()
        .oneOf(["soil", "hydoponic", "aeroponic", "aquaponic"])
        .required("Seleccione tipo de cultivo"),

});