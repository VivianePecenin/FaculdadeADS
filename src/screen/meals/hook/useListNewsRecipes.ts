import { useEffect, useState } from "react";
import { Meals } from "../../../data/model";
import { newsService } from "../../../data/service";
import {UseListRecipesNewsResult } from "./interface";

const useReceitasListNews = (categories: string): UseListRecipesNewsResult => {
    const [isLoading, setIsLoading] = useState(false)
    const [meals, setMeals] = useState<Meals[]>([])

    const getRecipes = async (): Promise<Meals[]> => {
        const resultRecitas = (await newsService.getReceitas(categories))

        return resultRecitas
    }


    useEffect(() => {
        const loadHeadlines = async () => {
            setIsLoading(true)
            const resultRecipes = await getRecipes()
            setIsLoading(false)
            setMeals(resultRecipes)

        }

        loadHeadlines()
    }, [])


    return {
        isLoading,
        meals,

    }
}

export default useReceitasListNews