import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './stye'
import Ionicons from '@expo/vector-icons/Ionicons'

const Title = ({ label, optionTitle = "See All", onClickOption, onBackIcon = 'll', navigation = 'navigation' }) => {
    return (
        <View style={style.titleContainer}>
            <Text style={style.catNameSeAll}>{label}</Text>
            {!!onClickOption && <TouchableOpacity onPress={() => navigation.navigate('categories')}><Text>{optionTitle}</Text></TouchableOpacity>}
        </View>
    )
}

export default Title