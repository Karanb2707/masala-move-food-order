import * as Yup from 'yup';

// Address Form schema
export const addressSchema = Yup.object({
    street: Yup.string().min(3).max(15).required('Please enter your street'),
    apartment: Yup.string().min(3).max(15).required('Please enter your apartment'),
    houseno: Yup.string()
        .matches(/^\d+$/, "House number must be digits only")
        .min(2, "House number must have at least 2 digits")
        .required("Please enter your house no"),

    zipcode: Yup.string()
        .matches(/^\d{6}$/, "Zip code must be exactly 6 digits")
        .required("Please enter your zip code")
});

// Register form schema
export const registerSchema = Yup.object({
    name: Yup.string().min(3).max(25).required('Please enter your name'),
    email: Yup.string().email().required('Please enter your email'),
    password: Yup.string().min(6).required('Please enter your password'),
    confirm_password: Yup.string().required('Please enter your confirm password').oneOf([Yup.ref('password'), null], 'Password must match')
});

// Login form schema
export const loginSchema = Yup.object({
    email: Yup.string().email().required('Please enter your email'),
    password: Yup.string().required('Please enter your password')
})