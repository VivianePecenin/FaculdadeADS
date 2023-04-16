import { RouteProp } from "@react-navigation/native"
import { Meals} from "../../data/model"
import { AppStackParamList } from "../../navigation/app/interface"

export type DetailsRecipesNewsScreenParams = {
    meals: Meals,
}

export type DetailsRecipesRouteProp = RouteProp<AppStackParamList, 'DetailsRecipes'>
