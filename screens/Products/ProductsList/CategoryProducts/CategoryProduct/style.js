import { StyleSheet } from "react-native";
export default StyleSheet.create({
    imageHeartHolder: {
        width: 182,
        height: 149,
        borderRadius: 10,
        backgroundColor: '#ebebf2',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    heartIcon: {

        // alignSelf: 'flex-start',
        // textAlign: 'left',
        marginTop: '-400%',
        marginLeft: -10,
        alignSelf: "flex-start",
        padding: 1
    },
    productImage: {

        resizeMode: "contain",
        width: 150,

    },
    nameCartIconHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        alignItems: 'flex-start'
    },
    productName: {
        fontSize: 19,
        lineHeight: 24,
        color: '#151515',
        fontWeight: '600',
        fontStyle: 'normal',

    },
    cartHolder: {
        width: 37,
        height: 34,
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceRatingHolder: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    mainHolderProduct: {
        width: 172,
        marginRight: 25,
        marginBottom: 20


    },
    startRtingHolder: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
    },
    priceText: {
        fontSize: 16,
        lineHeight: 19.36,
        fontWeight: '500',
        fontStyle: 'normal',
        marginTop: -12

    },
    ratingText: {
        fontSize: 12,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 15,
        color: '#969595'
    }
})