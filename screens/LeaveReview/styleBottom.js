import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0F7FA',
    },
    bottomNavigationView: {
        backgroundColor: '#fff',
        width: '100%',
        height: 650,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
    imageHolder: {
        width: 123,
        height: 85,
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
        justifyContent: "center",
        alignItems: 'center'
    },
    image: {
        height: 68,
        resizeMode: 'contain'
    },
    LeaveReviewText: {
        fontSize: 23,
        lineHeight: 27,
        textAlign: 'center',
        color: '#151515',
        fontWeight: '500',
        marginTop: 20
    },
    productCom: {
        alignItems: 'flex-start',
        // backgroundColor: 'blue',
        width: "100%",
        flexDirection: 'row',
        // justifyContent: 'space-around'

    },
    completedRating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ratingIconStar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '2%'
    },
    completedHolder: {
        width: 75,
        height: 19,
        borderRadius: 10,
        backgroundColor: '#EEEEEE',
        justifyContent: 'center',
        alignItems: 'center'
    },
    completedText: {
        width: 60,
        height: 13,
        fontSize: 10,
        lineHeight: 12,
        textAlign: 'center'
    },
    reviewText: {
        fontSize: 9,
        lineHeight: 11,
        color: '#969595',
        fontStyle: 'normal',
        fontWeight: '400',

    },
    productDescriptionHolder: {
        marginLeft: '2%',
    },
    wholeProductHolder: {
        marginLeft: '-14%',
        marginTop: "5%",

    },
    productName: {
        fontWeight: '500',
        color: '#151515',
        fontSize: 20,
        lineHeight: 24,

    },
    price: {
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 22,
        fontStyle: "normal"
    },
    divider: {
        width: 376,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        marginTop: '10%'
    },
    reviewQuestion: {
        fontWeight: '500',
        fontSize: 23,
        color: "#151515",
        lineHeight: 28,
        textAlign: 'center',
        marginBottom: 9
    },
    reviewRuquestText: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        textAlign: 'center',
        color: '#A4A4A4'
    },
    reviewQuestionRequestHolder: {
        marginTop: '5.8%'
    },
    ratingHolder: {
        color: '#D88B18'
    },
    textInputHolderStyle: {
        width: 372,
        height: 133,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#EEEEEE',


    },
    textInputStyle: {
        padding: 10
    },
    textInputReviewText: {
        fontSize: 14,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 17,
        color: '#696969',
        textAlign: 'left',
        justifyContent: 'flex-start',
        marginBottom: '2.5%',
        paddingTop: 0

    },
    closeBtn: {
        width: 184,
        height: 48,
        backgroundColor: '#EEEEEE',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: "center",
        marginRight: 10

    },
    submitBtn: {
        width: 184,
        height: 48,
        backgroundColor: '#000000',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: "center"

    },
    btnHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '10%',
    },
    btnTextWhiteText: {
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 17,
        color: '#000000',
        lineHeight: 21

    },
    btnBlackText: {
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 17,
        color: '#FFFFFF',
        lineHeight: 21

    },
});