import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginVertical: 8,
        backgroundColor: '#c5ec86',
        borderRadius: 10,
        elevation: 2,
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2}
    },
    title: {
        margin: 10,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000'
    },
    cover: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    
})

export default styles