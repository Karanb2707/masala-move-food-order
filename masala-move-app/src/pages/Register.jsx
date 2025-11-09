import React, { useContext } from 'react';
import registerImg from '../assets/images/register.png';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { registerSchema } from '../schemas';
import { UserContext } from '../context/UserContext';
import toast from "react-hot-toast";

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirm_password: ''
}

const Register = () => {
    const userContext = useContext(UserContext);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: registerSchema,
        onSubmit: (values, action) => {
            userContext.setUser(values);
            toast.success("Registered successfully ✅");
            console.log('values', values);
            action.resetForm();
        }
    });

    const inputFields = [
        { name: 'name', type: 'text', label: 'Name', placeholder: 'eg., Karan' },
        { name: 'email', type: 'email', label: 'Email', placeholder: 'eg., karan@example.com' },
        { name: 'password', type: 'password', label: 'Password', placeholder: 'At least 6 characters' },
        { name: 'confirm_password', type: 'password', label: 'Confirm Password', placeholder: 'Same as Password' }
    ];

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="flex bg-white shadow-2xl mx-4 rounded-xl overflow-hidden w-full max-w-4xl">

                {/* Form section */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                    <div className="mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Create Account</h2>
                        <p className="text-sm text-gray-600">Register to get started</p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {inputFields.map((field) => (
                            <div key={field.name}>
                                <label htmlFor={field.name} className="block text-sm font-semibold text-gray-700 mb-1.5">
                                    {field.label}
                                </label>
                                <input
                                    type={field.type}
                                    autoComplete='off'
                                    name={field.name}
                                    id={field.name}
                                    value={values[field.name]}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder={field.placeholder}
                                    className={`w-full border ${errors[field.name] && touched[field.name] ? 'border-red-400 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'} rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 text-sm`}
                                />
                                {errors[field.name] && touched[field.name] && (
                                    <p className='text-xs text-red-600 mt-1 flex items-center gap-1'>
                                        <span>⚠</span> {errors[field.name]}
                                    </p>
                                )}
                            </div>
                        ))}

                        <button
                            type="submit"
                            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 mt-6"
                        >
                            Register
                        </button>
                    </form>

                    <p className='text-sm text-center text-gray-600 mt-5'>
                        Already have an account? <Link to='/login' className='text-orange-600 font-semibold hover:underline transition-all'>Login</Link>
                    </p>
                </div>

                {/* Image Section */}
                <div className="w-1/2 hidden md:block relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent z-10"></div>
                    <img
                        src={registerImg}
                        alt="Register"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Register;