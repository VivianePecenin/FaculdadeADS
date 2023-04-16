
export const NEWS_API_BASE_URL = "https://www.themealdb.com/api/json/v1/1"


export const GET_TOP_CATEGORY = '/categories.php'

export const GET_RECEITAS = (categories: String) => `/filter.php?c=${categories} `

export const GET_DETAILS_RECITAS = (meals:String) => `/lookup.php?i=${meals}`
