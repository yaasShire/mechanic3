import { View, Text } from 'react-native'
import React from 'react'
import styles from './style.js'
import ImageInfo from '../../ImageInfo/index.jsx'
import Fields from '../../fields/index.jsx'
import NextPayButton from '../../NextPButton/NextPayButton.jsx'
import Payment from '../../../../assets/Products/payment.png'
import { Formik } from 'formik'
import * as yup from 'yup'
const PersonalInfo = () => {
    const personalInfoForm = yup.object().shape({
        fullName: yup
            .string()
            .required('Please enter your full name'),
        phoneNumber: yup.string().min(8).required("Please enter your phone number"),
        email: yup
            .string()
            .email("Please enter valid email")
            .required('Email Address is Required'),

    })
    return (
        <View>
            <View>
                <ImageInfo image={Payment} />
            </View>
            <View style={styles.fieldsHolder}>
                <Formik
                    validationSchema={personalInfoForm}
                    initialValues={{ fullName: '', phoneNumer: '', email: '' }}
                >
                    {
                        ({ values, errors, handleBlur, handleChange, handleSubmit }) => (
                            <>
                                <Fields values={values} handleBlur={handleBlur} handleChange={handleChange} errors={errors} field1='fullName' field1PH='enter your full name' field2='phoneNumber' field2PH='3848594594' field3='email' field3PH='enter your email account' />
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

export default PersonalInfo