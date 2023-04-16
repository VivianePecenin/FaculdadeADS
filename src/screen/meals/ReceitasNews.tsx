import { FlatList, ListRenderItemInfo } from "react-native"
import { Meals } from "../../data/model"
import useReceitasListNews from "./hook/useListNewsRecipes"
import { useCallback } from "react"
import { LoaderIndicator } from "./components/loader"
import { NewsRecipesItem } from "./components/item"
import { useRoute } from "@react-navigation/native"
import { MealsNewsRouteProp } from "./interface"

const ReceitasNews = () => {

    const {params: {categories}} = useRoute<MealsNewsRouteProp>()

    const { isLoading, meals } = useReceitasListNews(categories.strCategory)


    const renderArticle = useCallback(({ item }: ListRenderItemInfo<Meals>) =>
        <NewsRecipesItem meals={item} />, [])

    const newsKeyExtractor = useCallback((_: Meals, index: number) => index.toString(), [])

    if (isLoading) {
        return <LoaderIndicator />
    }

    return (
        <FlatList 
            data={meals}
            renderItem={renderArticle}
            keyExtractor={newsKeyExtractor}
        />
    )
}
export default ReceitasNews