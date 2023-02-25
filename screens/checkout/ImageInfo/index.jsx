import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles.js'
import Payment from '../../../assets/Products/payment.png'
const ImageInfo = ({ image }) => {
    return (
        <View>
            <Image style={styles.image} source={image} />
            <Text style={styles.textDescription}>Please provide with us personal information just your name and phone number if you have email its good to provide it as well</Text>
        </View>
    )
}

export default ImageInfo