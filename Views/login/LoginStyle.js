/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
const styles = StyleSheet.create({
    scrollView: {
        padding: 20,
        backgroundColor: Colors.lighter,
    },
    forms: {
        justifyContent: 'center'
    },
    button: {

    },
    buttons: {

        // backgroundColor: "powderblue",
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        flex: 1,

        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: Colors.lighter,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default styles