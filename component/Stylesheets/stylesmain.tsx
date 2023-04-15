import { StyleSheet } from 'react-native'

const stylesmain = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        flexDirection: "row",
        alignContent: "center",
        alignItems: 'center',
        justifyContent: "space-evenly",
        backgroundColor: '#afeeee'
    },
    Image: {
        height: 100,
        width: 100,
        borderWidth: 10,
        borderRadius: 10,
        resizeMode: "center"

    },

    loadingindicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    
    name: {
        color: "black",
        fontSize: 15

    },
    country: {
        color: "black",
        fontSize: 15
    },
    datalist: {
        backgroundColor: "#7fffd4",
        flex: 1

    },
    textinput: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#ffebcd',

    },
    flatlist:{
        paddingTop: 40
    },

})
export default stylesmain;