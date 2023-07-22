import * as Yup from 'yup';

export const nutrientsSchema = Yup.object().shape({
    nutrients_type: Yup.string()
        .oneOf(["organic", "mineral", "mix"])
        .required("Seleccione nutricion de la planta"),
    nutrients_brand: Yup.string().required("Ingrese la marca de la planta"),
    nutrients_fungi: Yup.string().required("Ingrese la fungicida de la planta"),
    nutrients_insect: Yup.string().required("Ingrese la insecticida de la planta"),

});