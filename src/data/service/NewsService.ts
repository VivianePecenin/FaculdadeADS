import { ApiConfig } from "../../config/api";
import { httpClient } from "../../infra/http";
import { Categories, Headlines , Meals } from "../model";

export const getCategory = async (): Promise<Categories[]> => {
    const response = await httpClient.get<Headlines>(ApiConfig.GET_TOP_CATEGORY)
    return response.data.categories
}

export const getReceitas = async (categories: string): Promise<Meals[]> => {
    const response = (await httpClient.get<Headlines>(ApiConfig.GET_RECEITAS(categories)))

    return response.data.meals
}

export const getDetailsReceitas = async (meals: string): Promise<Meals[]> => {
    const response = (await httpClient.get<Headlines>(ApiConfig.GET_DETAILS_RECITAS(meals)))

    return response.data.meals
}

