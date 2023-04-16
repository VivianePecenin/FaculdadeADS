import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { DetailsNewsScreenParams } from "../../screen/recipes"
import { DetailsRecipesNewsScreenParams } from "../../screen/detailsMeals/interface"

export type AppStackParamList = {
    Categorias: undefined,
    Recipes: DetailsNewsScreenParams,
    DetailsRecipes: DetailsRecipesNewsScreenParams, 

}

export type AppNavigatorProps = NativeStackNavigationProp<AppStackParamList>
