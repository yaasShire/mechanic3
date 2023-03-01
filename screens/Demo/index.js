import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { View, StyleSheet, FlatList } from 'react-native';
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAnimatedStyle, useSharedValue, useAnimatedGestureHandler } from 'react-native-reanimated';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const DATA = [
    { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
    { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
    { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
    { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
    { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
    { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
    { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
    { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];
const Demo = () => {
    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)
    const panGestureEvent = useAnimatedGestureHandler({
        onStart: (event) => {
            translateX.value = event.translationX
            translateY.value = event.translationY
        },
        onActive: (event) => {
            translateX.value = event.translationX
            translateY.value = event.translationY
            console.log(event)
        },
        onEnd: (event) => { }
    })
    const animatedStyle = useAnimatedStyle(() => {
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
        <SafeAreaView style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, backgroundColor: 'green' }}
                data={DATA}
                renderItem={({ item, index }) => {
                    // <View>
                    if (index == 0) {
                        return (
                            <PanGestureHandler onGestureEvent={panGestureEvent} >
                                <Animated.View style={[animatedStyle]}>
                                    <Card style={[styles.cardHolder]}>
                                        <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                                        <Card.Content>
                                            <Text variant="titleLarge">Card title</Text>
                                            <Text variant="bodyMedium">Card content</Text>
                                        </Card.Content>
                                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                                        <Card.Actions>
                                            <Button>Cancel</Button>
                                            <Button>Ok</Button>
                                        </Card.Actions>
                                    </Card>
                                </Animated.View>
                            </PanGestureHandler>

                        )
                    }
                    // </View>
                }}
            />
        </SafeAreaView>
    )
};

export default () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Demo />
        </GestureHandlerRootView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    cardHolder: {
        // width: '80%'
        marginTop: 30
    }
})