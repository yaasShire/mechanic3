import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    imageHolder: {
        resizeMode: "cover",
        paddingVertical: '5%',
        paddingHorizontal: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '65%',
        height: '45%',
    },
    welcomText: {
        textAlign: 'center',
        fontWeight: '500',
        // fontSize: '25px'
    },
    welcomTextHolder: {
        padding: '5%'
    }
})