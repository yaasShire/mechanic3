import { View, Text } from 'react-native'
import React from 'react'
import styles from './style.js'
import ImageInfo from '../../ImageInfo/index.jsx'
import Fields from '../../fields/index.jsx'
import NextPayButton from '../../NextPButton/NextPayButton.jsx'
import Delivery from '../../../../assets/Products/Delivery.png'
import { Formik } from 'formik'
import * as yup from 'yup'
const DeliverAddress = () => {
    const deliveryForm = yup.object().shape({
        country: yup
            .string()
            .required('Please enter your country'),
        city: yup.string().min(8).required("Please enter your city name"),
        village: yup
            .string()
            .required("Please enter your village"),
        addressDescription: yup.string().min(10).required('Please enter your address description')

    })
    return (
        <View>
            <View>
                <ImageInfo image={Delivery} />
            </View>
            <View style={styles.fieldsHolder}>
                <Formik
                    validationSchema={deliveryForm}
                    initialValues={{ country: '', city: '', village: '', addressDescription: '' }}
                >
                    {
                        ({ errors, handleBlur, handleChange, values, handleSubmit }) => (
                            <>
                                <Fields field1='country' field1PH='Somalia' field2='city' field2PH='Select your city' field3='village' field3PH='enter your village' field4='addressDescription' field4PH='Type address more detail'
                                    errors={errors} handleBlur={handleBlur} handleChange={handleChange} values={values}
                                />
                                <View style={styles.btnHolder}>
                                    <View>
                                        <NextPayButton title='Next' handleSubmit={handleSubmit} />
                                    </View>
                                </View>
                            </>
                        )
                    }
                </Formik>
            </View>
        </View>
    )
}

export default DeliverAddress