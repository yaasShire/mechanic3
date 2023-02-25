import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import Title from '../../src/components/title'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoryProduct from '../Products/ProductsList/CategoryProducts/CategoryProduct/CategoryProduct'
import Gasolin1 from '../../assets/Products/Gasoline1.png'
import Gasolin2 from '../../assets/Products/Gasoline2.png'
import Gasolin3 from '../../assets/Products/Gasoline3.png'
import LightBulb from '../../assets/Products/lightBulb.png'

const Categories = ({ navigation }) => {
    const Brushing = [
        {
            name: 'Regular Light',
            image: LightBulb,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Brushing',
        },
        {
            name: 'Regular Light',
            image: Gasolin2,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Brushing',
        },
        {
            name: 'Regular Light',
            image: Gasolin2,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Brushing',
        },
        {
            name: 'Regular Light',
            image: Gasolin2,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Brushing',
        },
        {
            name: 'Regular Light',
            image: Gasolin2,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Brushing',
        },
        {
            name: 'Regular Light',
            image: Gasolin2,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Brushing',
        },
        {
            name: 'Regular Light',
            image: Gasolin2,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Brushing',
        },
        {
            name: 'Regular Light',
            image: Gasolin2,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Brushing',
        },
        {
            name: 'Regular Light',
            image: Gasolin2,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Brushing',
        },
        {
            name: 'Regular Light',
            image: Gasolin2,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Brushing',
        },
        {
            name: 'Regular Light',
            image: Gasolin2,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Brushing',
        },
        {
            name: 'Regular Light',
            image: Gasolin2,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Brushing',
        },
        {
            name: 'Regular Light',
            image: Gasolin2,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Brushing',
        },
        {
            name: 'Regular Light',
            image: Gasolin2,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Brushing',
        },
        {
            name: 'Regular Light',
            image: Gasolin2,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Brushing',
        },
        {
            name: 'Regular Light',
            image: Gasolin2,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Brushing',
        },
        {
            name: 'Regular Light',
            image: Gasolin2,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Brushing',
        },
        {
            name: 'Regular Light',
            image: Gasolin2,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Brushing',
        },
        {
            name: 'Regular Light',
            image: Gasolin2,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Brushing',
        },
        {
            name: 'Regular Light',
            image: Gasolin2,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Brushing',
        },
    ]
    return (
        <SafeAreaView style={styles.mainCategoryHolder}>
            <Title label={'Oil & Fluids'} navigation={navigation} />

            <ScrollView>
                <View style={styles.categoriesHolder}>
                    {
                        Brushing.map((data, index) => (
                            <CategoryProduct key={index} product={data} navigation={navigation} />
                        ))
                    }
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Categories