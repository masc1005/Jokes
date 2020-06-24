import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3acb'
    },
    header:{
        flexDirection:'row',
        justifyContent: 'space-between',
        backgroundColor: '#f6f6f6',
        width: '100%',
        height: 70,
        paddingTop: 30,
        paddingLeft: 35,
        paddingRight: 35
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20
    },
    counter: {
        fontSize: 20,
        fontWeight: '700'
    },
    bod:{
        textAlign: 'center',
        paddingTop: 70
    },
    tit:{
        fontSize: 15,
        fontWeight: '600'
    },
    joke:{
        fontSize: 20,
        fontWeight:'bold'
    }

})