import { View, Text, Dimensions, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
// import Tabs from './Tabs/Tabs'
import ProductsHeader from './ProductsHeader/ProductsHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import Styles from './style'
import ProductList from './ProductsList/ProductList'
import Title from '../../src/components/title'
import Tabs from '../../src/components/Tabs'
import Tab from '../../src/components/Tabs/Tab'
// import Tabs from './Tabs/Tab/Tab'
const ProductsHolder = ({ navigation }) => {
    const [data, setData] = useState([
        {
            id: 0,
            name: 'All',
            selected: false
        },
        {
            id: 1,
            name: 'Oil & Fluids',
            selected: false,
        },
        {
            id: 2,
            name: 'Lighting',
            selected: false
        },
        {
            id: 3,
            name: 'Brake System',
            selected: false
        },


    ])
    const { width, height } = new Dimensions.get('screen')
    return (
        <SafeAreaView style={Styles.ProductWholeScreen}>

            <ScrollView style={{ flex: 1 }}>
                <View>
                    <ProductsHeader />

                    <ProductList navigation={navigation} />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default ProductsHolder