import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CategoryProducts from './CategoryProducts/CategoryProducts'
import Styles from './style'
import CategoryProduct from './CategoryProducts/CategoryProduct/CategoryProduct'
import Gasolin1 from '../../../assets/Products/Gasoline1.png'
import Gasolin2 from '../../../assets/Products/Gasoline2.png'
import Gasolin3 from '../../../assets/Products/Gasoline3.png'
import Tools from '../../../assets/Products/Tools.png'
import LightBulb from '../../../assets/Products/lightBulb.png'
const ProductList = ({ navigation }) => {
    const [category, setCategory] = useState('All')
    const CategoriesData = [
        {
            name: 'Protect Oil',
            image: Gasolin1,
            price: 3.5,
            ratingNumber: 4.2,
            wishList: false,
            categoryN: 'Oil & Fluids',
        },
        {
            name: 'Best Brake',
            image: Gasolin2,
            price: 6.5,
            ratingNumber: 3.2,
            wishList: false,
            categoryN: 'Oil & Fluids',
        },
        {
            name: 'Shell Rotella',
            image: Gasolin3,
            price: 9.5,
            ratingNumber: 2.2,
            wishList: false,
            categoryN: 'Lighting',
        },

        {
            name: 'Car Equipment',
            image: Tools,
            price: 7.2,
            ratingNumber: 3.2,
            wishList: false,
            categoryN: 'Lighting',
        },
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
            categoryN: 'Vacuuming',
        },
        {
            name: 'Regular Light',
            image: Gasolin3,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Vacuuming',
        },
        {
            name: 'Regular Light',
            image: LightBulb,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Snowing',
        },
        {
            name: 'Regular Light',
            image: Gasolin1,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Snowing',
        },
        {
            name: 'Regular Light',
            image: LightBulb,
            price: 8.5,
            ratingNumber: 1.2,
            wishList: false,
            categoryN: 'Snowing',
        },

    ]

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={Styles.ProductsListTop}>
            <CategoryProducts navigation={navigation} categoryName="Oil & Fluids" data={CategoriesData} category={category} />
            <CategoryProducts navigation={navigation} categoryName="Lightining" data={CategoriesData} category={category} />
            <CategoryProducts navigation={navigation} categoryName="Snowing" data={CategoriesData} category={category} />
            <CategoryProducts navigation={navigation} categoryName="Brushing" data={CategoriesData} category={category} />
            <CategoryProducts navigation={navigation} categoryName="Vacuuming" data={CategoriesData} category={category} />
        </ScrollView>
    )
}

export default ProductList