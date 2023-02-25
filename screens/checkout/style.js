import { StyleSheet } from "react-native";
export default StyleSheet.create({
    mainHolder: {
        marginBottom: 15,
        marginLeft: '4%',
        marginRight: '4%'
    },
    image: {
        resizeMode: "contain",
        width: 401,
        height: 252,
        marginTop: 45
    },
    textDescription: {
        paddingHorizontal: '10%',
        textAlign: 'center',
        fontWeight: '300',
        fontSize: 15,
        lineHeight: 18,
        color: '#A4A4A4',
        fontStyle: 'normal'
    },
    label: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 17,
        fontStyle: 'normal',
        color: "#696969",
        padding: 5
    },
    inputHolder: {
        marginTop: 80
    },
    input: {
        width: 380,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        padding: 5,
        marginBottom: 25
    },
    btnHolder: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})