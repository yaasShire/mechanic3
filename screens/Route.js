import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductsHolder from './Products/ProductsHolder'
import Categories from './Categories/Index'
import ProductDetails from './ProductDetails'
import LeaveReview from './LeaveReview'
import WishList from './wishList'
import Checkout from './checkout'
import Theme from './Demo/Theme'
const Route = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName='theme'>
            <Stack.Screen options={{ headerShown: false }} name='products' component={ProductsHolder} />
            <Stack.Screen options={{ headerShown: false }} name='categories' component={Categories} />
            <Stack.Screen options={{ headerShown: false }} name='productDetails' component={ProductDetails} />
            <Stack.Screen options={{ headerShown: false }} name='leaveReview' component={LeaveReview} />
            <Stack.Screen options={{ headerShown: false }} name='wishList' component={WishList} />
            <Stack.Screen options={{ headerShown: false }} name='checkout' component={Checkout} />
            <Stack.Screen options={{ headerShown: false }} name='theme' component={Theme} />
        </Stack.Navigator>
    )
}

export default Route