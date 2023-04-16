import { View, Text, Image } from "react-native"
import styles from "./Styled";
import { NewsDetailsRecipesItemProp } from "./interface";

const DetailsMeals = ({meals}: NewsDetailsRecipesItemProp) => {

    return (       
            <View>
                { meals.strMealThumb ? 
                    <Image source={{ uri: meals.strMealThumb }} 
                        style={styles.cover}/>
                        : null
                }
            
                <Text style={styles.title}>{meals.strMeal}</Text>
                <View style={styles.introductContainer}>
                <Text style={styles.introduct}>{meals.strInstructions}</Text>
                </View>
            
            </View>

    )
}

export default DetailsMeals;