import * as yup from "yup";
export const SignUpSchema = yup
    .object({
        name: yup.string().required("Please enter your full name."),
        email: yup
            .string()
            .email("Please enter a valid email address.")
            .required("Please enter your email."),
        password: yup
            .string()
            .min(8, "Password must be at least 8 characters.")
            .required("Please enter your password."),
        terms: yup
            .boolean()
            .oneOf(
                [true],
                "You must accept the Terms of Use and Privacy Policy."
            ),
    })
    .required();
