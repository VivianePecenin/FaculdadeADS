import { Meals} from "../../../data/model";

export interface UseListRecipesNewsResult {
    isLoading: boolean,
    meals: Meals[],
}
