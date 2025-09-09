import * as Yup from 'yup';

export const addressSchema = Yup.object({
    street: Yup.string().min(3).max(25).required('Please enter your street'),
    apartment: Yup.string().min(3).max(25).required('Please enter your apartment'),
    houseno: Yup.string()
        .matches(/^\d+$/, "House number must be digits only")
        .min(2, "House number must have at least 2 digits")
        .required("Please enter your house no"),

    zipcode: Yup.string()
        .matches(/^\d{6}$/, "Zip code must be exactly 6 digits")
        .required("Please enter your zip code")
});