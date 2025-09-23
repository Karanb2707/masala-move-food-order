import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { addressSchema } from '../schemas';
import { PINCOD_API } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addAddress } from '../redux/slices/addressSlice';
import toast from "react-hot-toast";

const initialValues = {
    street: '',
    apartment: '',
    houseno: '',
    zipcode: '',
}

const AddressCard = ({setShowAddressForm}) => {
    const dispatch = useDispatch();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: addressSchema,
        onSubmit: (values, action) => {
            const data = { ...values, city: pincodeData.District, state: pincodeData.State }
            console.log('Address data', data);
            dispatch(addAddress(data));
            toast.success("Address Added 🏠");
            action.resetForm();
            setPincodeData([]);
            setShowAddressForm(false);
        }
    })

    // Fetching Pincode Details
    const [pincodeData, setPincodeData] = useState([]);

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
        <div className='w-full py-4'>
            <div className='bg-white border border-gray-200 rounded-lg shadow-sm p-6'>
                <h1 className='text-center text-xl font-semibold text-gray-900 mb-6'>
                    Address Details
                </h1>
                
                <div className='space-y-5'>
                    <div>
                        <label htmlFor="street" className='block text-sm font-medium text-gray-700 mb-2'>
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
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200'
                            placeholder="Enter your street address"
                        />
                        {errors.street && touched.street && (
                            <p className='text-sm text-red-600 mt-1'>
                                {errors.street}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="apartment" className='block text-sm font-medium text-gray-700 mb-2'>
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
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200'
                            placeholder="Apartment, suite, etc."
                        />
                        {errors.apartment && touched.apartment && (
                            <p className='text-sm text-red-600 mt-1'>
                                {errors.apartment}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="houseno" className='block text-sm font-medium text-gray-700 mb-2'>
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
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200'
                            placeholder="House number"
                        />
                        {errors.houseno && touched.houseno && (
                            <p className='text-sm text-red-600 mt-1'>
                                {errors.houseno}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="zipcode" className='block text-sm font-medium text-gray-700 mb-2'>
                            PIN Code
                        </label>
                        <input
                            type="text"
                            autoComplete='off'
                            name="zipcode"
                            id="zipcode"
                            value={values.zipcode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            maxLength="6"
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200'
                            placeholder="6-digit PIN code"
                        />
                        {errors.zipcode && touched.zipcode && (
                            <p className='text-sm text-red-600 mt-1'>
                                {errors.zipcode}
                            </p>
                        )}
                    </div>

                    {pincodeData.length === 0 && values?.zipcode && (
                        <div className='text-center text-gray-500 py-3'>
                            <div className='inline-flex items-center gap-2'>
                                <div className='w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin'></div>
                                Loading location...
                            </div>
                        </div>
                    )}

                    {pincodeData?.District && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                City
                            </label>
                            <input
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed"
                                value={pincodeData.District}
                                readOnly
                            />
                        </div>
                    )}

                    {pincodeData?.State && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                State
                            </label>
                            <input
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed"
                                value={pincodeData.State}
                                readOnly
                            />
                        </div>
                    )}

                    <button
                        type='button'
                        onClick={handleSubmit}
                        disabled={!pincodeData.District || !pincodeData.State}
                        className={`
                            w-full py-3 px-6 mt-6 font-semibold rounded-lg transition-all duration-200
                            ${(!pincodeData.District || !pincodeData.State) 
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                : 'bg-orange-600 hover:bg-orange-700 text-white shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]'
                            }
                        `}
                    >
                        Add Address
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddressCard