import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import StepIndicator from 'expo-step-indicator'
import { SafeAreaView } from 'react-native-safe-area-context'
import Gasoline1 from '../../assets/Products/Gasoline1.png'
import Payment from '../../assets/Products/payment.png'
import styles from './style.js'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NextPayButton from './NextPButton/NextPayButton'
import ImageInfo from './ImageInfo'
import Fields from './fields'
import PersonalInfo from './steps/personalInformation'
import DeliverAddress from './steps/deliveryAddress'
import PaymentMethod from './steps/paymentMethod'
const Checkout = () => {
    const labels = ["Cart", "Delivery Address", "Order Summary", "Payment Method"]
    const [currentPosition, setCurrentPosition] = useState(0)
    const customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize: 30,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#000000',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#000000',
        stepStrokeUnFinishedColor: '#fff',
        separatorFinishedColor: '#fe7013',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#000000',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#000',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#fff',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: '#000'
    }
    const onPageChange = (position) => {
        setCurrentPosition(position)
    }
    return (
        <SafeAreaView style={styles.mainHolder}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StepIndicator
                    customStyles={customStyles}
                    currentPosition={currentPosition}
                    labels={labels}
                    onPress={onPageChange}

                />
                {
                    currentPosition == 0 ? <PersonalInfo /> : currentPosition == 1 ? <DeliverAddress /> : currentPosition == 2 ? <PaymentMethod /> : <PersonalInfo />

                }


            </ScrollView>

        </SafeAreaView>
    )
}

export default Checkout