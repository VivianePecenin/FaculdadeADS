import { FlatList, ListRenderItemInfo } from "react-native"
import { Categories} from "../../data/model"
import { LoaderIndicator } from "./components/loader"
import useReceitasListNews from "./hook/useListNews"
import React, { useCallback } from "react"
import { NewsCategoryItem } from "./components/item"

const CategoriasReceitasNews = () => {

    const { isLoading, categories } = useReceitasListNews()

    const renderArticle = useCallback(({ item }: ListRenderItemInfo<Categories>) =>
        <NewsCategoryItem categories={item} />, [])

    const newsKeyExtractor = useCallback((_: Categories, index: number) => index.toString(), [])

    if (isLoading) {
        return <LoaderIndicator />
    }

    return (
        <FlatList 
            data={categories}
            renderItem={renderArticle}
            keyExtractor={newsKeyExtractor}
        />
    )
}

export default CategoriasReceitasNews