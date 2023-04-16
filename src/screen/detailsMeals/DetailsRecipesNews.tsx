import { FlatList, ListRenderItemInfo } from "react-native"
import { Meals } from "../../data/model"

import { useCallback } from "react"

import { useRoute } from "@react-navigation/native"
import { DetailsRecipesRouteProp } from "./interface"
import { LoaderIndicator } from "./components/loader"
import { DetailsMeals } from "./components/item"
import useDetailsReceitasNews from "./hook/useDetailsRecipes"

const DetailsReceitasNews = () => {

    const {params: {meals}} = useRoute<DetailsRecipesRouteProp>()

    const { isLoading, detailsMeals } = useDetailsReceitasNews(meals.idMeal)


    const renderArticle = useCallback(({ item }: ListRenderItemInfo<Meals>) =>
        <DetailsMeals meals={item} />, [])

    const newsKeyExtractor = useCallback((_: Meals, index: number) => index.toString(), [])

    if (isLoading) {
        return <LoaderIndicator />
    }

    return (
        <FlatList 
            data={detailsMeals}
            renderItem={renderArticle}
            keyExtractor={newsKeyExtractor}
        />
    )
}
export default DetailsReceitasNews