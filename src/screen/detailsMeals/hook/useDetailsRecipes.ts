import { useEffect, useState } from "react";
import { Meals } from "../../../data/model";
import { newsService } from "../../../data/service";
import {UseDetailsRecipesNewsResult } from "./interface";

const useDetailsReceitasNews = (meals: string): UseDetailsRecipesNewsResult => {
    const [isLoading, setIsLoading] = useState(false)
    const [detailsMeals, setDetailsMeals] = useState<Meals[]>([])

    const getDetailsRecipes = async (): Promise<Meals[]> => {
        const resultDetailsRecitas = (await newsService.getDetailsReceitas(meals))

        return resultDetailsRecitas
    }


    useEffect(() => {
        const loadHeadlines = async () => {
            setIsLoading(true)
            const resultDetailsRecipes = await getDetailsRecipes()
            setIsLoading(false)
            setDetailsMeals(resultDetailsRecipes)

        }

        loadHeadlines()
    }, [])

    return {
        isLoading,
        detailsMeals,

    }
}

export default useDetailsReceitasNews