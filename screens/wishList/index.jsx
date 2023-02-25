import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import CategoryProduct from '../Products/ProductsList/CategoryProducts/CategoryProduct/CategoryProduct'
import { SafeAreaView } from 'react-native-safe-area-context'
import Gasoline1 from '../../assets/Products/Gasoline1.png'
import Gasoline2 from '../../assets/Products/Gasoline2.png'
import Gasoline3 from '../../assets/Products/Gasoline3.png'
import Tools from '../../assets/Products/Tools.png'
import LightBulb from '../../assets/Products/lightBulb.png'
const WishList = () => {
    const products = [
        {
            name: 'Protect Oil',
            ratingNumber: 1.5,
            price: 90,
            image: LightBulb
        },
        {
            name: 'Best Break',
            ratingNumber: 9.5,
            price: 8,
            image: Tools
        },
        {
            name: 'Regular Light',
            ratingNumber: 2.5,
            price: 6,
            image: Gasoline1
        },
        {
            name: 'H4 Halogen',
            ratingNumber: 3.5,
            price: 10,
            image: Gasoline2
        },
        {
            name: 'Hydrocloric acid',
            ratingNumber: 7.5,
            price: 15,
            image: Gasoline2
        },
        {
            name: 'Protect Oil',
            ratingNumber: 1.5,
            price: 90,
            image: LightBulb
        },
        {
            name: 'Best Break',
            ratingNumber: 9.5,
            price: 8,
            image: Tools
        },
        {
            name: 'Regular Light',
            ratingNumber: 2.5,
            price: 6,
            image: Gasoline1
        },
        {
            name: 'H4 Halogen',
            ratingNumber: 3.5,
            price: 10,
            image: Gasoline2
        },
        {
            name: 'Hydrocloric acid',
            ratingNumber: 7.5,
            price: 15,
            image: Gasoline2
        },
    ]
    return (
        <SafeAreaView style={style.mainHolder}>
            <ScrollView>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        products.map((data, index) => (
                            <CategoryProduct product={data} />
                        ))
                    }
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default WishList