import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import { Ionicons } from '@expo/vector-icons'
import PrivacyImage from '../../assets/Products/privacyPoliciy.png'
const Privacy = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageHolder}>
                <Image source={PrivacyImage} style={styles.image} />
            </View>
            <View style={styles.welcomTextHolder}>
                <Text style={styles.welcomText}>How can we help you?</Text>
            </View>
        </SafeAreaView>
    )
}

export default Privacy