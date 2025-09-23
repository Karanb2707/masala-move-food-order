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
            toast.success("User created successfully ✅");
            console.log('values', values);
            action.resetForm();
        }
    });

    return (
        <div className="h-screen flex items-center justify-center bg-gray-200">
            <div className="flex bg-white shadow-lg mx-4 shadow-slate-600 rounded-lg overflow-hidden w-full max-w-4xl ring ring-slate-400">

                {/* Form section */}
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-2xl text-center font-semibold mb-5 text-gray-800">Register to create your account</h2>
                    <form className="space-y-3 px-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='name' className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="name"
                                autoComplete='off'
                                name='name'
                                id='name'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='eg., Karan'
                                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-0 focus:ring-1 focus:ring-orange-600"
                            />
                            {
                                errors.name && touched.name
                                    ?
                                    <p className='text-sm text-red-600 mt-1'>
                                        {errors.name}
                                    </p>
                                    :
                                    null
                            }
                        </div>
                        <div>
                            <label htmlFor='email' className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                autoComplete='off'
                                name='email'
                                id='email'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='eg., karan@example.com'
                                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-0 focus:ring-1 focus:ring-orange-600"
                            />
                            {
                                errors.email && touched.email
                                    ?
                                    <p className='text-sm text-red-600 mt-1'>
                                        {errors.email}
                                    </p>
                                    :
                                    null
                            }
                        </div>
                        <div>
                            <label htmlFor='password' className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                autoComplete='off'
                                name='password'
                                id='password'
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='At least 6 characters'
                                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-0 focus:ring-1 focus:ring-orange-600"
                            />
                            {
                                errors.password && touched.password
                                    ?
                                    <p className='text-sm text-red-600 mt-1'>
                                        {errors.password}
                                    </p>
                                    :
                                    null
                            }
                        </div>
                        <div>
                            <label htmlFor='confirm_password' className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                autoComplete='off'
                                name='confirm_password'
                                id='confirm_password'
                                value={values.confirm_password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Same as Password'
                                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-0 focus:ring-1 focus:ring-orange-600"
                            />
                            {
                                errors.confirm_password && touched.confirm_password
                                    ?
                                    <p className='text-sm text-red-600 mt-1'>
                                        {errors.confirm_password}
                                    </p>
                                    :
                                    null
                            }
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-orange-600 text-white font-semibold py-2 px-4 mt-2 rounded-md cursor-pointer"
                        >
                            Register
                        </button>
                    </form>

                    <p className='text-md text-center text-gray-500 mt-4'>
                        Don't have an account? <Link to='/login' className='text-red-600 underline'>login</Link>
                    </p>
                </div>

                {/* Image Section - Now on the Right */}
                <div className="w-1/2 hidden md:block">
                    <img
                        src={registerImg}
                        alt="Register"
                        className="w-full h-full object-cover rounded-r-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Register;
