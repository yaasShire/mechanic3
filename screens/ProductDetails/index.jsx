import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SwiperC from './swiper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native'
import style from './style'
const ProductDetails = ({ navigation }) => {
    const [showMore, setShowMore] = useState(true)
    const [showDescriptionFully, setShowDescriptionFully] = useState(false)
    const [seeLess, setSeeLess] = useState(false)
    const productDetailInfo = [
        {
            name: "Ut, doloreconsectetur adipisicing elit. Ut, dolore ",
            rate: 4.2,
            numberOfPeoplesReview: 42,
            descriptionInfo: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam explicabo
             dignissimos debitis doloribus repellendus! Qui aut perferendis ad! consectetur adipisicing elit. Ut, doloreconsectetur adipisicing elit. Ut, dolore ! consectetur adipisicing elit. Ut, doloreconsectetur adipisicing elit. Ut, dolore ! consectetur adipisicing elit. Ut, doloreconsectetur adipisicing elit. Ut, dolore ! consectetur adipisicing elit. Ut, doloreconsectetur adipisicing elit. Ut, dolore`,
            itemType: `oil`,
            category: `Oil & Fluids`,
            AvailableQuantity: 35,
            countNumber: 1,
            price: 3.9,


        },
        {
            name: "Ut, doloreconsectetur adipisicing elit. Ut, dolore ",
            rate: 4.2,
            numberOfPeoplesReview: 42,
            descriptionInfo: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam explicabo
            at architecto dignissimos debitis doloribus repellendus! Qui aut perferendis ad! consectetur adipisicing elit. Ut, doloreconsectetur adipisicing elit. Ut, dolore ! consectetur adipisicing elit. Ut, doloreconsectetur adipisicing elit. Ut, dolore ! consectetur adipisicing elit. Ut, doloreconsectetur adipisicing elit. Ut, dolore ! consectetur adipisicing elit. Ut, doloreconsectetur adipisicing elit. Ut, dolore`,
            itemType: `oil`,
            category: `Oil & Fluids`,
            AvailableQuantity: 32,
            countNumber: 1,
            price: 3.9,


        },
        {
            name: "Ut, doloreconsectetur adipisicing elit. Ut, dolore ",
            rate: 4.2,
            numberOfPeoplesReview: 42,
            descriptionInfo: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam explicabo
            at architecto dignissimos debitis doloribus repellendus! Qui aut perferendis ad! consectetur adipisicing elit. Ut, doloreconsectetur adipisicing elit. Ut, dolore ! consectetur adipisicing elit. Ut, doloreconsectetur adipisicing elit. Ut, dolore ! consectetur adipisicing elit. Ut, doloreconsectetur adipisicing elit. Ut, dolore ! consectetur adipisicing elit. Ut, doloreconsectetur adipisicing elit. Ut, dolore`,
            itemType: `oil`,
            category: `Oil & Fluids`,
            AvailableQuantity: 32,
            countNumber: 1,
            price: 3.9,


        },
        {
            name: "Ut, doloreconsectetur adipisicing elit. Ut, dolore ",
            rate: 4.2,
            numberOfPeoplesReview: 42,
            descriptionInfo: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam explicaboat architecto dignissimos debitis doloribus repellendus! Qui aut perferendis ad! consectetur adipisicing elit. Ut, doloreconsectetur adipisicing elit. Ut, dolore ! consectetur adipisicing elit. Ut, doloreconsectetur adipisicing elit. Ut, dolore ! consectetur adipisicing elit. Ut, doloreconsectetur adipisicing elit. Ut, dolore ! consectetur adipisicing elit. Ut, doloreconsectetur adipisicing elit. Ut, dolore`,
            itemType: `oil`,
            category: `Oil & Fluids`,
            AvailableQuantity: 32,
            countNumber: 1,
            price: 3.9,


        },
    ]
    return (
        <SafeAreaView style={style.mainHolder} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <SwiperC />
                <View>
                    <View>
                        <View >
                            <Text style={style.textName}>{productDetailInfo[0].name}</Text>
                        </View>
                        <View style={style.reviewStartHolder}>
                            <Ionicons name='star-half-full' size={27} color='#F89F1A' />
                            <Text style={style.reviewText}>{productDetailInfo[0].rate}(32 reviews)</Text>
                        </View>
                    </View>
                    <View style={style.descriptionDetailHolder}>
                        <Text style={style.descriptionText}>Description</Text>
                        {
                            productDetailInfo[0].descriptionInfo.length > 300 ? <View><Text style={style.productInfoDetail}>{showDescriptionFully ? productDetailInfo[0].descriptionInfo : productDetailInfo[0].descriptionInfo.slice(0, 100)}</Text>
                                {
                                    showMore && <TouchableOpacity
                                        onPress={() => {
                                            setShowDescriptionFully(true)
                                            setShowMore(false)
                                            setSeeLess(true)
                                        }}
                                    ><Text style={style.seeMoreText}>See more</Text></TouchableOpacity>
                                }
                            </View> : <Text style={style.productInfoDetail}>
                                {productDetailInfo[0].descriptionInfo}</Text>
                        }{
                            seeLess && (

                                <TouchableOpacity onPress={() => {
                                    setShowDescriptionFully(false)
                                    setSeeLess(false)
                                    setShowMore(true)
                                }}>
                                    <Text style={style.seeLess}>See less</Text>
                                </TouchableOpacity>
                            )
                        }

                    </View>
                    <View style={style.itemInfoTextHolder} >
                        <Text style={style.itemInfoText}>Item info</Text>
                        <View>
                            <View style={style.itemTypeValue}>
                                <Text style={style.itemType}>item type</Text>
                                <Text style={style.itemTypeValueText}>{productDetailInfo[0].itemType}</Text>
                            </View>
                            <View style={style.divier} />
                            <View style={style.categoryValue}>
                                <Text style={style.categoryText}>Category</Text>
                                <Text style={style.itemTypeValueText}>{productDetailInfo[0].category}</Text>
                            </View>
                            <View style={style.availableQuantityValue}>
                                <Text style={style.availableQuantityText}>Available quantities </Text>
                                <Text style={style.itemTypeValueText}>{productDetailInfo[0].AvailableQuantity}</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={style.qunatityText}>Quantity</Text>
                    </View>
                    <View style={style.actionButtonsHolder}>
                        <TouchableOpacity style={style.buttonWrapper}>
                            <Ionicons name='minus' size={27} />
                        </TouchableOpacity>
                        <View>
                            <Text style={style.countText}>1</Text>
                        </View>
                        <TouchableOpacity style={style.buttonWrapper}>
                            <Ionicons name='plus' size={27} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={style.priceText}>Price</Text>
                        <View style={style.buttonPriceAddButtonHolder}>
                            <View>
                                <Text style={style.pricequantityText}>$3.7</Text>
                            </View>
                            <TouchableOpacity style={style.addButton} onPress={() => navigation.navigate('leaveReview')}>
                                <Text style={style.addText}>Add</Text>
                                <Ionicons name='cart' size={20} color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductDetails

