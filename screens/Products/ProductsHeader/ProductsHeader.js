import { View, Text } from 'react-native'
import React from 'react'
import Tabs from '../Tabs/Tabs'
import Styles from './style'
const ProductsHeader = () => {
    return (
        <View style={Styles.productHeader}>
            <Text style={Styles.categoryText}>Categories</Text>
            <Tabs />
        </View>
    )
}

export default ProductsHeader