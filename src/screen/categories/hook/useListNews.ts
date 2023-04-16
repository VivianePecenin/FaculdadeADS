import { useEffect, useState } from "react";
import { Categories } from "../../../data/model";
import { newsService } from "../../../data/service";
import { UseListCategoriasNewsResult } from "./interface";

const useReceitasListNews = (): UseListCategoriasNewsResult => {
    const [isLoading, setIsLoading] = useState(false)
    const [categories, setCategories] = useState<Categories[]>([])

    const getCategory = async (): Promise<Categories[]> => {
        const resultCategory = await newsService.getCategory()
        return resultCategory
    }


    useEffect(() => {
        const loadHeadlines = async () => {
            setIsLoading(true)
            const resultCategory = await getCategory()
            setIsLoading(false)
            setCategories(resultCategory)

        }

        loadHeadlines()
    }, [])


    return {
        isLoading,
        categories,
    }
}

export default useReceitasListNews