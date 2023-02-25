import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

import {
    GestureHandlerRootView,
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

const SIZE = 90;
const CIRCLE_RADIUS = SIZE * 2;




function Demo() {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const panEvent = useAnimatedGestureHandler({
        onStart: (event, context) => {
            context.translateX = translateX.value
            context.translateY = translateY.value
        },
        onActive: (event, context) => {
            translateX.value = event.translationX + context.translateX
            translateY.value = event.translationY + context.translateY
        },
        onEnd: (event, context) => {
            const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2)
            if (distance < CIRCLE_RADIUS + SIZE / 2) {
                translateX.value = 0,
                    translateY.value = 0

            }
        }
    })

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value
                },
                {
                    translateY: translateY.value
                }
            ]
        }
    })


    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                <PanGestureHandler onGestureEvent={panEvent} >
                    <Animated.View style={[styles.square, rStyle]} />
                </PanGestureHandler>
            </View>
        </View>
    );
}

export default () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Demo />
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    square: {
        width: SIZE,
        height: SIZE,
        backgroundColor: 'rgba(0, 0, 256, 0.5)',
        borderRadius: 20,
    },
    circle: {
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: CIRCLE_RADIUS,
        borderWidth: 5,
        borderColor: 'rgba(0, 0, 256, 0.5)',
    },
});