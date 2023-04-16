import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginVertical: 8,
        backgroundColor: '#fffff',
        borderRadius: 10,
        elevation: 2,
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2}
    },
    cover: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        margin: 10,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    categoryContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    source: { 
        textAlign: 'left',
        fontSize: 15,
        flex: 0.8,
    },
})

export default styles
