import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { useFormik } from 'formik';
import { loginSchema } from '../schemas';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const initialValues = {
    email: '',
    password: ''
}

const Login = () => {

    const userContext = useContext(UserContext);
    const userDetails = userContext.user;
    const navigate = useNavigate();
    // console.log('userDetails', userDetails);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (values, action) => {
            if(userDetails.email === values.email && userDetails.password === values.password) {
                console.log('login successful');
                navigate('/home')
            }
            else {
                console.log('login failed');
            }
            console.log('values', values);
            action.resetForm();
        }
    });

    return (
        <div className='h-screen flex items-center justify-center bg-gray-200 px-4'>
            <div className='bg-white p-10 rounded-2xl shadow-lg shadow-slate-600 w-full max-w-md ring ring-slate-400'>

                {/* Logo + Title */}
                <div className='flex items-center justify-center gap-2 mb-4'>
                    <img src={logo} alt="logo" className='h-[80px] rounded-md object-cover' />
                </div>

                {/* Form Title */}
                <h2 className='text-2xl font-semibold mb-6 text-center'>Login to your account</h2>

                {/* Login Form */}
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className='block text-md font-medium text-gray-700 mb-2'>
                            Email
                        </label>
                        <input
                            type="email"
                            autoComplete='off'
                            name="email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-0 focus:ring-1 focus:ring-orange-600'
                            placeholder="karan@example.com"
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
                        <label htmlFor="password" className='block text-md font-medium text-gray-700 mb-2'>
                            Password
                        </label>
                        <input
                            type="password"
                            autoComplete='off'
                            name="password"
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-0 focus:ring-1 focus:ring-orange-600'
                            placeholder="••••••••"
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

                    <button
                        type="submit"
                        className='mt-4 bg-orange-600 text-white py-2 rounded-md font-semibold cursor-pointer'
                    >
                        Login
                    </button>
                </form>

                {/* Optional Links */}
                <p className='text-md text-center text-gray-500 mt-6'>
                    Don't have an account? <Link to='/register' className='text-red-600 underline'>register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
