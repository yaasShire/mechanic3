import { StyleSheet, Dimensions } from "react-native";
const { width, height } = new Dimensions.get('screen')
export default StyleSheet.create({
    tabsHolder: {
        marginTop: 18,
    },
    tabsFlatList: {
        padding: '0%'
    }
})