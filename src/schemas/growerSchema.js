
import * as Yup from 'yup';




export const growerSchema = Yup.object().shape({
    grower_name: Yup.string()
        .required("Seleccione licencia de cultivo"),
    grower_team: Yup.string()
        .required("Seleccione entorno de cultivo"),
    grower_city: Yup.string()
        .required("Seleccione tipo de cultivo"),

});