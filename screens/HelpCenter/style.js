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
        fontSize: 18
    },
    welcomTextHolder: {
        padding: '5%'
    },
    descriptionHolder: {
        textAlign: 'center',
        paddingHorizontal: '6%',
        marginTop: '3%'
    },
    emailIcon: {
        width: 60,
        height: 60,
        // resizeMode: "cover",
        margin: '5%'
    },
    cardsHolder: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        paddingHorizontal: '10%',
        flexDirection: 'row',
        padding: '5%'
    },
    card: {
        backgroundColor: '#FFFFFF',
        shadowOffset: {
            width: 100,
            height: 100
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        width: 150,
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,

    },
    textCallUsHolder: {
        justifyContent: 'center',
        alignItems: "center"
    },
    text: {
        textAlign: 'center'
    }
})