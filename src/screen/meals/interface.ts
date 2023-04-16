import { RouteProp } from "@react-navigation/native"
import { Categories} from "../../data/model"
import { AppStackParamList } from "../../navigation/app/interface"

export type MealsNewsScreenParams = {
    categories: Categories,
}

export type MealsNewsRouteProp = RouteProp<AppStackParamList, 'Recipes'>
