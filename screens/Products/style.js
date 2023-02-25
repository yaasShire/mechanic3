import { StyleSheet, Dimensions } from "react-native";
const { width, height } = new Dimensions.get('window')
export default StyleSheet.create({
    ProductWholeScreen: {
        // height,
        // // width,
        flex: 1,
        backgroundColor: '#F5F5F5',
        // padding: 5
        marginLeft: 10,
        // marginRight: -50
    },
    titleTabsHolder: {
        // marginTop: 19,
        height: 140,
        // width: 400
        // backgroundColor: 'green',
    },
    title: {
        marginBottom: 0
    }
})