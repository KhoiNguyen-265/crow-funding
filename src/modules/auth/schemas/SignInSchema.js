import * as yup from "yup";
export const SignInSchema = yup
    .object({
        email: yup
            .string()
            .email("Incorrect email.")
            .required("Please enter your email."),
        password: yup
            .string()
            .min(8, "Incorrect password.")
            .required("Please enter your password."),
    })
    .required();
