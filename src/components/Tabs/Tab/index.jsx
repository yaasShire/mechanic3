import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from './Style'
const Tab = ({ data, showBlackColor }) => {
    return (
        <TouchableOpacity onPress={() => showBlackColor(data.id)} style={[Styles.tab, { backgroundColor: data.selected == true ? '#000000' : '#FFFFFF', }]}>
            <Text style={[Styles.tabText, { color: data.selected == true ? '#FFFFFF' : 'black' }]}>{data.name}</Text>
        </TouchableOpacity>
    )
}

export default Tab