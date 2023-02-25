import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Styles from './style'
import Gasoline from '../../../../../assets/Products/Gasoline1.png'
import { Icon } from '@rneui/base'
import Ionicons from '@expo/vector-icons/Ionicons'
import Title from '../../../../../src/components/title'
const CategoryProduct = ({ product, category, navigation }) => {
    console.log(product)
    const [name, setName] = useState(null)
    const seAllFunc = () => {

    }
    console.log(product)




    return (
        <TouchableOpacity style={Styles.mainHolderProduct} onPress={() => navigation && navigation.navigate('productDetails')}>
            <View style={Styles.imageHeartHolder}>
                <Image style={Styles.productImage} source={product.image} />
                <TouchableOpacity>
                    <Ionicons size={24} style={Styles.heartIcon} name="heart-outline" />
                </TouchableOpacity>
            </View>
            <View>
                <View style={Styles.nameCartIconHolder}>
                    <Text style={Styles.productName}>{product.name.length > 12 ? product?.name?.slice(0, 13) + '..' : product.name}</Text>
                    <View style={Styles.cartHolder}>
                        <Ionicons name='cart-outline' size={27} />
                    </View>
                </View>
                <View style={Styles.startRtingHolder}>
                    <Ionicons name='star-half' size={18} color='#F89F1A' />
                    <Text style={Styles.ratingText}>{product.ratingNumber}</Text>
                </View>
            </View>
            <View style={Styles.priceRatingHolder}>

                <Text style={Styles.priceText}>${product.price}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryProduct