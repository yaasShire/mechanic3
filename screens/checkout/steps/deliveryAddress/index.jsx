import { View, Text } from 'react-native'
import React from 'react'
import styles from './style.js'
import ImageInfo from '../../ImageInfo/index.jsx'
import Fields from '../../fields/index.jsx'
import NextPayButton from '../../NextPButton/NextPayButton.jsx'
import Delivery from '../../../../assets/Products/Delivery.png'
const DeliverAddress = () => {
    return (
        <View>
            <View>
                <ImageInfo image={Delivery} />
            </View>
            <View style={styles.fieldsHolder}>
                <Fields field1='Country' field1PH='Somalia' field2='City' field2PH='Select your city' field3='Village' field3PH='enter your village' field4='Address description (optional)' field4PH='Type address more detail' />
            </View>
            <View style={styles.btnHolder}>
                <View>
                    <NextPayButton title='Next' />
                </View>
            </View>
        </View>
    )
}

export default DeliverAddress