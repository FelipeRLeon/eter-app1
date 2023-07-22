import * as Yup from 'yup';

export const budsSchema = Yup.object().shape({
    buds_wash: Yup.string()
        .oneOf(["yes", "no"])
        .required("Seleccione nutricion de la planta"),
    buds_flavor: Yup.string().required("Ingrese sabor de la planta"),
    buds_smell: Yup.string().required("Ingrese aroma de la planta"),
    buds_floration: Yup.number().required("Ingrese tiempo de flora"),
    buds_production: Yup.number().required("Ingrese produccion de la planta"),

});