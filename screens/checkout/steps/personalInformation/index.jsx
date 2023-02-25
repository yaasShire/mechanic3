import { View, Text } from 'react-native'
import React from 'react'
import styles from './style.js'
import ImageInfo from '../../ImageInfo/index.jsx'
import Fields from '../../fields/index.jsx'
import NextPayButton from '../../NextPButton/NextPayButton.jsx'
import Payment from '../../../../assets/Products/payment.png'

const PersonalInfo = () => {
    return (
        <View>
            <View>
                <ImageInfo image={Payment} />
            </View>
            <View style={styles.fieldsHolder}>
                <Fields field1='Full Name' field1PH='enter your full name' field2='Phone Number' field2PH='3848594594' field3='Email (optional)' field3PH='enter your email account' />
            </View>
            <View style={styles.btnHolder}>
                <View>
                    <NextPayButton title='Next' />
                </View>
            </View>
        </View>
    )
}

export default PersonalInfo