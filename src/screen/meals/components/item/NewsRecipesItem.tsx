import { Image, Pressable, Text, View } from "react-native"
import { NewsRecipesItemProps } from "./interface"
import styles from "./Styled"
import { useNavigation } from "@react-navigation/native"
import { AppNavigatorProps } from "../../../../navigation/app"
import { memo } from "react"

const NewsRecipesItem = ({ meals}: NewsRecipesItemProps) => {
    
    const navigator = useNavigation<AppNavigatorProps>()

    const openDetails = () =>  {
        navigator.navigate("DetailsRecipes", {meals})
    }

    return (
        <Pressable style={styles.container} onPress={openDetails}>

            { meals.strMealThumb ? 
                <Image source={{ uri: meals.strMealThumb }} 
                    style={styles.cover}/>
                    : null
            }
            <View>
            <Text style={styles.title}>{meals.strMeal}</Text>
            </View>
        </Pressable>
    )
}

export default memo(NewsRecipesItem)
