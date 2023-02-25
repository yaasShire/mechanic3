import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import CategoryProduct from './CategoryProduct/CategoryProduct'
import Title from '../../../../src/components/title'
import Styles from './style'

const CategoryProducts = ({ data, categoryName, category, navigation }) => {
    const seAllFunc = () => {

    }
    console.log(data)
    return (
        <View >

            <Title label={categoryName} onClickOption={seAllFunc} navigation={navigation} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    data.map((data, index) => (
                        <CategoryProduct key={index} navigation={navigation} product={data} />
                    ))
                }
            </ScrollView>

        </View>
    )
}

export default CategoryProducts