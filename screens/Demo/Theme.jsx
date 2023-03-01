import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Switch, StyleSheet, Dimensions } from 'react-native'
import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType'
import { interpolate, interpolateColor, useAnimatedStyle, useDerivedValue, useSharedValue } from 'react-native-reanimated'
import Animated from 'react-native-reanimated'

const Theme = () => {
    const [theme, setTheme] = useState('light')
    const COLORS = {
        light: {
            background: '#fff',
            circle: '#faf7f7',
            text: '#000'
        },
        dark: {
            background: '#211f1f',
            circle: '#403f3f',
            text: '#fff'
        }
    }
    const SWITCH_COLORS = {
        true: 'red',
        false: "yellow"
    }
    const mode = useDerivedValue(() => {
        return theme == 'dark' ? 1 : 0
    }, [theme])

    const wBStyle = useAnimatedStyle(() => {

        const backgroundColor = interpolateColor(mode.value, [0, 1], [COLORS.light.background, COLORS.dark.background])
        return {
            backgroundColor
        }
    })

    return (
        <Animated.View style={[styles.container, wBStyle]}>
            <Switch
                trackColor={SWITCH_COLORS}
                thumbColor="purple"
                value={theme === 'dark'}
                onValueChange={(toggled) => setTheme(toggled ? 'dark' : 'light')}
            />
        </Animated.View>
    )
}

export default Theme
const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
        justifyContent: 'center',
        alignItems: 'center'

    }
})