import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        margin: 10,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'black'
    },
    introduct: { 
        fontSize: 18,
        fontStyle: 'italic',
        margin: 10,
        textAlign: 'center',
    },
    cover: {
        height: 250,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    introductContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginBottom: 10,
    }
})

export default styles