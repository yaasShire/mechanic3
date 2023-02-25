import { StyleSheet } from "react-native";
export default StyleSheet.create({
    mainHolder: {
        flex: 1,
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 34
    },
    textName: {
        paddingHorizontal: 0,
        paddingVertical: 10,
        width: 380,
        fontSize: 20,
        color: '#000000',
        lineHeight: 24.2,
        fontStyle: 'normal',
        textAlign: 'left',
        alignItems: 'center',
        justifyContent: "center",
        fontWeight: '500'

    },
    reviewText: {
        color: '#969595',
        paddingHorizontal: 1,
        paddingVertical: 0,
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 19
    },
    reviewStartHolder: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    descriptionText: {
        paddingHorizontal: 5,
        paddingVertical: 1,
        fontWeight: 'bold',
        fontSize: 17,
        lineHeight: 21,
        color: '#151515',
        fontStyle: 'normal',
        marginBottom: 11
    },
    productInfoDetail: {
        paddingHorizontal: 8,
        paddingVertical: 1,
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 19,
        color: '#767676',
        width: 376,
        textAlign: 'left'
    },
    descriptionDetailHolder: {
        marginTop: 10,
        marginBottom: 11
    },
    itemInfoText: {
        paddingHorizontal: 1,
        paddingVertical: 0,
        fontSize: 17,
        fontWeight: '500',
        lineHeight: 20,
        color: '#151515'
    },
    itemInfoTextHolder: {
        marginBottom: 5
    },
    itemType: {
        paddingHorizontal: 1,
        paddingVertical: 0,
        fontSize: 14,
        fontStyle: 'normal',
        lineHeight: 17,
        color: '#696969'
    },
    categoryText: {
        color: '#696969',
        paddingHorizontal: 1,
        paddingVertical: 1,
        fontWeight: '400',
        fontSize: 14

    },
    availableQuantityText: {
        paddingHorizontal: 1,
        paddingVertical: 0,
        fontSize: 14,
        lineHeight: 16,
        color: '#696969'
    },
    itemTypeValue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#D9D9D9',
        borderBottomWidth: 1,
        marginBottom: 6,
        paddingVertical: 8

    },
    itemTypeValueText: {
        paddingHorizontal: 10,
        paddingVertical: 1,
        color: '#696969',
        lineHeight: 17,
        textAlign: 'right',
        flexWrap: 'wrap'
    },
    categoryValue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#D9D9D9',
        borderBottomWidth: 1,
        marginBottom: 5,
        paddingVertical: 10
    },
    availableQuantityValue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#D9D9D9',
        borderBottomWidth: 1,
        marginBottom: 6,
        paddingVertical: 10
    },
    buttonWrapper: {
        paddingHorizontal: '6%',
        paddingVertical: '3.5%',
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"

    },
    actionButtonsHolder: {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 5,
        paddingHorizontal: '11.5%'
    },
    countText: {
        fontSize: 30,
        fontWeight: '500',
        lineHeight: 36,
        textAlign: 'center',
        color: "#151515",
        fontStyle: "normal",

    },
    qunatityText: {
        color: "#696969",
        fontStyle: 'normal',
        fontSize: 14,
        fontWeight: '400',

    },
    buttonPriceAddButtonHolder: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    },
    priceText: {
        color: '#696969',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 17,
        fontWeight: "400"
    },
    pricequantityText: {
        fontSize: 30,
        fontStyle: 'normal',
        lineHeight: 36,
        fontWeight: '500',
        color: '#151515'

    },
    addButton: {
        paddingHorizontal: '6%',
        paddingVertical: '2.5%',
        backgroundColor: '#000000',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"

    },
    addText: {
        color: '#FFFFFF',
        lineHeight: 21,
        fontWeight: '500',
        fontSize: 17,
        fontStyle: 'normal',
        marginRight: 10
    },
    seeMoreText: {
        color: "#87b5e6"
    },
    seeLess: {
        color: '#87b5e6'
    }
})