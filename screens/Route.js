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
import Demo from './Demo'
import Privacy from './privacyAndPolicy'
const Route = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName='privacy'>
            <Stack.Screen options={{ headerShown: false }} name='products' component={ProductsHolder} />
            <Stack.Screen options={{ headerShown: false }} name='categories' component={Categories} />
            <Stack.Screen options={{ headerShown: false }} name='productDetails' component={ProductDetails} />
            <Stack.Screen options={{ headerShown: false }} name='leaveReview' component={LeaveReview} />
            <Stack.Screen options={{ headerShown: false }} name='wishList' component={WishList} />
            <Stack.Screen options={{ headerShown: false }} name='checkout' component={Checkout} />
            <Stack.Screen options={{ headerShown: false }} name='theme' component={Theme} />
            <Stack.Screen options={{ headerShown: false }} name='demo' component={Demo} />
            <Stack.Screen options={{ headerShown: false }} name='privacy' component={Privacy} />
        </Stack.Navigator>
    )
}

export default Route