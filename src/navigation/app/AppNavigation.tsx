import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "./interface";
import DetailsReceitasNews from "../../screen/detailsMeals/DetailsRecipesNews";
import { CategoriasReceitasNews } from "../../screen/categories";
import { ReceitasNews } from "../../screen/meals";

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categorias">
            <Stack.Screen name="Categorias" component={CategoriasReceitasNews} />
            <Stack.Screen name="Recipes" component={ReceitasNews} />
            <Stack.Screen name='DetailsRecipes' component={DetailsReceitasNews}/>
        </Stack.Navigator>
    )
}

export default AppNavigator