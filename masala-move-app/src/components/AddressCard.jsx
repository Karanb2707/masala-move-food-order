import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { addressSchema } from '../schemas';
import { PINCOD_API } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addAddress } from '../redux/slices/addressSlice';

const initialValues = {
    street: '',
    apartment: '',
    houseno: '',
    zipcode: '',
    
}

const AddressCard = () => {

    const dispatch = useDispatch();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: addressSchema,
        onSubmit: (values, action) => {
            const data = { ...values, city: pincodeData.District, state: pincodeData.State }
            console.log('Address data', data);
            dispatch(addAddress(data));
            action.resetForm();
            setPincodeData([]);
        }
    })

    // Fetching Pincode Details
    const [pincodeData, setPincodeData] = useState([]);
    // console.log('Pincode Data', pincodeData);

    const fetchPincodeData = async () => {
        if (!values.zipcode || values.zipcode.length !== 6) return;
        try {
            const url = `${PINCOD_API}/${values.zipcode}`;
            const res = await fetch(url);
            const jsonData = await res.json();

            if (jsonData[0].Status === "Success") {
                setPincodeData(jsonData[0].PostOffice[0]);
            } else {
                setPincodeData([]);
            }
        } catch (err) {
            console.error("Error fetching pincode data:", err);
            setPincodeData([]);
        }
    };

    useEffect(() => {
        fetchPincodeData();
    }, [values.zipcode]);

    return (
        <div className='flex items-center justify-center py-12'>
            <div className='flex flex-col items-center p-4 border rounded-md gap-2'>
                <h1 className='text-center text-2xl font-semibold'>
                    Address Details
                </h1>
                <form className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="street" className='block text-md font-medium text-gray-700 mb-2'>
                            Street
                        </label>
                        <input
                            type="text"
                            autoComplete='off'
                            name="street"
                            id="street"
                            value={values.street}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent transition'
                            placeholder="Street"
                        />
                        {
                            errors.street && touched.street
                                ?
                                <p className='text-sm text-red-500 mt-1'>
                                    {errors.street}
                                </p>
                                :
                                null
                        }
                    </div>
                    <div>
                        <label htmlFor="apartment" className='block text-md font-medium text-gray-700 mb-2'>
                            Apartment
                        </label>
                        <input
                            type="text"
                            autoComplete='off'
                            name="apartment"
                            id="apartment"
                            value={values.apartment}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent transition'
                            placeholder="Apartment"
                        />
                        {
                            errors.apartment && touched.apartment
                                ?
                                <p className='text-sm text-red-500 mt-1'>
                                    {errors.apartment}
                                </p>
                                :
                                null
                        }
                    </div>
                    <div>
                        <label htmlFor="houseno" className='block text-md font-medium text-gray-700 mb-2'>
                            House No
                        </label>
                        <input
                            type="text"
                            autoComplete='off'
                            name="houseno"
                            id="houseno"
                            value={values.houseno}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent transition'
                            placeholder="House No"
                        />
                        {
                            errors.houseno && touched.houseno
                                ?
                                <p className='text-sm text-red-500 mt-1'>
                                    {errors.houseno}
                                </p>
                                :
                                null
                        }
                    </div>
                    <div>
                        <label htmlFor="zipcode" className='block text-md font-medium text-gray-700 mb-2'>
                            Zip Code
                        </label>
                        <input
                            type="text"
                            autoComplete='off'
                            name="zipcode"
                            id="zipcode"
                            value={values.zipcode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent transition'
                            placeholder="Zip Code"
                        />
                        {
                            errors.zipcode && touched.zipcode
                                ?
                                <p className='text-sm text-red-500 mt-1'>
                                    {errors.zipcode}
                                </p>
                                :
                                null
                        }
                    </div>
                    {
                        pincodeData.length === 0 && values?.zipcode
                            ?
                            <div className='col-span-2 text-center text-gray-600 mt-2'>
                                Loading...
                            </div>
                            :
                            null
                    }
                    {
                        pincodeData?.District && (
                            <div>
                                <label className="block text-md font-medium text-gray-700 mb-2">
                                    City
                                </label>
                                <input
                                    className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent transition"
                                    value={pincodeData.District}
                                    readOnly
                                />
                            </div>
                        )
                    }

                    {
                        pincodeData?.State && (
                            <div>
                                <label className="block text-md font-medium text-gray-700 mb-2">
                                    State
                                </label>
                                <input
                                    className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-transparent transition"
                                    value={pincodeData.State}
                                    readOnly
                                />
                            </div>
                        )
                    }

                    <button
                        type='submit'
                        disabled={!pincodeData.District || !pincodeData.State}
                        className='w-full py-2 mt-2 bg-orange-600 text-white font-semibold rounded-md ring ring-orange-700 cursor-pointer'
                    >
                        Place Order
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddressCard