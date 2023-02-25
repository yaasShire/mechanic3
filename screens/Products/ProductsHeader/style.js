import { StyleSheet, Dimensions } from "react-native";
const { width, height } = new Dimensions.get('screen')
export default StyleSheet.create({
    categoryText: {
        // width: 219,
        // height: 23,
        color: '#151515',
        fontSize: 17,
        lineHeight: 20.57,
        fontStyle: 'normal',
        fontWeight: "500",
    },
    productHeader: {
        // marginTop: 90,
        // marginLeft: 20,
        // // marginRight: 190,
        // marginLeft: 21,
        marginBottom: -50
        // alignItems

    }
})