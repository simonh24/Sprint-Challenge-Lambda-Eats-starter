import * as yup from "yup";

const formSchema = yup.object().shape({
    username: yup.string()
        .trim()
        .min(2, "Your name must be at least 2 characters.")
        .required("The name is a required field."),
    size: yup.string().required("The size is a required field."),
    sauce: yup.string().required("The sauce is a required field."),
    specialInstructions: yup.string().trim()
})

export default formSchema