import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import ImageInfo from '../../ImageInfo'
import Payment2 from '../../../../assets/Products/payment2.png'
import styles from './style.js'
import EVCLOGO from '../../../../assets/Products/evc_logo.png'
import LOGOEVC from '../../../../assets/Products/evc3.png'
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'
import PayWith from './cardPayment'
import Jeep from '../../../../assets/Products/jeep.png'
import Edahab from '../../../../assets/Products/edahabpng.png'
import NextPayButton from '../../NextPButton/NextPayButton'
const PaymentMethod = () => {
    const [selectedIndex, setSelectIndex] = useState(-1);
    return (
        <View>
            <ImageInfo image={Payment2} />
            <View>
                <Text style={styles.payWithText}>Pay with</Text>
                {
                    paymentMethods.map((method, index) =>
                        <PayWith key={index}
                            logo={method.logo}
                            title={method.title}
                            title2={"(" + method.subtitle + ")"}
                            placeHolder={method.placeHolder}
                            selectedIndex={selectedIndex}
                            index={index}
                            onPress={(index) => setSelectIndex(index)}


                        />)

                }

                <NextPayButton title="Next" />
            </View>
        </View>
    )
}

const method = (logo, title, subtitle, placeHolder) => ({ logo, title, subtitle, placeHolder })

const paymentMethods = [
    method(EVCLOGO, "EVC", "Hormuud", "61XXXXXXXX"),
    method(Jeep, "Jeeb", "Somnet", "68XXXXXXXX"),
    method(Edahab, "E-dahab", "Somtel", "62XXXXXXXX"),
]
export default PaymentMethod