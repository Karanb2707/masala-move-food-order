import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { useFormik } from 'formik';
import { loginSchema } from '../schemas';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import toast from "react-hot-toast";

const initialValues = {
    email: '',
    password: ''
}

const Login = () => {
    const userContext = useContext(UserContext);
    const userDetails = userContext.user;
    const navigate = useNavigate();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (values, action) => {
            if (userDetails.email === values.email && userDetails.password === values.password) {
                toast.success("Login Successful 🎉");
                navigate('/')
            }
            else {
                toast.error("Invalid email or password ❌");
            }
            console.log('values', values);
            action.resetForm();
        }
    });

    const inputFields = [
        { name: 'email', type: 'email', label: 'Email', placeholder: 'karan@example.com' },
        { name: 'password', type: 'password', label: 'Password', placeholder: '••••••••' }
    ];

    return (
        <div className='h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4'>
            <div className='bg-white p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-md'>

                {/* Logo + Title */}
                <div className='flex items-center justify-center mb-6'>
                    <img src={logo} alt="logo" className='h-20 rounded-xl object-cover' />
                </div>

                {/* Form Title */}
                <div className='mb-8 text-center'>
                    <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-1'>Welcome Back</h2>
                    <p className='text-sm text-gray-600'>Login to continue your journey</p>
                </div>

                {/* Login Form */}
                <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                    {inputFields.map((field) => (
                        <div key={field.name}>
                            <label htmlFor={field.name} className='block text-sm font-semibold text-gray-700 mb-1.5'>
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
                                className={`w-full px-4 py-2.5 border ${errors[field.name] && touched[field.name] ? 'border-red-400 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'} rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 text-sm`}
                                placeholder={field.placeholder}
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
                        className='mt-2 bg-orange-600 hover:bg-orange-700 text-white py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200'
                    >
                        Login
                    </button>
                </form>

                {/* Optional Links */}
                <p className='text-sm text-center text-gray-600 mt-6'>
                    Don't have an account? <Link to='/register' className='text-orange-600 font-semibold hover:underline transition-all'>Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;