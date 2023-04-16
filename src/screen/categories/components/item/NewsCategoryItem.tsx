import { Image, Pressable, Text, View } from "react-native"
import { NewsCategoryItemProps } from "./interface"
import styles from "./Styled"
import { useNavigation } from "@react-navigation/native"
import { AppNavigatorProps } from "../../../../navigation/app"
import { memo } from "react"

const NewsCategoryItem = ({ categories}: NewsCategoryItemProps) => {

    const navigator = useNavigation<AppNavigatorProps>()

    const openDetails = () => {

        navigator.navigate('Recipes', {categories})
    }

    return (
        <Pressable style={styles.container} onPress={openDetails}>

            { categories.strCategoryThumb ? 
            <Image source={{ uri: categories.strCategoryThumb }} 
                style={styles.cover}/>
                : null
            }
            <Text style={styles.title}>{categories.strCategory}</Text>
            <View style={styles.categoryContainer}>
                <Text style={styles.source}>{categories.strCategoryDescription}</Text>
            </View>
        </Pressable>
    )
}

export default memo(NewsCategoryItem)
